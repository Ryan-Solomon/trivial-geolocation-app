import React from 'react';

const Loader = ({ text = 'Please allow the location' }) => {
  return (
    <div class='ui active dimmer'>
      <div class='ui big text loader'>{text}</div>
    </div>
  );
};

export default Loader;
