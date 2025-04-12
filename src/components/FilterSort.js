import React from "react";

function FilterSort({ onFilter, onSort }) {
  return (
    <div className="ui menu">
      <div className="item">
        <button className="ui button" onClick={() => onFilter("greased")}>
          Show Greased
        </button>
      </div>
      <div className="item">
        <button className="ui button" onClick={() => onSort("name")}>
          Sort by Name
        </button>
        <button className="ui button" onClick={() => onSort("weight")}>
          Sort by Weight
        </button>
      </div>
    </div>
  );
}

export default FilterSort;