import React, { Fragment } from "react";
import "./style.css";
import { BackBtn } from "../../../components/backBtn";
import axios from "axios";

const renderList = (kanji, borderRadius = "50%") => {
  return (
    <div className="vocabulary-list">
      <div
        className="vocabulary-item-content"
        style={{ borderRadius: `${borderRadius}` }}
      >
        <div className="vocabulary-item">{kanji}</div>
      </div>
      <div
        className="vocabulary-item-content"
        style={{ borderRadius: `${borderRadius}` }}
      >
        <div className="vocabulary-item">{kanji}</div>
      </div>
      <div
        className="vocabulary-item-content"
        style={{ borderRadius: `${borderRadius}` }}
      >
        <div className="vocabulary-item">{kanji}</div>
      </div>
      <div
        className="vocabulary-item-content"
        style={{ borderRadius: `${borderRadius}` }}
      >
        <div className="vocabulary-item">{kanji}</div>
      </div>
      <div
        className="vocabulary-item-content"
        style={{ borderRadius: `${borderRadius}` }}
      >
        <div className="vocabulary-item">{kanji}</div>
      </div>
      <div
        className="vocabulary-item-content"
        style={{ borderRadius: `${borderRadius}` }}
      >
        <div className="vocabulary-item">{kanji}</div>
      </div>
    </div>
  );
};

class Vocabulary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      kanjiProps: {},
    };
  }
  componentDidMount() {
    const options = {
      method: "GET",
      url: "https://kanjialive-api.p.rapidapi.com/api/public/kanji/%E8%A8%AA",
      headers: {
        "x-rapidapi-key": "5fd8ef1a6cmsha87c517a1311409p10aa4fjsnf756c10b29e3",
        "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        const data = res.data;
        console.log(res.data.examples);
        this.setState({ data, kanjiProps: data.kanji }, () => {
          console.log("DATA:", this.state.data);
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  render() {
    const data = this.state?.data;
    const exampleList = data?.examples || [];
    const kanji = this.state.kanjiProps;
    return (
      <Fragment>
        <BackBtn
          style={{ position: "absolute", top: "80px", left: "75px" }}
          dest="/course"
        >
          Back to course
        </BackBtn>

        <div className="vocabulary-section__content">
          <div className="vocabulary-list"></div>

          {/* Vocabulary meaning content */}
          <div className="vocabulary-meaning__container">
            <div className="meaning__row">
              <div className="meaning__item">
                <span className="meaning__item--title">Onyomi</span>
                <span className="meaning__item--content">
                  {kanji?.onyomi?.romaji}
                </span>
              </div>
              <div className="meaning__item">
                <span className="meaning__item--title">Hiragana</span>
                <span className="meaning__item--content">
                  {kanji?.kunyomi?.hiragana}
                </span>
              </div>
              <div className="meaning__item">
                <span className="meaning__item--title">Stroke</span>
                <span className="meaning__item--content">
                  {kanji?.strokes?.count}
                </span>
              </div>
            </div>
            <div className="meaning__row">
              <div className="meaning__item">
                <span className="meaning__item--title">Kunyomi</span>
                <span className="meaning__item--content">
                  {kanji?.onyomi?.romaji}
                </span>
              </div>
              <div className="meaning__item">
                <span className="meaning__item--title">Katakana</span>
                <span className="meaning__item--content">
                  {kanji?.onyomi?.katakana}
                </span>
              </div>
              <div className="meaning__item">
                <span className="meaning__item--title">Nghĩa Anh</span>
                <span className="meaning__item--content">
                  {kanji?.meaning?.english}
                </span>
              </div>
            </div>
          </div>

          <div className="vocabulary-main__container">
            {/* Kanji writing learning */}
            <div className="vocabulary-writing__container">
              <div className="vocabulary-writing__title">
                Ấn vào để xem cách viêt
              </div>
              <div className="vocabulary-writing__main">
                {kanji?.character}
                {/* <video autoplay muted loop id="myVideo">
                  <source src={kanji?.video?.webm} type="video/webm" />
                  Your browser does not support HTML5 video.
                </video> */}
              </div>
            </div>
            <div className="vocabulary-reading__container">
              <div
                className="vocabulary-reading__title"
                style={{ marginBottom: "10px" }}
              >
                Cách đọc và các từ vựng liên quan
              </div>
              {renderList(kanji?.character, "10px")}

              {/* Listening part */}
              <div className="vocabulary-listening__container">
                {exampleList.length !== 0
                  ? exampleList.map((item, idx) => (
                      <div key={idx} className="vocabulary-listening-item">
                        <span className="list-icon"></span>
                        <div className="item--name">{item?.japanese}</div>
                        <div className="item--meaning">
                          {item?.meaning?.english}
                        </div>
                        <div className="item--listening">
                          <audio controls className="audio">
                            <source src={item?.audio?.ogg} type="audio/ogg" />
                            {/* <source src="horse.mp3" type="audio/mpeg" /> */}
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
        <div className="done-bar fixed-bottom d-flex justify-content-center">
          <button
            onClick={this.props.doneLesson}
            className="btn btn-success my-3 px-5 rounded-pill"
          >
            Hoàn Thành
          </button>
        </div>
      </Fragment>
    );
  }
}

export { Vocabulary };
