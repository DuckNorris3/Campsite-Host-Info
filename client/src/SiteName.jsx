/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { CampSiteTitle } from './styles.js';

const SiteName = ({ site }) => {
  let tentHopVerified;
  if (site.verified === 1) {
    tentHopVerified = (
      <span>

        <svg data-tip data-for="verified" stroke="currentColor" fill="#4199FF" strokeWidth="0" viewBox="0 300 512 512" height=".5em" width=".5em" xmlns="http://www.w3.org/2000/svg" overflow="visible"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" /></svg>
        <ReactTooltip id="verified" place="bottom" effect="solid" backgroundColor="black">
          The listing&apos;s accuracy has been
          <br />
          {' '}
          verified by a
          {' '}
          <strong>
            Tenthop
            <br />
            {' '}
            Photograher
          </strong>
          {' '}
          who has visited
          <br />
          {' '}
          and photographed the property.
          {' '}
        </ReactTooltip>
      </span>
    );
  }

  if (site) {
    return (
      <CampSiteTitle>
        { site.siteName }
        { tentHopVerified }
      </CampSiteTitle>
    );
  }
  return (
    <div />
  );
};

export default SiteName;
