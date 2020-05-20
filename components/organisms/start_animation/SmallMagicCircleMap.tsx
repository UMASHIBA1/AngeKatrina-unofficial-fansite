import React from "react";
import styled from "styled-components";
import SmallMagicCircle from "../../molecules/start_animation/SmallMagicCircle";
import { useTypedSelector } from "../../../redux/store";

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const SMVerMap: React.FC = () => {
  return (
    <React.Fragment>
      <SmallMagicCircle top={-250} left={60} diameter={80} circleNum={3} />
      <SmallMagicCircle top={-300} left={-70} diameter={50} circleNum={3} />
      <SmallMagicCircle top={-200} left={-80} diameter={30} circleNum={2} />
      <SmallMagicCircle top={300} left={160} diameter={100} circleNum={3} />
      <SmallMagicCircle top={200} left={70} diameter={40} circleNum={2} />
      <SmallMagicCircle top={200} left={-100} diameter={70} circleNum={3} />
      <SmallMagicCircle top={350} left={-70} diameter={40} circleNum={3} />
    </React.Fragment>
  );
};

const TabletVerMap: React.FC = () => {
  return (
    <React.Fragment>
      <SmallMagicCircle top={-300} left={-200} diameter={80} circleNum={3} />
      <SmallMagicCircle top={-370} left={200} diameter={100} circleNum={2} />
      <SmallMagicCircle top={-160} left={370} diameter={70} circleNum={3} />
      <SmallMagicCircle top={-380} left={-390} diameter={120} circleNum={3} />
      <SmallMagicCircle top={-100} left={-300} diameter={60} circleNum={3} />
      <SmallMagicCircle top={130} left={320} diameter={60} circleNum={3} />
      <SmallMagicCircle top={360} left={300} diameter={140} circleNum={3} />
      <SmallMagicCircle top={280} left={-200} diameter={100} circleNum={3} />
      <SmallMagicCircle top={380} left={-30} diameter={60} circleNum={3} />
    </React.Fragment>
  );
};

const PCVerMap: React.FC = () => {
  return (
    <React.Fragment>
      <SmallMagicCircle top={-400} left={-230} diameter={100} circleNum={3} />
      <SmallMagicCircle top={-300} left={-500} diameter={150} circleNum={3} />
      <SmallMagicCircle top={-430} left={-700} diameter={80} circleNum={3} />
      <SmallMagicCircle top={-100} left={-600} diameter={60} circleNum={3} />
      <SmallMagicCircle top={40} left={-500} diameter={80} circleNum={3} />
      <SmallMagicCircle top={460} left={-700} diameter={80} circleNum={3} />
      <SmallMagicCircle top={200} left={-600} diameter={130} circleNum={3} />
      <SmallMagicCircle top={400} left={-400} diameter={100} circleNum={3} />
      <SmallMagicCircle top={470} left={-100} diameter={100} circleNum={3} />
      <SmallMagicCircle top={-450} left={200} diameter={120} circleNum={3} />
      <SmallMagicCircle top={-400} left={400} diameter={50} circleNum={3} />
      <SmallMagicCircle top={-420} left={700} diameter={160} circleNum={3} />
      <SmallMagicCircle top={-200} left={500} diameter={120} circleNum={3} />
      <SmallMagicCircle top={100} left={670} diameter={120} circleNum={3} />
      <SmallMagicCircle top={-100} left={600} diameter={70} circleNum={3} />
      <SmallMagicCircle top={0} left={460} diameter={100} circleNum={3} />
      <SmallMagicCircle top={300} left={500} diameter={200} circleNum={3} />
      <SmallMagicCircle top={400} left={650} diameter={60} circleNum={3} />
    </React.Fragment>
  );
};

const SmallMagicCircleMap: React.FC = () => {
  const size = useTypedSelector((state) => state.sizes);

  return (
    <Wrapper>
      {size === "sm" ? <SMVerMap /> : null}
      {size === "tablet" ? <TabletVerMap /> : null}
      {size === "pc" ? <PCVerMap /> : null}
    </Wrapper>
  );
};

export default SmallMagicCircleMap;
