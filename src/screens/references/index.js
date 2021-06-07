import React, { useEffect, useState } from "react";
import "./style.css";
import Filter from "../../components/Filter";
import { NavBar } from "../../components/NavBar";
import DocumentCard from "../../components/DocumentCard";
import { firestore } from "../../services/firebase/firebase";

const listFilter = [
  {
    id: "all",
    data: "Tất cả",
  },
  {
    id: "kanji",
    data: "Tài liệu Kanji, chữ Hán",
  },
  {
    id: "choukai",
    data: "Tài liệu luyện nghe",
  },
  {
    id: "dokkai",
    data: "Tài liệu đọc hiểu",
  },
  {
    id: "bunpou",
    data: "Tài liệu ngữ pháp",
  },
];

export const References = () => {
  const [references, setReferences] = useState([]);
  const [checkReferences, setCheckReferences] = useState([]);

  const getReferences = () => {
    let db = firestore.doc(`References/All`);
    db.get().then((doc) => {
      if (doc.exists) {
        let data = doc.data()["documents"];
        setReferences(data);
        setCheckReferences(data);
      } else {
        // doc.data() will be undefined in this case
        console.log("no data");
      }
    });
  };

  const setStateFilter = (typeCheck) => {
    let tmp = [...checkReferences.filter((item) => item.type === typeCheck)];
    typeCheck === "all" ? setReferences(checkReferences) : setReferences(tmp);
  };

  useEffect(() => {
    getReferences();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <NavBar
        style={{ backgroundColor: "#fff", color: "#000", outlineColor: "#000" }}
      />

      {/* References */}
      <div className="container-fluid references">
        <div className="row">
          <Filter
            listFilter={listFilter}
            setStateFilter={(typeCheck) => setStateFilter(typeCheck)}
          />
          <div className="col-sm-9 p-4">
            <div className="row row-cols-2">
              {references?.map((item) => (
                <DocumentCard
                  key={item?.id}
                  title={item?.title}
                  cover={item?.cover}
                  linkDownload={item?.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};
