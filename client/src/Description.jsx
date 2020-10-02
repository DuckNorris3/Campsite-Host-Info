/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import { DescriptionContainer, CovidGuidelines, DescriptionText } from './styles.js';

const Description = ({ site }) => {
  const nameArray = site.hostName.split(' ');
  const firstName = nameArray[0];

  let covid = (
    <div> </div>
  );

  if (site.covid === 1) {
    covid = (
      <CovidGuidelines>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="2" viewBox="0 -1 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" /></svg>
        <span>
          {firstName}
          {' '}
          has self-certified that Hipcamp’s COVID-19 Safety Standards have been implemented at this listing. See what’s being done here.
        </span>
      </CovidGuidelines>
    );
  }
  return (
    <DescriptionContainer>
      {covid}
      <DescriptionText>
        { site.description }
      </DescriptionText>
    </DescriptionContainer>
  );
};

export default Description;
