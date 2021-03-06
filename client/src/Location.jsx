/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import { LocationContainer } from './styles.js';

const Location = ({ site }) => (
  <LocationContainer data-testid="locationTest">
    {site.country}
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 17.707L16.414 12 10.707 6.293 9.293 7.707 13.586 12 9.293 16.293z" /></svg>
    {site.state}
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 17.707L16.414 12 10.707 6.293 9.293 7.707 13.586 12 9.293 16.293z" /></svg>
  </LocationContainer>
);

export default Location;
