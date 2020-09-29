import React from 'react';

const SiteName = (props) => {

  if (props.site)
  return (
    <div>
      <h1>

      {props.site.siteName}
      </h1>
    </div>
  )
};

export default SiteName;