import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SiteName from './SiteName.jsx';
import Nearby from './Nearby.jsx';
import Recommend from './Recommend.jsx';
import Host from './Host.jsx';
import Description from './Description.jsx';
import Location from './Location.jsx';



function App() {

  const [site, setSite] = useState(null);
  const dog = 'toby';

  useEffect(() => {
    axios('/api/sites/1')
      .then((response) => setSite(response.data[0]))
  }, []);

  if (site) {
    console.log(site);
    return (
      <div id='campsite-host-info-container'>
        <div id='campgrounds-details-container'>
          <Location site={site}/>
          <SiteName site={site}/>
          <Nearby />
          <Recommend site={site}/>
        </div>
        <section className='overview' id="overview-section">
          <Host site={site}/>
          <Description site={site}/>
        </section>
      </div>
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