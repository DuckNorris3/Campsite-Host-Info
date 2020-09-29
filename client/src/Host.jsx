import React from 'react';

const Host = (props) => {
  return (
    <div>
      <img src={props.site.hostAvatar}></img>
      Hosted By {props.site.hostName}
    </div>
  )
}

export default Host;