import styled from "styled-components";
import { StudyData } from "./StudyData";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 120px;
  height: 1000vh;
  display: flex;
`;

const SideContainer = styled.div`
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

const StudyItem = styled.div`
  width: 80%;
  background-color: #f3e6d5;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: absolute;
  right: 0;
  h1 {
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 50px;
  }
  h2 {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 20px;
  }
  span {
    margin-bottom: 10px;
  }
  span:last-child {
    text-align: end;
    margin-right: 10px;
  }
`;

function Studies() {
  return (
    <Wrapper>
      <SideContainer>
        <Title>studies_</Title>
        <SideNav></SideNav>
      </SideContainer>
      <Main>
        {StudyData.studies.map((study) => (
          <StudyItem key={study.id}>
            <h1>{study.title}</h1>
            <h2>{study.summary}</h2>
            <span>{study.academy}</span>
            <span>period: {study.period}</span>
            <span>
              skills:
              {study.skills.map((skill, index) =>
                study.skills.length - 1 === index ? `${skill}` : `${skill}, `
              )}
            </span>
            <span>final project: {study.projectUrl}</span>
            <span>{study.date}</span>
          </StudyItem>
        ))}
      </Main>
    </Wrapper>
  );
}

export default Studies;
