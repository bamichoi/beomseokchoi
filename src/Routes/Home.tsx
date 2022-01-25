import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 0;
  font-size: 100px;
`;
function Home() {
  return <Wrapper></Wrapper>;
}

export default Home;
