import styled from 'styled-components';

const CampsiteHostInfoContainer = styled.div`
  display: flex;
  font-family: Calibre, Helvetica, Arial, sans-serif;
  flex-direction: column;
  margin-left: 35%;
  margin-right: 0.5em;

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
  display: flex;
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
  margin-right: -10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
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
  margin-right: -5px;
  background-color: #fff;
  padding: 2px;
  display: flex;
  justify-content: space-around;
  align-self: center;
  cursor: pointer;
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
  transition: border 0.4s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid #BEBEBE;
  }
`;

const ShareButton = styled(Button)`
  width: 100%;
  margin: 5px;
  justify-content: center;
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

const NoRecommendations = styled.div`
  width: 40%;
  font-size: 12px;
  font-weight: 300;
`;

const PopperContainer = styled.div`
  height: 400px;
  width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: white;
  padding: 30px 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  z-index: 999;

  #arrow {
    position absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: " ";
      background-color: white;
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: -35px;
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom -40px;
    :after {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;

const ShareHeader = styled.div`
  font-size: 20px;
  font-weight: 650;
  margin: 0 10px 0 10px;
  width: 100%;
  align-self: flex-start;
  text-align: left;
  margin: 5px;
`;

const SocialContainer = styled.div`
  font-size: 14px;
  font-weight: 300;
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin 15px 10px;
  cursor: pointer;
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
  NoRecommendations,
  PopperContainer,
  ShareHeader,
  SocialContainer,
  ShareButton,
};
