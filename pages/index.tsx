import styled from "styled-components";
import MagicCircle from "../components/organisms/start_animation/MagicCircle";

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const IndexPage = () => (
  <Main>
    <MagicCircle />
  </Main>
);

export default IndexPage;
