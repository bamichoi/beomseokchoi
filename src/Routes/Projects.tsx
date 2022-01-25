import { url } from "inspector";
import styled from "styled-components";
import { ProjectData } from "./ProjectData";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const SideContainer = styled.div``;

const Title = styled.div`
  font-size: 60px;
  font-weight: 100;
`;

const SideNav = styled.div``;

const Main = styled.div``;

const ProjectGrid = styled.div`
  display: grid;
`;

const ProjectCard = styled.div``;

function Projects() {
  return (
    <Wrapper>
      <SideContainer>
        <Title>projects_</Title>
        <SideNav></SideNav>
      </SideContainer>
      <Main>
        <ProjectGrid>
          {ProjectData.projects.map((project) => (
            <ProjectCard>
              <img src={`${project.icon}`} alt="" style={{ width: 50 }} />
              <span>{project.name}</span>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Main>
    </Wrapper>
  );
}

export default Projects;
