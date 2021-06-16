import React, { Fragment } from "react";
import "./style.css";
import { BackBtn } from "../../../components/backBtn";

export const Kanzi = ({ doneLesson, dataLesson }) => {
    const kanzi = dataLesson;
    
    return (
      <Fragment>
        <BackBtn
          style={{ position: "absolute", top: "80px", left: "75px" }}
          dest="/course"
        >
          Back to course
        </BackBtn>

        <div className="kanzi-section__content">
          <div className="kanzi-list"></div>

          {/* kanzi meaning content */}
          <div className="kanzi-meaning__container">
            <div className="meaning__row">
              <div className="meaning__item">
                <span className="meaning__item--title">Bộ</span>
                <span className="meaning__item--content">
                  {kanzi?.radicals}
                </span>
              </div>
              <div className="meaning__item">
                <span className="meaning__item--title">Onyomi</span>
                <span className="meaning__item--content">
                  {kanzi?.onyomi}
                </span>
              </div>
              <div className="meaning__item">
                <span className="meaning__item--title">Stroke</span>
                <span className="meaning__item--content">
                  {kanzi?.stroke}
                </span>
              </div>
            </div>
            <div className="meaning__row">
              <div className="meaning__item">
                <span className="meaning__item--title">JLPT</span>
                <span className="meaning__item--content">
                  {kanzi?.level}
                </span>
              </div>
              <div className="meaning__item">
                <span className="meaning__item--title">Kunyomi</span>
                <span className="meaning__item--content">
                  {kanzi?.kunyomi}
                </span>
              </div>
              {/* <div className="meaning__item">
                <span className="meaning__item--title">Nghĩa Anh</span>
                <span className="meaning__item--content">
                  {kanzi?.mean}
                </span>
              </div> */}
            </div>
          </div>

          <div className="kanzi-main__container">
            {/* kanzi writing learning */}
            <div className="kanzi-writing__container">
              <div className="kanzi-writing__title">
                Chữ hán
              </div>
              <div className="kanzi-writing__main">
                {kanzi?.title}
              </div>
            </div>
            <div className="kanzi-reading__container">
              <div
                className="kanzi-reading__title"
                style={{ marginBottom: "10px" }}
              >
                Ý nghĩa và ví dụ
              </div>

              {/* Mean and Example part */}
              <div className="kanzi-example__container">
                <label className="mean-example__title">Ý nghĩa:</label>
                <p className="mean-example__content">{dataLesson?.mean}</p>
                <label className="mean-example__title">Ví dụ:</label>
                <p className="mean-example__content">{dataLesson?.example}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="done-bar fixed-bottom d-flex justify-content-center">
          <button
            onClick={doneLesson}
            className="btn btn-success my-3 px-5 rounded-pill"
          >
            Hoàn Thành
          </button>
        </div>
      </Fragment>
    );
};