import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { ParentsVariants, ParentsTransition } from "./Projects";
import TypeIt from "typeit-react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 150px;
  display: flex;
  overflow-y: hidden;
`;

const Greeting = styled(motion.div)`
  width: 50%;
  padding: 10px;

  h1 {
    font-size: 60px;
    line-height: 80px;
  }
`;

const TurnTable = styled(motion.div)`
  width: 50%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
`;

const Controller = styled.div`
  width: fit-content;
  display: flex;
  position: absolute;
  left: 0;
  margin-top: 230px;
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
  left: 0;
  margin: auto 0;
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

const Circle = styled(motion.div)`
  position: absolute;
  width: 600px;
  height: 600px;
  margin-right: 10px;
  border-radius: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 300px;
  height: 300px;
  border-radius: 150px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleVariant = {
  play: {
    rotate: 360,
    transition: {
      delay: 1,
      repeat: Infinity,
      repeatDelay: 0,
      duration: 1.5,
      ease: "linear",
    },
  },
  pause: {
    rotate: 0,
    transition: {
      duration: 3,
    },
  },
  stop: {
    rotate: 0,
    transition: {
      duration: 3,
    },
  },
};

const StylusVariants = {
  start: {
    rotateZ: 9,
    scale: [1, 1, 1, 1, 0.97],
    transition: {
      duration: 3,
      ease: "linear",
    },
  },
  play: {
    rotateZ: 21,
    transition: {
      duration: 60,
      ease: "linear",
    },
  },
  stop: {
    rotateZ: 0,
    scale: [0.97, 1, 1, 1, 1],
    transition: {
      duration: 3,
    },
  },
};
function Home() {
  const [onPlay, setOnPlay] = useState("onReady");
  const [trackNumber, setTrackNumber] = useState(0);
  const stylusControls = useAnimation();
  useEffect(() => {
    stylusControls.start("start");
    setTimeout(() => {
      setTrackNumber(1);
      stylusControls.stop();
      stylusControls.start("play");
    }, 3000);
  }, [stylusControls]);
  const clickPlay = () => {
    stylusControls.start("play");
    setOnPlay("onPlay");
  };
  const clickPause = () => {
    stylusControls.stop();
    setOnPlay("onPause");
  };
  const clickStop = () => {
    stylusControls.start("stop");
    setOnPlay("onStop");
  };
  const clickPrev = () => {
    if (trackNumber > 1) {
      stylusControls.start({
        rotateZ: trackNumber * 4 + 1,
        scale: [0.97, 1, 1, 1, 0.97],
        transition: {
          duration: 1.5,
        },
      });
      setTrackNumber((prev) => prev - 1);
      setTimeout(() => {
        console.log("Playing after Next ");
        clickPlay();
      }, 1500);
    }
  };
  const clickNext = () => {
    if (trackNumber < 3) {
      stylusControls.start({
        rotateZ: trackNumber * 4 + 9,
        scale: [0.97, 1, 1, 1, 0.97],
        transition: {
          duration: 1.5,
        },
      });
      setTrackNumber((prev) => prev + 1);
      setTimeout(() => {
        console.log("Playing after Next ");
        clickPlay();
      }, 1500);
    }
  };
  return (
    <Wrapper className="wrapper">
      <Main className="home-main">
        <Greeting
          className="home_greeting"
          initial="out"
          animate="in"
          exit="out"
          variants={ParentsVariants}
          transition={ParentsTransition}
        >
          <h1>
            <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .type("", { delay: 1000 })
                  .type("Hi, This is Bami.")
                  .break()
                  .type("And You're Watching My Portfolio Website.")
                  .break();
                // Remember to return it!
                return instance;
              }}
            />
          </h1>
          <span></span>
        </Greeting>
        <TurnTable
          className="home_turntable"
          initial="out"
          animate="in"
          exit="out"
          variants={ParentsVariants}
          transition={ParentsTransition}
        >
          <Controller className="turntable_controller">
            <i className="fas fa-backward" onClick={clickPrev}></i>
            <i className="fas fa-play" onClick={clickPlay}></i>
            <i className="fas fa-pause" onClick={clickPause}></i>
            <i className="fas fa-stop" onClick={clickStop}></i>
            <i className="fas fa-forward" onClick={clickNext}></i>
          </Controller>
          <Stylus
            className="turntable_stylus"
            variants={StylusVariants}
            animate={stylusControls}
          >
            <div className="stylus_header"></div>
            <div className="stylus_arm"></div>
          </Stylus>
          <Circle
            className="turntable_circle"
            variants={CircleVariant}
            animate={
              onPlay === "onPlay" || onPlay === "onReady"
                ? "play"
                : onPlay === "onPause"
                ? "pause"
                : onPlay === "onStop"
                ? "stop"
                : ""
            }
          >
            <CircleOverlay className="circle-overlay"></CircleOverlay>
            <Circle2 className="circle2">
              <Circle3 className="circle3">
                <span className="circleText">What's new?</span>
              </Circle3>
            </Circle2>
          </Circle>
        </TurnTable>
      </Main>
    </Wrapper>
  );
}

export default Home;
