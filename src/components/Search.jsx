import React, { useContext } from "react";
import { useBasicContext } from "../context/BasicContextProvider";
function Search() {
  //   const { setLocation } = useBasicContext();
  return (
    <div>
      <input type="text" name="Location" id="" className="bg-cards-color" />
    </div>
  );
}

export default Search;
