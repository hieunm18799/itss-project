import React from "react";
import "./style.css";

const Question = ({ id, question, setAnswer, answer, result }) => {
  const check = (value) => {
    if (answer.find((item) => item.id === id)) {
      let tmp = answer.filter((item) => item.id !== id);
      setAnswer([...tmp, { id: id, value: value }]);
    } else setAnswer([...answer, { id: id, value: value }]);
  };

  const checkColor = (type) => {
    if (
      answer.find((item) => item.value === type && item.id === id) &&
      question?.correct_answer === type &&
      result
    )
      return "#28a745";
    if (answer.find((item) => item.value === type && item.id === id) && result)
      return "#eb4d4b";
    if (question?.correct_answer === type && result) return "#28a745";
    else return "#000000";
  };

  return (
    <div className="question">
      <div className="question__title">Câu hỏi {id}</div>
      <p className="question__content">{question.title}</p>
      <div className="answer">
        {question?.answer.map((item) => (
          <div className="form-check" key={item?.type}>
            <input
              className="form-check-input"
              type="radio"
              name={id + "answer"}
              value={item?.type}
              id={id + item?.type}
              onChange={(e) => check(e.target.value)}
              disabled={result}
            />
            <label
              className="form-check-label"
              htmlFor={id + item?.type}
              id={item?.type}
              style={{ color: checkColor(item?.type) }}
            >
              {item?.content}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
