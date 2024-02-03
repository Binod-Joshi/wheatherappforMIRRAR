import React from "react";
import { useState } from "react";
import "./Search.css";
import { UilSearchAlt} from "@iconscout/react-unicons";
import { UserContext } from "../../context/Context";

const Search = () => {
  const { searchHandler } = UserContext();
  const [inputs, setInputs] = useState("");
  const changeHandler = (e) => {
    setInputs(e.target.value);
  }
  return (
    <div className="search">
      <div className="searchCard">
        <form className="searchNearButton" onSubmit={(e) => searchHandler(e, inputs,setInputs(""))}>
          <input
            type="text"
            value={inputs}
            onChange={changeHandler}
            placeholder="search...."
          />
          <button className="searchNearButton1"><UilSearchAlt /></button>
        </form>
      </div>
    </div>
  );
};

export default Search;
