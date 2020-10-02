/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import { CampSiteTitle } from './styles.js';

const SiteName = ({ site }) => {
  if (site) {
    return (
      <CampSiteTitle>
        { site.siteName }
      </CampSiteTitle>
    );
  }
  return (
    <div />
  );
};

export default SiteName;
