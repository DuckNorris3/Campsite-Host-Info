import styled from 'styled-components';

const CampsiteHostInfoContainer = styled.div`
  display: flex;
  font-family: Calibre, Helvetica, Arial, sans-serif;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 30%;
  border: solid 2px red;
  color: #333333;
  line-height: 1.42;
`;

const CampsiteDetailsContainer = styled.div`
  border: solid 2px blue;
  margin: 5px;
`;

const CampSiteTitle = styled.h1`
  font-weight: 500;
  font-size: 42px;
  margin: 10px 0px;
`;

const CTAContainer = styled.div`
  border: solid 2px green;
  margin 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RecommendText = styled.span`
  margin: 5px;
  font: 18px;
  color: #333333;
`;

const GuestIcons = styled.div`
  display: inline;
  align-items: center;
  margin: 5px;
  border: solid 2px yellow;
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
  border: 2px solid teal;
  display: flex;
  flex-direction: row;

`;

const HostContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 2px purple;
  padding: 0px 10px 0px 0px;
  margin: 5px;
  justify-content: space-around;
  width: 50%;
`;

const HostName = styled.div`
  border: solid 2px orange;
  display: flex;
  flex-direction: column;
  margin: 5px;
  font: 18px;
  color: #333333;
`;

const DescriptionContainer = styled.div`
  width: 40%
  margin: 5px;
  padding: 5px;
  border: solid 2px pink;
`;

const CovidGuidelines = styled.div`
  background: #F3E4EF;
  color: #972985;
  margin: 5px;
  padding: 15px;
  font: 18px;
  border: solid 2px black;
  border-radius: 4px;
`;

const DescriptionText = styled.div`
  padding: 15px;
  margin: 5px;
  border solid 2px gray;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
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
  justify-content: space-between;
  margin: 3px;
  height: 48px;
  width: auto;
  padding: 6px 12px;
  border-radius: 2px;
  transition: background-color 0.3s ease 0s, border-color 0.4s ease 0s, color 0.4s ease 0s;
`;

const SaveButton = styled(Button)`
  color: #ED746D;
`;

const RightCTA = styled.div`
  display: flex;
  justify-content: flex-end;
  border: lightgray 2px solid;
  margin 5px;
`;

const LeftCTA = styled.div`
  display: flex;
  justify-content: flex-start;
  border: lightblue 2px solid;
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
