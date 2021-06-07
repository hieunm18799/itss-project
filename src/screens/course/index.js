/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useContext } from "react";
import { NavBar } from "../../components/NavBar";
import "./style.css";
import * as ROUTES from "../../constant/routes";
import { AuthContext } from "../../services/auth";

import { ProgressBar, ListGroup } from "react-bootstrap";
import { firestore } from "../../services/firebase/firebase";
import { Link, Redirect } from "react-router-dom";
import { TotalCard } from "../../components/TotalCard";
import { useDispatch, useSelector } from "react-redux";
import { storeHistory } from "../../states/actions/historyCourse";
import { AiFillCaretDown } from "react-icons/ai";
import { Loading } from "../../components/Loading";

export const Course = () => {
  const [course, setCourse] = useState("");
  const [currentSelectBtn, setCurrentSelectBtn] = useState(0);
  const [loading, setLoading] = useState(false);
  const { history } = useSelector((state) => state.history);
  const total = Object.values(history).reduce(
    (t, { process }) => t + process * 0.2,
    0
  );
  const { currentUser } = useContext(AuthContext);
  const UID = currentUser?.uid;

  const dispatch = useDispatch();
  const level = [
    { id: 1, name: "N5" },
    { id: 2, name: "N4" },
    { id: 3, name: "N3" },
    { id: 4, name: "N2" },
    { id: 5, name: "N1" },
  ];

  const listCourse = [
    { id: "L1", name: "Buổi học số 1" },
    { id: "L2", name: "Buổi học số 2" },
    { id: "L3", name: "Buổi học số 3" },
    { id: "L4", name: "Buổi học số 4" },
    { id: "L5", name: "Buổi học số 5" },
  ];

  const getProcess = (btnCourse) => {
    setCourse(btnCourse); // lay name N5,N4...
    const db = firestore.doc(`/User/${UID}/History/${btnCourse}`);
    db.get().then((doc) => {
      if (doc.exists) {
        let data = doc.data();
        dispatch(storeHistory(data));
      }
    });
  };

  const addHistory = useCallback(() => {
    let obj = {
      L1: { data: [], process: 0 },
      L2: { data: [], process: 0 },
      L3: { data: [], process: 0 },
      L4: { data: [], process: 0 },
      L5: { data: [], process: 0 },
    };
    if (UID) {
      const db = firestore.doc(`/User/${UID}/History/N1`);
      db.get()
        .then((doc) => {
          if (!doc.exists) {
            for (let i = 1; i < 6; i++) {
              firestore.doc(`User/${UID}/History/N${i}`).set(obj);
            }// console.log('exist',UID)
          }
        })
        .then(() => {
          if (course === "") getProcess("N5");
        })
        .then(() => setLoading(true));
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    addHistory();
  }, []);

  if (!currentUser) return <Redirect to={ROUTES.SIGN_IN} />;
  else if (loading === false) return <Loading />;
  else
    return (
      <>
        {/*<NavBar/>*/}
        <NavBar
          style={{
            backgroundColor: "#fff",
            color: "#000",
            outlineColor: "#000",
          }}
        />

        {/*Level*/}
        <div className="ctn-level">
          {level.map((item, idx) => (
            <button
              className="ctn-col"
              onClick={() => {
                getProcess(item.name);
                setCurrentSelectBtn(idx);
              }}
              key={item.id}
              style={
                idx === currentSelectBtn
                  ? {
                      background:
                        "linear-gradient( to right bottom, rgba(242, 122, 84, 0.7), rgba(161, 84, 242, 0.7) )",
                    }
                  : null
              }
            >
              {item.name}
              <AiFillCaretDown />
            </button>
          ))}
        </div>

        {/*cnt courses*/}
        <div className="ctn-course">
          {/*list Course*/}
          <div className="ctn-list-course">
            <div className="ctn-sub-list-course">
              <p className="txt-title">DANH SÁCH BUỔI HỌC</p>

              <ListGroup style={{ paddingBottom: 100 }}>
                {listCourse.map((item) => (
                  <Link
                    to={{
                      pathname: `/course/${course}/${item.id}`,
                      state: {
                        stateCourse: course,
                        stateLesson: item.id,
                        nameLesson: item.name,
                      },
                    }}
                    key={item.id}
                  >
                    <ListGroup.Item className="ctn-list-group">
                      <div style={{ width: "20%" }}>{item.name}</div>
                      <ProgressBar
                        now={history[item.id]?.process}
                        className="item-progressBar"
                      />
                      <div
                        className="percent-process"
                        style={{ width: "10%", textAlign: "right" }}
                      >
                        {`${history[item.id]?.process || 0}%`}
                      </div>
                    </ListGroup.Item>
                  </Link>
                ))}
              </ListGroup>
            </div>
          </div>

          {/*cnt process*/}
          <div className="ctn-process-course">
            <TotalCard total={total} course={course} />
            {/* <CircularProgressbar value={total} text={`${total}%`} />; */}
          </div>
        </div>

        {/*Footer*/}
        <div />
      </>
    );
};
