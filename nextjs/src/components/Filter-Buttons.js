

import * as React from "react";
import data from "../data/items.js";

const FilterButtons = ({ menuItems, filterData, setData }) => {
  return (
    <div className="filter-buttons flex gap-5 justify-center m-10">
      {menuItems?.map((item, i) => {        
        return(
        <div key={i} className="filter-button" onClick={() => filterData(item)}>
          {item}
        </div>
      )})}
      <div className="filter-button" onClick={() => setData(data)}>
        All
      </div>
    </div>
  );
};

export default FilterButtons;

