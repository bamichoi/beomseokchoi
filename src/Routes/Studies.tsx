import styled from "styled-components";
import { motion } from "framer-motion";
import { StudyData } from "./StudyData";
import { ParentsVariants, ParentsTransition } from "./Projects";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 120px;
  height: 1000vh;
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
`;

const StudiesBox = styled(motion.div)`
  width: 80%;
  position: absolute;
  right: 0;
`;

const StudyItem = styled(motion.div)`
  background-color: #f3e6d5;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 50px;
  a {
    text-decoration: underline;
    width: fit-content;
  }
  a:first-child {
    text-decoration-color: #95c9b9;
  }
  h1 {
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 50px;
    color: #95c9b9;
  }
  h2 {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 20px;
    width: fit-content;
  }
  span,
  a {
    margin-bottom: 10px;
  }
  span:last-child {
    text-align: end;
    margin-right: 10px;
  }
`;

const StudyItemVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 1,
    },
  },
};

function Studies() {
  return (
    <Wrapper>
      <SideContainer
        initial="out"
        animate="in"
        exit="out"
        variants={ParentsVariants}
        transition={ParentsTransition}
      >
        <Title>studies_</Title>
        <SideNav></SideNav>
      </SideContainer>
      <Main>
        <StudiesBox>
          {[...StudyData.studies].reverse().map((study) => (
            <StudyItem
              key={study.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={StudyItemVariants}
            >
              <a href={study.projectUrl}>
                <h1>{study.title}</h1>
              </a>
              <h2>{study.summary}</h2>
              <a href={study.academyUrl}>
                <span>{study.academy}</span>
              </a>
              <span>period: {study.period}</span>
              <span>
                skills:
                {study.skills.map((skill, index) =>
                  study.skills.length - 1 === index ? `${skill}` : `${skill}, `
                )}
              </span>
              <span>{study.date}</span>
            </StudyItem>
          ))}
        </StudiesBox>
      </Main>
    </Wrapper>
  );
}

export default Studies;
