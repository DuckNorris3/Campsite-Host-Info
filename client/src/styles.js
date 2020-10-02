import styled from 'styled-components';

const CampsiteHostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 30%;
  border: solid 2px red
`;

const CampsiteDetailsContainer = styled.div`
  border: solid 2px blue;
  margin: 5px;
`;

const RecommendedContainer = styled.div`
  border: solid 2px green;
  margin 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RecommendText = styled.span`
  margin: 5px;
  font: 18px Calibre;
  color: #333333;
`;

const GuestIcons = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  border: solid 2px yellow;
  height: 40px;
  width: 40px;
  width: 50%
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
  font: 18px Calibre;
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
  font: 18px Calibre;
  border: solid 2px black;
  border-radius: 4px;
`;

const DescriptionText = styled.div`
  padding: 15px;
  margin: 5px;
  border solid 2px gray;
`;

export {
  CampsiteHostInfoContainer,
  CampsiteDetailsContainer,
  RecommendedContainer,
  RecommendText,
  GuestIcons,
  GuestAvatar,
  OverviewContainer,
  HostContainer,
  HostName,
  DescriptionContainer,
  CovidGuidelines,
  DescriptionText,
};
