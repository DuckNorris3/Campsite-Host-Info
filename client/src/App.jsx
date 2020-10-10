/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from 'react-loading-animation';

import SiteName from './SiteName.jsx';
import Nearby from './Nearby.jsx';
import Recommend from './Recommend.jsx';
import Host from './Host.jsx';
import Description from './Description.jsx';
import Location from './Location.jsx';
import { CampsiteHostInfoContainer, CampsiteDetailsContainer, OverviewContainer } from './styles.js';

function App() {
  const [site, setSite] = useState(null);

  const { siteId } = useParams();
  const [recommendList, setRecommendList] = useState([]);

  useEffect(() => {
    axios(`http://ec2-54-166-211-132.compute-1.amazonaws.com/api/sites/${siteId}`)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log('requesting data from server');
        setSite(response.data[0]);
      })
      .then(() => {
        axios(`http://ec2-54-166-211-132.compute-1.amazonaws.com/api/sites/${siteId}/recommend`)
          .then((response) => {
            setRecommendList(response.data);
          });
      });
  }, []);

  if (site) {
    return (
      <CampsiteHostInfoContainer>
        <CampsiteDetailsContainer>
          <Location site={site} />
          <SiteName site={site} />
          <Nearby site={site} />
          <Recommend recommendList={recommendList} />
        </CampsiteDetailsContainer>
        <OverviewContainer>
          <Host site={site} />
          <Description site={site} />
        </OverviewContainer>
      </CampsiteHostInfoContainer>
    );
  }
  return (
    <div>
      <Loading />
    </div>
  );
}

export default App;
