/* eslint-disable react/prop-types */
import React from 'react';

const SiteName = ({ site }) => {
  if (site) {
    return (
      <div>
        <h1>
          { site.siteName }
        </h1>
      </div>
    );
  }
  return (
    <div />
  );
};

export default SiteName;
