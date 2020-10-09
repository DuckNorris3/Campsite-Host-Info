/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import ReactToolTip from 'react-tooltip';
import { usePopper } from 'react-popper';
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
  PopperContainer,
  ShareHeader,
  SocialContainer,
  ShareButton,
// eslint-disable-next-line import/extensions
} from './styles.js';

const Recommend = ({ recommendList }) => {
  const avatarStyle = {
    height: '100%',
    border: 'white solid 2px',
    borderRadius: '50%',
    marginRight: '-11px',
  };

  const [popperVisible, setPopperVisible] = useState(false);

  const buttonRef = useRef(null);
  const popperRef = useRef(null);
  const [arrowRef, setArrowRef] = useState(null);

  const { styles, attributes } = usePopper(
    buttonRef.current,
    popperRef.current,
    {
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: arrowRef,
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    },
  );

  function handleDocumentClick(event) {
    if (buttonRef.current.contains(event.target)) {
      return;
    }
    setPopperVisible(false);
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      // eslint-disable-next-line no-undef
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

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
  }

  let recommendGuest;

  if (recommendCount === 0) {
    recommendGuest = (
      <NoRecommendations data-testid="recommendTest">
        This listing needs a few more responses before we can provide a recommendation.
      </NoRecommendations>
    );
  } else {
    recommendGuest = (
      <LeftCTA data-testid="recommendTest">
        <span data-tip data-for="recommendTooltip">
          <svg stroke="currentColor" fill="rgb(64,217,172)" strokeWidth="0" viewBox="0 0 512 512" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z" /></svg>
          <RecommendText>
            {recommendPercentage}
            % Recommend
          </RecommendText>
        </span>
        <ReactToolTip id="recommendTooltip" place="bottom" effect="solid" backgroundColor="black">
          This recommendation is based
          <br />
          {' '}
          on responses from the Tenthop
          <br />
          {' '}
          community members who have
          <br />
          {' '}
          verified stays at this listing.
        </ReactToolTip>
        <GuestIcons>
          {/* <GuestAvatar> */}
          {recommendList.slice(0, 4).map((guest) => {
            const nameArray = guest.guestName.split(' ');
            const firstName = nameArray[0];
            return (
              <GuestAvatar>

                <img data-tip data-for={firstName} style={avatarStyle} src={guest.guestAvatar} alt="Guest Avatar" />
                <ReactToolTip id={firstName} place="top" effect="solid" backgroundColor="black">{firstName}</ReactToolTip>
              </GuestAvatar>
            );
          })}
          {/* </GuestAvatar> */}
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
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="100 0 512 512" height="14.41px" width="16px" xmlns="http://www.w3.org/2000/svg" overflow="visible"><path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z" /></svg>
          <span>Upload</span>
        </Button>
        <SaveButton>
          <span>Save to list</span>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9" /></svg>
        </SaveButton>
        <Button ref={buttonRef} onClick={() => setPopperVisible(!popperVisible)}>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
        </Button>
        { popperVisible ? (
          <PopperContainer
            ref={popperRef}
            style={styles.popper}
            placement="right"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attributes.popper}
          >
            <div ref={setArrowRef} style={styles.arrow} id="arrow" />
            <ShareHeader>Share this listing</ShareHeader>
            <SocialContainer>
              <svg stroke="currentColor" fill="#3A5895" strokeWidth="0" viewBox="0 0 512 512" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
              <div> &nbsp;Share </div>
            </SocialContainer>
            <SocialContainer>
              <svg stroke="currentColor" fill="#0178B5" strokeWidth="0" viewBox="0 0 512 512" height="3.25em" width="3.25em" xmlns="http://www.w3.org/2000/svg"><path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" /></svg>
              <div>&nbsp;LinkedIn</div>
            </SocialContainer>
            <SocialContainer>
              <svg stroke="currentColor" fill="#1C9CEC" strokeWidth="0" viewBox="75 0 1024 1024" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" /></svg>
              <div> Tweet </div>
            </SocialContainer>
            <SocialContainer>
              <svg stroke="currentColor" fill="#F74300" strokeWidth="0" viewBox="0 0 512 512" height="3em" width="3em" overflow="visible" xmlns="http://www.w3.org/2000/svg"><path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z" /></svg>
              <div> &nbsp;&nbsp;Reddit </div>
            </SocialContainer>
            <SocialContainer>
              <svg stroke="currentColor" fill="#C61F25" strokeWidth="0" viewBox="50 0 496 512" height="2.75em" width="2.75em" overflow="visible" xmlns="http://www.w3.org/2000/svg"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" /></svg>
              <div> &nbsp;Pin </div>
            </SocialContainer>
            <SocialContainer>
              <svg stroke="currentColor" fill="#018AF7" strokeWidth="0" viewBox="-50 0 512 512" height="2.5em" width="2.5em" overflow="visible" xmlns="http://www.w3.org/2000/svg"><path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" /></svg>
              <div>&nbsp;&nbsp;&nbsp;Messenger</div>
            </SocialContainer>
            <SocialContainer>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="3 0 24 24" height="2.75em" width="2.75em" overflow="visible" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              <div>Email</div>
            </SocialContainer>
            <SocialContainer>
              <svg stroke="currentColor" fill="#1C3662" strokeWidth="0" version="1.1" viewBox="-1 0 16 16" height="2.5em" width="2.5em" overflow="visible" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11.434 12.884c-0.472 0.222-0.9 0.378-1.281 0.469-0.381 0.088-0.797 0.134-1.241 0.134-0.506 0-0.803-0.063-1.191-0.191s-0.719-0.309-0.994-0.544c-0.275-0.238-0.463-0.488-0.569-0.753s-0.159-0.65-0.159-1.156v-3.872h-1.5v-1.563c0.434-0.141 0.938-0.344 1.244-0.606 0.309-0.263 0.559-0.578 0.744-0.947 0.188-0.369 0.316-0.837 0.388-1.406h1.569v2.55h2.556v1.972h-2.553v2.831c0 0.641-0.009 1.009 0.059 1.191s0.238 0.369 0.422 0.475c0.244 0.147 0.525 0.219 0.838 0.219 0.559 0 1.116-0.181 1.669-0.544v1.741z" /></svg>
              <div> &nbsp;&nbsp;&nbsp;tumblr </div>
            </SocialContainer>
            <ShareButton>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.465,11.293c1.133-1.133,3.109-1.133,4.242,0L13.414,12l1.414-1.414l-0.707-0.707c-0.943-0.944-2.199-1.465-3.535-1.465 S7.994,8.935,7.051,9.879L4.929,12c-1.948,1.949-1.948,5.122,0,7.071c0.975,0.975,2.255,1.462,3.535,1.462 c1.281,0,2.562-0.487,3.536-1.462l0.707-0.707l-1.414-1.414l-0.707,0.707c-1.17,1.167-3.073,1.169-4.243,0 c-1.169-1.17-1.169-3.073,0-4.243L8.465,11.293z" />
                <path d="M12,4.929l-0.707,0.707l1.414,1.414l0.707-0.707c1.169-1.167,3.072-1.169,4.243,0c1.169,1.17,1.169,3.073,0,4.243 l-2.122,2.121c-1.133,1.133-3.109,1.133-4.242,0L10.586,12l-1.414,1.414l0.707,0.707c0.943,0.944,2.199,1.465,3.535,1.465 s2.592-0.521,3.535-1.465L19.071,12c1.948-1.949,1.948-5.122,0-7.071C17.121,2.979,13.948,2.98,12,4.929z" />
              </svg>
              <div> Copy share link </div>
            </ShareButton>
          </PopperContainer>
        ) : null}
      </RightCTA>
    </CTAContainer>
  );
};

export default Recommend;
