import React, { useState } from "react";
import "./style.css";

const Item = ({ title, filter, onClick, id }) => {
  return (
    <button
      id={id}
      type="button"
      className="filter__item"
      style={{ backgroundColor: title === filter ? "#5BFF7F" : "" }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const Filter = ({ listFilter, setStateFilter }) => {
  const [filter, setFilter] = useState("Tất cả");

  const combineFilter = (id, data) => {
    setStateFilter(id);
    setFilter(data);
  };

  return (
    <div className="col-sm-3 rounded p-4">
      <div className="dropdown mb-2">
        <button
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="btn btn-secondary dropdown-toggle w-100"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Thể loại
        </button>
      </div>
      <div className="list-group list-group-flush">
        {listFilter.map((item) => (
          <Item
            title={item.data}
            onClick={() => combineFilter(item.id, item.data)}
            filter={filter}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
