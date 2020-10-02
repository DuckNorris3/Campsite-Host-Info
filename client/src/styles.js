import styled from 'styled-components';

const CampsiteHostInfoContainer = styled.div`
  display: flex;
  font-family: Calibre, Helvetica, Arial, sans-serif;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 30%;

  color: #333333;
  line-height: 1.42;
  height: auto;
  letter-spacing: 0.05em;
`;

const CampsiteDetailsContainer = styled.div`
  margin: 5px;
`;

const CampSiteTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  margin: 10px 0px;
`;

const CTAContainer = styled.div`
  margin 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RecommendText = styled.span`
  margin: 5px;
  font: 14px;
  color: #333333;
`;

const GuestIcons = styled.div`
  display: inline;
  align-items: center;
  margin: 5px;
  height: 40px;
  width: 130px;
  margin-right: -20px;
`;

const GuestAvatar = styled.div`
  height: 90%;
  width: 90%;
`;

const OverviewContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;

`;

const HostContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 10px 0px 0px;
  margin: 5px;
  justify-content: space-around;
  width: 30%;
  height: auto;
`;

const HostName = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  font-size: 12px;
  color: #333333;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

const DescriptionContainer = styled.div`

  margin: 5px;
  padding: 5px;
  width: 70%;
`;

const CovidGuidelines = styled.div`
  background: #F3E4EF;
  color: #972985;
  margin: 5px;
  padding: 15px;
  font-size: 14px;
  font-weight: 550;
  border-radius: 4px;
  line-height: 26px;
`;

const DescriptionText = styled.div`
  padding: 15px;
  margin: 5px;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
`;

const Pill = styled.div`
  width: 32px;
  height: 15px;
  font-size: 14px;
  border solid 2px #ebebeb;
  border-radius: 500px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.08);
  margin-right: -11px;
  background-color: #fff;
  padding: 2px;
  display: flex;
  justify-content: space-around;
  align-self: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 3px;
  height: 48px;
  width: auto;
  padding: 6px 12px;
  border: 1px solid #ebebeb;
  border-radius: 2px;
  background-color: transparent;
`;

const SaveButton = styled(Button)`
  color: #ED746D;
`;

const RightCTA = styled.div`
  display: flex;
  justify-content: flex-end;
  margin 5px;
`;

const LeftCTA = styled.div`
  display: flex;
  align-items: center;
  margin 5px;
`;

export {
  CampsiteHostInfoContainer,
  CampsiteDetailsContainer,
  CTAContainer,
  RecommendText,
  GuestIcons,
  GuestAvatar,
  OverviewContainer,
  HostContainer,
  HostName,
  DescriptionContainer,
  CovidGuidelines,
  DescriptionText,
  CampSiteTitle,
  LocationContainer,
  Pill,
  Button,
  SaveButton,
  RightCTA,
  LeftCTA,
};

// import styled from 'styled-components';

// const CampsiteHostInfoContainer = styled.div`
//   display: flex;
//   font-family: Calibre, Helvetica, Arial, sans-serif;
//   flex-direction: column;
//   margin-left: 10%;
//   margin-right: 30%;
//   border: solid 2px red;
//   color: #333333;
//   line-height: 1.42;
//   height: auto;
//   letter-spacing: 0.05em;
// `;

// const CampsiteDetailsContainer = styled.div`
//   border: solid 2px blue;
//   margin: 5px;
// `;

// const CampSiteTitle = styled.h1`
//   font-weight: 500;
//   font-size: 36px;
//   margin: 10px 0px;
// `;

// const CTAContainer = styled.div`
//   border: solid 2px green;
//   margin 5px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
// `;

// const RecommendText = styled.span`
//   margin: 5px;
//   font: 14px;
//   color: #333333;
// `;

// const GuestIcons = styled.div`
//   display: inline;
//   align-items: center;
//   margin: 5px;
//   border: solid 2px yellow;
//   height: 40px;
//   width: 130px;
//   margin-right: -20px;
// `;

// const GuestAvatar = styled.div`
//   height: 90%;
//   width: 90%;
// `;

// const OverviewContainer = styled.div`
//   margin: 5px;
//   border: 2px solid teal;
//   display: flex;
//   flex-direction: row;

// `;

// const HostContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   border: solid 2px purple;
//   padding: 0px 10px 0px 0px;
//   margin: 5px;
//   justify-content: space-around;
//   width: 30%;
//   height: auto;
// `;

// const HostName = styled.div`
//   border: solid 2px orange;
//   display: flex;
//   flex-direction: column;
//   margin: 5px;
//   font-size: 12px;
//   color: #333333;
//   height: 20%;
//   justify-content: center;
//   align-items: center;
// `;

// const DescriptionContainer = styled.div`

//   margin: 5px;
//   padding: 5px;
//   border: solid 2px pink;
//   width: 70%;
// `;

// const CovidGuidelines = styled.div`
//   background: #F3E4EF;
//   color: #972985;
//   margin: 5px;
//   padding: 15px;
//   font-size: 14px;
//   font-weight: 550;
//   border: solid 2px black;
//   border-radius: 4px;
//   line-height: 26px;
// `;

// const DescriptionText = styled.div`
//   padding: 15px;
//   margin: 5px;
//   border solid 2px gray;
// `;

// const LocationContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 14px;
//   line-height: 26px;
//   font-weight: 400;
// `;

// const Pill = styled.div`
//   width: 32px;
//   height: 15px;
//   font-size: 14px;
//   border solid 2px transparent;
//   border-radius: 500px;
//   box-shadow: 0 1px 2px rgba(0,0,0,0.08);
//   margin-right: -11px;
//   background-color: #fff;
//   padding: 2px;
//   display: flex;
//   justify-content: space-around;
//   align-self: center;
// `;

// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin: 3px;
//   height: 48px;
//   width: auto;
//   padding: 6px 12px;
//   border-radius: 2px;
//   transition: background-color 0.3s ease 0s, border-color 0.4s ease 0s, color 0.4s ease 0s;
// `;

// const SaveButton = styled(Button)`
//   color: #ED746D;
// `;

// const RightCTA = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   border: lightgray 2px solid;
//   margin 5px;
// `;

// const LeftCTA = styled.div`
//   display: flex;
//   align-items: center;
//   border: lightblue 2px solid;
//   margin 5px;
// `;

// export {
//   CampsiteHostInfoContainer,
//   CampsiteDetailsContainer,
//   CTAContainer,
//   RecommendText,
//   GuestIcons,
//   GuestAvatar,
//   OverviewContainer,
//   HostContainer,
//   HostName,
//   DescriptionContainer,
//   CovidGuidelines,
//   DescriptionText,
//   CampSiteTitle,
//   LocationContainer,
//   Pill,
//   Button,
//   SaveButton,
//   RightCTA,
//   LeftCTA,
// };
