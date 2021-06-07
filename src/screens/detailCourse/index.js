import React from "react";
import { ProcessCard } from "../../components/ProcessCard";
import { NavBar } from "../../components/NavBar";
import "./style.css";
import { CircleLesson } from "../../components/CircleLesson";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const DetailCourse = (props) => {
  const { stateCourse, stateLesson, nameLesson } = props.location.state;
  const dataHistory = useSelector((state) => state.history.history)[stateLesson]
    ?.data;
  let numberLesson = stateLesson.slice(-1);
  let listLesson = [
    {
      id: 1,
      title: `Từ vựng ${stateCourse} - Bài số ${numberLesson}`,
      data: [{ id: "V1" }, { id: "V2" }, { id: "V3" }],
    },
    {
      id: 2,
      title: `Ngữ pháp ${stateCourse} - Bài số ${numberLesson}`,
      data: [{ id: "G1" }, { id: "G2" }, { id: "G3" }],
    },
    {
      id: 3,
      title: `Đọc hiểu ${stateCourse} - Bài số ${numberLesson}`,
      data: [{ id: "R1" }],
    },
    {
      id: 4,
      title: `Kiểm tra ${stateCourse} - Bài số ${numberLesson}`,
      data: [{ id: "T1" }],
    },
  ];
  const listCourse = [
    { id: "L1", name: "Buổi học số 1" },
    { id: "L2", name: "Buổi học số 2" },
    { id: "L3", name: "Buổi học số 3" },
    { id: "L4", name: "Buổi học số 4" },
    { id: "L5", name: "Buổi học số 5" },
  ].filter((item) => item.id !== stateLesson);

  return (
    <>
      {/*<NavBar/>*/}
      <NavBar
        style={{ backgroundColor: "#fff", color: "#000", outlineColor: "#000" }}
      />

      <div className="page__gap" />
      <div className="ctn-course">
        <div className="ctn-list-course">
          <div className="ctn-sub-list-course">
            <p className="txt-title">{nameLesson}</p>

            {listLesson.map((item) => (
              <div style={{ marginBottom: 50 }} key={item.id}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div className="item-small-dot" />
                  <span className="txt-lesson">{item.title}</span>
                </div>
                <div className="ctn-process">
                  {item.data.map((item2) => (
                    <Link
                      to={{
                        pathname: `/course/${stateCourse}/${stateLesson}/${item2.id}`,
                        state: {
                          idLesson: item2.id,
                          stateCourse: stateCourse,
                          stateLesson: stateLesson,
                        },
                      }}
                      key={item2.id}
                    >
                      <CircleLesson
                        key={item2.id}
                        checkDone={dataHistory}
                        id={item2.id}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ctn-process-course">
          {/* <TotalCard /> */}
          <div className="list-lesson">
            {listCourse.map((item) => (
              <Link
                to={{
                  pathname: `/course/${stateCourse}/${item.id}`,
                  state: {
                    stateCourse: stateCourse,
                    stateLesson: item.id,
                    nameLesson: item.name,
                  },
                }}
                key={item.id}
              >
                <ProcessCard
                  title={item.name}
                  description={"Đã hoàn thành"}
                  total={240}
                  idLesson={item.id}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
