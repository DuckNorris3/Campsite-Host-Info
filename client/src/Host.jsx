import React from 'react';
import {HostContainer, HostName} from './styles.js'

const Host = (props) => {
  return (
    <HostContainer>
      <img style={{height: '98px', width: '98px', borderRadius: '50%'}}src={props.site.hostAvatar}></img>
      <HostName>
        <div>Hosted By</div>
        <div>{props.site.hostName}</div>
      </HostName>
    </HostContainer>
  )
}

export default Host;