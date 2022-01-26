import { url } from "inspector";
import styled from "styled-components";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useNavigate, useMatch } from "react-router-dom";
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

const Main = styled.div`
  padding: 50px 20px 20px 100px;
`;

const ProjectGrid = styled.div`
  display: grid;
`;

const ProjectItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ProjectIcon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const ProjectCard = styled(motion.div)`
  position: fixed;
  width: 300px;
  height: 200px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  z-index: 5;
`;

function Projects() {
  const navigate = useNavigate();
  const projectMatch = useMatch("/projects/:projectId");
  const { scrollY } = useViewportScroll();
  const onItemClicked = (projectId: number) => {
    navigate(`${projectId}`);
  };
  const onOverlayClicked = () => {
    navigate("/projects");
  };

  return (
    <Wrapper>
      <SideContainer>
        <Title>projects_</Title>
        <SideNav></SideNav>
      </SideContainer>
      <Main>
        <ProjectGrid>
          {ProjectData.projects.map((project) => (
            <ProjectItem
              key={project.id}
              layoutId={project.id + ""}
              whileHover={{ scale: 1.2 }}
              onClick={() => onItemClicked(project.id)}
            >
              <ProjectIcon src={`${project.icon}`} alt="" />
              <span>{project.name}</span>
            </ProjectItem>
          ))}
        </ProjectGrid>
      </Main>
      <AnimatePresence>
        {projectMatch ? (
          <>
            <ProjectCard
              layoutId={projectMatch.params.projectId}
              style={{ top: scrollY.get() + 200 }}
            ></ProjectCard>
            <Overlay
              onClick={onOverlayClicked}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></Overlay>
          </>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Projects;
