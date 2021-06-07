import React from "react";
import { FaDownload } from "react-icons/fa";

const DocumentCard = ({ cover, title, linkDownload }) => {
  return (
    <div className="col mb-4">
      <div
        className="card rounded references__card"
        style={{ maxWidth: "540px" }}
      >
        <div className="row no-gutters" style={{ height: "100%" }}>
          <div className="col-sm-5">
            <img
              src={cover}
              className="card-img p-3"
              alt={title}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-sm-7">
            <div className="card-body">
              <h5 className="references__card-title">{title}</h5>
              <a href={linkDownload} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="btn btn-success references__button--download"
                >
                  <FaDownload className="mr-1" />
                  Tải về
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
