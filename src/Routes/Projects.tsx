import styled from "styled-components";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useNavigate, useMatch } from "react-router-dom";
import { ProjectData } from "./ProjectData";

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

const Main = styled(motion.div)`
  width: 100%;
  padding: 50px 20px 20px 100px;
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  position: absolute;
  right: 0;
  width: 80%;
  gap: 20px;
  justify-content: flex-start;
  padding-left: 100px;
  grid-template-columns: repeat(5, 1fr);
`;

const ProjectItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  span {
    text-align: center;
  }
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
  z-index: 11;
`;

const ProjectCard = styled(motion.div)`
  position: fixed;
  width: 680px;
  height: 50vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 12;
`;

const VideoArea = styled.div`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
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

export const ParentsVariants = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "50%",
  },
};

export const ParentsTransition = {
  duration: 0.8,
  delayChildren: 2,
};

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
    <Wrapper className="wrapper">
      <SideContainer
        className="side-container"
        initial="out"
        animate="in"
        exit="out"
        variants={ParentsVariants}
        transition={ParentsTransition}
      >
        <Title className="side_title">projects_</Title>
        <SideNav></SideNav>
      </SideContainer>
      <Main className="main">
        <ProjectGrid
          className="main_project-grid"
          initial="out"
          animate="in"
          exit="out"
          variants={ParentsVariants}
          transition={ParentsTransition}
        >
          {ProjectData.projects.map((project) => (
            <ProjectItem
              className="pj"
              key={project.id}
              layoutId={project.id + ""}
              whileHover={{ scale: 1.2 }}
              onClick={() => onItemClicked(project.id)}
            >
              <ProjectIcon className="pj_icon" src={`${project.icon}`} alt="" />
              <span>{project.name}</span>
            </ProjectItem>
          ))}
        </ProjectGrid>
      </Main>
      <AnimatePresence>
        {projectMatch ? (
          <>
            <ProjectCard
              className="pj_card"
              layoutId={projectMatch.params.projectId}
              style={{ top: scrollY.get() + 100 }}
            >
              {clickedProject && (
                <>
                  <VideoArea
                    className="pj_card_video"
                    style={{
                      backgroundImage: `url(${clickedProject.thumb})`,
                    }}
                  />
                  <TextArea className="pj_card_text">
                    <span>{clickedProject.name}</span>
                    <a
                      href={clickedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {clickedProject.url}
                    </a>
                    <span>{clickedProject.summary}</span>
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
