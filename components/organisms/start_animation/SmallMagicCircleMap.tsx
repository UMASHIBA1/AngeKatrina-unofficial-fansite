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
  return <React.Fragment />;
};

const PCVerMap: React.FC = () => {
  return <React.Fragment />;
};

const SmallMagicCircleMap: React.FC = () => {
  const size = useTypedSelector((state) => state.sizes);

  // <SmallMagicCircle top={-250} left={-500} diameter={200} circleNum={3} />
  // <SmallMagicCircle top={300} left={-560} diameter={100} circleNum={2} />

  return (
    <Wrapper>
      {size === "sm" ? <SMVerMap /> : null}
      {size === "tablet" ? <TabletVerMap /> : null}
      {size === "pc" ? <PCVerMap /> : null}
    </Wrapper>
  );
};

export default SmallMagicCircleMap;
