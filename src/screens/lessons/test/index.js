import React, { useState } from "react";
import "./style.css";
import * as ROUTES from "../../../constant/routes";

import { BackBtn } from "../../../components/backBtn";
import Question from "../../../components/Question";

export const Test = ({ doneLesson, dataLesson }) => {
  const [answer, setAnswer] = useState([]);
  const [result, setResult] = useState(false);
  const [done, setDone] = useState(false);
  const checkResult = () => {
    setResult(true);
    setDone(true);
  };

  return (
    <>
      <div className="header">
        <BackBtn style={{ marginTop: "50px" }} dest={ROUTES.COURSE}>
          {" "}
          Back to course{" "}
        </BackBtn>
      </div>

      <div className="content">
        <h4 className="inline-block text-center mb-3">
          Chọn phương án đúng để hoàn thành các câu sau:
        </h4>
        {dataLesson?.question.map((question, id) => (
          <Question
            id={question.id}
            question={question}
            key={id}
            setAnswer={setAnswer}
            answer={answer}
            result={result}
          />
        ))}
      </div>
      <div className="done-bar fixed-bottom d-flex justify-content-center">
        {done ? (
          <button
            onClick={doneLesson}
            className="btn btn-success my-3 px-5 rounded-pill"
          >
            Hoàn thành
          </button>
        ) : (
          <button
            onClick={() => checkResult()}
            className="btn btn-success my-3 px-5 rounded-pill"
          >
            Kiểm Tra
          </button>
        )}
      </div>
    </>
  );
};
