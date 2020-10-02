import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';

import SiteName from './SiteName.jsx';
import Nearby from './Nearby.jsx';
import Recommend from './Recommend.jsx';
import Host from './Host.jsx';
import Description from './Description.jsx';
import Location from './Location.jsx';
import {CampsiteHostInfoContainer, CampsiteDetailsContainer, OverviewContainer} from './styles.js';



function App() {

  const [site, setSite] = useState(null);

  let { siteId } = useParams();
  const [recommendList, setRecommendList] = useState([]);

  useEffect(() => {
    axios(`/api/sites/${siteId}`)
      .then((response) => {
        console.log('requesting data from server');
        setSite(response.data[0])
      })
      .then(() => {
        axios(`/api/sites/${siteId}/recommend`)
          .then((response) => {
            setRecommendList(response.data);
          })
      })
  }, []);

  if (site) {
    console.log(site);
    return (
      <CampsiteHostInfoContainer>
        <CampsiteDetailsContainer>
          <Location site={site}/>
          <SiteName site={site}/>
          <Nearby />
          <Recommend recommendList={recommendList}/>
        </CampsiteDetailsContainer>
        <OverviewContainer>
          <Host site={site}/>
          <Description site={site}/>
        </OverviewContainer>
      </CampsiteHostInfoContainer>
    )
  } else {
    return (
      <div>
        Loading site...
      </div>
    )
  }
};

export default App;