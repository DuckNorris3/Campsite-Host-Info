/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import { DescriptionContainer, CovidGuidelines, DescriptionText } from './styles.js';

const Description = ({site}) => (
  <DescriptionContainer>
    <CovidGuidelines>
      Justin has self-certified that Hipcamp’s COVID-19 Safety Standards have been implemented at this listing. See what’s being done here.
    </CovidGuidelines>
    <DescriptionText>
      { site.description }
    </DescriptionText>
  </DescriptionContainer>
);

export default Description;
