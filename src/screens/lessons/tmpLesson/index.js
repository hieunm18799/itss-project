/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Grammar } from "../grammar";
import { Vocabulary } from "../vocabulary";
import { Reading } from "../reading";
import { Test } from "../test";
import {firebaseAuth, firestore} from "../../../services/firebase/firebase";
import { addLesson } from "../../../states/actions/historyCourse";
import { useDispatch, useSelector } from "react-redux";

export const Temp = (props) => {
  const { idLesson, stateCourse, stateLesson } = props.location.state;
  const dispatch = useDispatch();
  const dataHistory = useSelector((state) => state.history.history)[stateLesson]
    ?.data;
  let checkTypeLess = idLesson.slice(0, 1);
  const [dataLesson, setDataLesson] = useState(null);
  const UID = firebaseAuth.currentUser?.uid;

  const done = () => {
    let db = firestore.doc(`User/${UID}/History/${stateCourse}`);
    let tmp = [...dataHistory, idLesson];
    let updateProcess = parseFloat(((tmp.length / 8) * 100).toFixed(2));
    db.update({
      [stateLesson]: { data: tmp, process: updateProcess },
    }).then(() => {
      dispatch(addLesson({ lesson: stateLesson, id: idLesson }));
      props.history.goBack();
    });
  };

  const getDataLesson = () => {
    const typeLesson = (function () {
      switch (checkTypeLess) {
        case "G":
          return "Grammar";
        case "R":
          return "Reading";
        case "T":
          return "Test";
        default:
          return;
      }
    })();
    let db = firestore.doc(`Course/${stateCourse}/${stateLesson}/${typeLesson}`);
    db.get().then((doc) => {
      if (doc.exists) {
        let data = doc.data()[idLesson];
        setDataLesson(data);
      } else {
        // doc.data() will be undefined in this case
        setDataLesson({});
      }
    });
  };

  useEffect(() => {
    getDataLesson();
  }, []);

  switch (checkTypeLess) {
    case "G":
      return <Grammar doneLesson={() => done()} dataLesson={dataLesson} />;
    case "V":
      return <Vocabulary doneLesson={() => done()} />;
    case "R":
      return <Reading doneLesson={() => done()} dataLesson={dataLesson} />;
    case "T":
      return <Test doneLesson={() => done()} dataLesson={dataLesson} />;
    default:
      return;
  }
};
