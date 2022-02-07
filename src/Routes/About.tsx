import styled from "styled-components";
import { motion } from "framer-motion";
import { ParentsVariants, ParentsTransition } from "./Projects";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 120px;
  display: flex;
`;

const SideContainer = styled(motion.div)`
  position: fixed;
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: 100;
`;

const SideNav = styled.div``;

const Main = styled.div`
  width: 100%;
  padding: 50px 20px 20px 100px;
  width: 100%;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Profile = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 110px;
  background-position: center center;
  background-size: cover;
  border: 10px solid #eec373;
`;

const Bio = styled.div`
  margin-left: 70px;
  h1 {
    font-size: 50px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 1px;
  }
  p:last-child {
    margin-top: 15px;
    font-weight: 500;
  }
`;

const Skillset = styled(motion.div)`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 25px;
    text-decoration: underline;
  }
`;

const Skills = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  div {
    width: 60px;
    height: 60px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0 15px;
  }
  div:first-child,
  div:last-child {
    width: 80px;
    height: 80px;
  }
`;

function About() {
  return (
    <Wrapper className="wrapper">
      <SideContainer
        className="side-container"
        initial="out"
        animate="in"
        exit="out"
        variants={ParentsVariants}
        transition={ParentsTransition}
      >
        <Title className="side_title">about_</Title>
        <SideNav></SideNav>
      </SideContainer>
      <Main className="main contact-main">
        <Profile
          className="main_profile"
          initial="out"
          animate="in"
          exit="out"
          variants={ParentsVariants}
          transition={ParentsTransition}
        >
          <ProfileImg
            className="profile_img"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/img/catpaw.jpeg)`,
            }}
          ></ProfileImg>
          <Bio className="profile_bio">
            <h1>Hello, I am Beomsoeok!</h1>
            <p>Thank you for your visit to my portfolio website!</p>
            <p>I have been studied development for 1 year.</p>
            <p>So I still have a lot of things to learn,</p>
            <p>but I really like making real what I imagine in my head</p>
            <p>and making people happy with the stuff I have built.</p>
            <p>It is so amazing, isn't it?</p>
            <p>I just keep learning!</p>
          </Bio>
        </Profile>
        <Skillset
          className="skillset"
          initial="out"
          animate="in"
          exit="out"
          variants={ParentsVariants}
          transition={ParentsTransition}
        >
          <h1>skillset</h1>
          <Skills className="skillset_skills">
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/skills/javascript.png)`,
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/skills/html.png)`,
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/skills/css.png)`,
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/skills/python.png)`,
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/skills/react.png)`,
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/skills/django.png)`,
              }}
            ></div>
          </Skills>
          <span>"Learn the rules like a pro,</span>
          <span>so you can break them like an artist."</span>
        </Skillset>
      </Main>
    </Wrapper>
  );
}

export default About;
