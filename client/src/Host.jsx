/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import { HostContainer, HostName } from './styles.js';

const Host = ({ site }) => (
  <HostContainer>
    <img style={{ height: '98px', width: '98px', borderRadius: '50%' }} src={site.hostAvatar} alt="Host Avatar" />
    <HostName>
      <div>Hosted By</div>
      <div>{site.hostName}</div>
    </HostName>
  </HostContainer>
);

export default Host;
