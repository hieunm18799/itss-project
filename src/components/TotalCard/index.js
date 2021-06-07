import React from "react";
import "./style.css";
import { BsCheckAll } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const TotalCard = ({ total, course }) => {
    return (
        <div className="container">
            <div>
                <p className="total-card-title">Lộ trình</p>
                <p>
                    {total > 90 ? (
                        <>
                            <BsCheckAll style={{ marginRight: "5px" }} />
                            <i> Đã hoàn thành</i>
                        </>
                    ) : (
                        <>
                            <BsArrowRepeat style={{ marginRight: "5px" }} />
                            <i>Đã hoàn thành {total}%</i>
                        </>
                    )}
                </p>
                {/* <div className="dot">
          <div className="total__card-stastic">{total}%</div>
        </div> */}
                <div
                    style={{ width: "200px", marginBottom: "25px", marginTop: "25px" }}
                >
                    <CircularProgressbar
                        strokeWidth={4}
                        value={total}
                        text={`${total}%`}
                        styles={buildStyles({
                            textColor: "#f27a54",
                            pathColor: "#f27a54",
                            textSize: "25px",
                        })}
                    />
                </div>
            </div>
        </div>
    );
};
