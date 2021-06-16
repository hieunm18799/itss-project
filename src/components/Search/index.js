
import React, { useState } from "react";
import {
    BsSearch
} from "react-icons/bs";
import "./style.css";
function Search({ handleSearch }) {
    const [sortValue, setSortValue] = useState("");

    function handleChange(e) {
        setSortValue(e.target.value);
    }
    return (
        <form className="form-inline mt-4 mb-4">

            <div className="col-6">

                <input className="form-control form-control ml-3 w-75 col-11" type="text" placeholder="Search" aria-label="Search" onChange={handleChange} />

                <button
                    style={{ borderColor: '#fff', width: 40, height: 40, borderRadius: 5 }}
                    type={"button"}
                    onClick={() => { handleSearch(sortValue) }}
                >
                    <BsSearch />
                </button>
            </div>

        </form>
    );
}

export default Search;
