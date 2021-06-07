import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export const BackBtn = ({ children, style, dest }) => {
  return (
    <Link to={`${dest}`}>
      <button className="turn-back-button" style={{ ...style }}>
        <div className="turn-back--icon">
          <AiFillHome />
        </div>
        <span className="turn-back--text">{children}</span>
      </button>
    </Link>
  );
};
