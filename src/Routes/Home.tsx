import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Controller = styled.div`
  display: flex;
  flex-direction: column;
  i {
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

const Stylus = styled(motion.div)`
  width: fit-content;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
  transform-origin: bottom;
  .stylus_header {
    width: 20px;
    height: 100px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background: rgb(152, 203, 187);
    background: linear-gradient(
      90deg,
      rgba(152, 203, 187, 1) 0%,
      rgba(96, 134, 122, 1) 100%
    );
    box-shadow: 10px 0px 10px 5px rgba(0, 0, 0, 0.3);
  }
  .stylus_arm {
    width: 10px;
    height: 400px;
    background: rgb(152, 203, 187);
    background: linear-gradient(
      90deg,
      rgba(152, 203, 187, 1) 0%,
      rgba(96, 134, 122, 1) 100%
    );
    box-shadow: 10px 10px 10px 2.5px rgba(0, 0, 0, 0.3);
  }
`;

const CircleOverlay = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 300px;
  background: rgb(1, 1, 1);
  background: linear-gradient(
    90deg,
    rgba(1, 1, 1, 1) 22%,
    rgba(255, 255, 255, 1) 48%,
    rgba(0, 0, 0, 1) 78%
  );
  opacity: 1;
`;

const Circle = styled(motion.div)`
  position: absolute;
  right: 0;
  margin-bottom: 80px;
  margin-right: 80px;
  width: 600px;
  height: 600px;
  border-radius: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle2 = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 175px;
  background-color: #c29166;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle3 = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleVariant = {
  start: {
    rotate: 360,
    transition: {
      delay: 0.5,
      repeat: Infinity,
      repeatDelay: 0,
      duration: 3,
      ease: "linear",
    },
  },
};

const StylusVariant = {
  play: {
    rotateZ: 9,
    transition: {
      repeatDelay: 0,
      duration: 3,
      ease: "linear",
    },
  },
};
function Home() {
  const [onPlay, setOnPlay] = useState();

  return (
    <Wrapper>
      <Main>
        <Controller>
          <i className="fas fa-backward"></i>
          <i className="fas fa-play"></i>
          <i className="fas fa-pause"></i>
          <i className="fas fa-stop"></i>
          <i className="fas fa-forward"></i>
        </Controller>
        <Stylus variants={StylusVariant} animate="play">
          <div className="stylus_header"></div>
          <div className="stylus_arm"></div>
        </Stylus>
        {/* Make indipendent this Vinyl Component */}
        <Circle variants={CircleVariant} animate="start">
          <CircleOverlay> </CircleOverlay>
          <Circle2>
            <Circle3>
              <span className="circleText">What's new?</span>
            </Circle3>
          </Circle2>
        </Circle>
      </Main>
    </Wrapper>
  );
}

export default Home;
