import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Time for the beach',
    iconName: 'sun',
  },
  winter: {
    text: "It's cold. At least the snow looks nice",
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat <= 0 ? 'summer' : 'winter';
  }
};

const SeasonDisplay = ({ lat }) => {
  const month = new Date().getMonth();
  const season = getSeason(lat, month);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
