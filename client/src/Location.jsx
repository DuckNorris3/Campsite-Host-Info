/* eslint-disable react/prop-types */
import React from 'react';

const Location = ({ site }) => (
  <div>
    {site.state}
    ,
    {site.country}
  </div>
);

export default Location;
