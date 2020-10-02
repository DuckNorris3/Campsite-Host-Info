import React from 'react';
import {DescriptionContainer, CovidGuidelines, DescriptionText} from './styles.js';

const Description = (props) => {
  return (
    <DescriptionContainer>
      <CovidGuidelines>
      Justin has self-certified that Hipcamp’s COVID-19 Safety Standards have been implemented at this listing. See what’s being done here.
      </CovidGuidelines>
      <DescriptionText>
        {props.site.description}
      </DescriptionText>
    </DescriptionContainer>
  )
};

export default Description;