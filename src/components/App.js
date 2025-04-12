import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterSort from "./FilterSort";
import hogs from "../porkers_data";

function App() {
  const [filteredHogs, setFilteredHogs] = useState(hogs);

  const handleFilter = (filterType) => {
    if (filterType === "greased") {
      setFilteredHogs(hogs.filter((hog) => hog.greased));
    } else {
      setFilteredHogs(hogs);
    }
  };

  const handleSort = (sortType) => {
    const sortedHogs = [...filteredHogs].sort((a, b) => {
      if (sortType === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortType === "weight") {
        return a.weight - b.weight;
      }
      return 0;
    });
    setFilteredHogs(sortedHogs);
  };

  return (
    <div className="App">
      <Nav />
      <FilterSort onFilter={handleFilter} onSort={handleSort} />
      <HogList hogs={filteredHogs} />
    </div>
  );
}

export default App;
