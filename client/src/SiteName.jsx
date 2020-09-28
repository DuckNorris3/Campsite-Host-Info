import React from 'react';

const SiteName = (props) => {

  console.log(props.site);

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