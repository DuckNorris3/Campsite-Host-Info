/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import { HostContainer, HostName } from './styles.js';

const Host = ({ site }) => {
  let starHost;
  if (site.starHost) {
    starHost = (
      <svg stroke="white" fill="#FFAA26" strokeWidth="2" backgroundcolor="white" viewBox="92 0 24 24" height="1.75em" width="1.75em" xmlns="http://www.w3.org/2000/svg" overflow="visible"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" /></svg>
    );
  }

  return (
    <HostContainer>
      <img style={{ height: '98px', width: '98px', borderRadius: '50%' }} src={site.hostAvatar} alt="Host Avatar" />
      {starHost}
      <HostName>
        <strong>Hosted By</strong>
        <div>{site.hostName}</div>
      </HostName>
    </HostContainer>
  );
};

export default Host;
