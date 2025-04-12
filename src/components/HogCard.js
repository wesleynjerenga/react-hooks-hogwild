import React, { useState } from "react";

function HogCard({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="ui card" onClick={handleClick}>
      <div className="image">
        <img src={hog.image || "default-image-url.jpg"} alt={hog.name} />
      </div>
      <div className="content">
        <h3 className="header">{hog.name}</h3>
      </div>
      {showDetails && (
        <div className="extra content">
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal: {hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
}

export default HogCard;