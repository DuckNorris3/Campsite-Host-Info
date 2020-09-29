import React from 'react';

const Location = (props) => {
  return (
    <div>
      {props.site.state}, {props.site.country}
    </div>
  )
}

export default Location;