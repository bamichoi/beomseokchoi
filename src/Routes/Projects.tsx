import styled from "styled-components";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useNavigate, useMatch } from "react-router-dom";
import { ProjectData } from "./ProjectData";

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
  padding: 50px 20px 20px 100px;
`;

const ProjectGrid = styled.div`
  display: grid;
  position: absolute;
  right: 0;
  width: 80%;
  display: flex;
  justify-content: flex-start;
  padding-left: 100px;
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
  width: 680px;
  height: 50vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 5;
`;

const VideoArea = styled.div`
  width: 100%;
  height: 100%;
`;

const TextArea = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 20px;
  color: white;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  a {
    margin-bottom: 5px;
    text-decoration: underline;
  }
  span {
    margin-bottom: 5px;
  }
  span:first-child {
    font-size: 40px;
    margin-bottom: 10px;
  }
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
  const clickedProject =
    projectMatch?.params.projectId &&
    ProjectData.projects.find(
      (project) => project.id + "" === projectMatch.params.projectId
    );
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
              style={{ top: scrollY.get() + 180 }}
            >
              {clickedProject && (
                <>
                  <VideoArea
                    style={{
                      backgroundImage: `url(${clickedProject.thumb})`,
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  />
                  <TextArea>
                    <span>CINEACCA</span>
                    <a
                      href="https://cineacca.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      cineacca.com
                    </a>
                    <span>Student film streaming plattform</span>
                    <span>
                      {clickedProject.lang.map((item, index) =>
                        clickedProject.lang.length - 1 === index
                          ? `${item}`
                          : `${item}, `
                      )}
                    </span>
                  </TextArea>
                </>
              )}
            </ProjectCard>
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
