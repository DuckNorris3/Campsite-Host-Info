import React, {useState} from 'react';
import axios from 'axios';

const Recommend = (props) => {
  console.log(props.recommendList);
  return (
    <div>
      <table>
        <tr>
          <td>guest Name</td>
          <td> gueset Avatar</td>
          <td>recommended</td>
        </tr>
        {props.recommendList.map((guest) => {
          return (
            <tr>
              <td>{guest.guestName}</td>
              <td><img src={guest.guestAvatar}></img></td>
              <td>{guest.recommended}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Recommend;