/* eslint-disable react/prop-types */
import React from 'react';
import {
  CTAContainer,
  RecommendText,
  GuestIcons,
  GuestAvatar,
  Pill,
  Button,
  RightCTA,
  LeftCTA,
  SaveButton,
  NoRecommendations,
// eslint-disable-next-line import/extensions
} from './styles.js';

const Recommend = ({ recommendList }) => {
  const avatarStyle = {
    height: '100%',
    border: 'white solid 2px',
    borderRadius: '50%',
    marginRight: '-11px',
  };

  let recommendCount = 0;
  for (let i = 0; i < recommendList.length; i += 1) {
    recommendCount += recommendList[i].recommend;
  }

  const recommendPercentage = ((recommendCount / recommendList.length) * 100).toFixed(0);

  let pill;
  if (recommendCount > 4) {
    pill = (
      <Pill>
        +
        {recommendCount - 1}
      </Pill>
    );
  } else {
    pill = (
      <div> </div>
    );
  }

  let recommendGuest;

  if (recommendCount === 0) {
    recommendGuest = (
      <NoRecommendations>
        This listing needs a few more responses before we can provide a recommendation.
      </NoRecommendations>
    );
  } else {
    recommendGuest = (
      <LeftCTA>
        <svg stroke="currentColor" fill="rgb(64,217,172)" strokeWidth="0" viewBox="0 0 512 512" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z" /></svg>
        <RecommendText>
          {recommendPercentage}
          % Recommend
        </RecommendText>
        <GuestIcons>
          <GuestAvatar>
            {recommendList.slice(0, 4).map((guest) => (
              <img style={avatarStyle} src={guest.guestAvatar} alt="Guest Avatar" />
            ))}
          </GuestAvatar>
        </GuestIcons>
        {pill}
      </LeftCTA>
    );
  }

  return (

    <CTAContainer>
      {recommendGuest}
      <RightCTA>
        <Button>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="14.41px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z" /></svg>
          <span>Upload</span>
        </Button>
        <SaveButton>
          <span>Save to list</span>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9" /></svg>
        </SaveButton>
        <Button>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
        </Button>
      </RightCTA>
    </CTAContainer>
  );
};

export default Recommend;
