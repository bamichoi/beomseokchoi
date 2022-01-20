import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  padding: 10px 10px;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f4dfba;
`;

const Menu = styled.ul`
  padding-right: 2.5px;
`;

const Logo = styled.div`
  padding-left: 2.5px;
  div:first-child {
    font-size: 20px;
  }
  div:last-child {
    font-size: 13px;
  }
`;

const Social = styled.div`
  i {
    margin-left: 5px;
  }
`;
const Copy = styled.div`
  font-size: 12px;
`;

const Item = styled.li`
  text-decoration: underline;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  position: relative;
`;

const Pointer = styled(motion.div)`
  width: 7px;
  height: 7px;
  margin-right: 5px;

  background-color: #ca965c;
  position: absolute;
  left: -10px;
`;

function Header() {
  const projectsMatch = useMatch("/projects");
  const studiesMatch = useMatch("/studies");
  const aboutMatch = useMatch("/about");
  const contactMatch = useMatch("/contact");

  return (
    <Nav>
      <Link to="/">
        <Logo>
          <div>Beomseok Choi</div>
          <div>/ software developer</div>
        </Logo>
      </Link>
      <Social>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram-square"></i>
        <i className="fab fa-github"></i>
      </Social>
      <Copy>&copy; 2022</Copy>
      <Menu>
        <Link to="/projects">
          <Item>
            {projectsMatch ? <Pointer layoutId="pointer" /> : null}
            projects
          </Item>
        </Link>
        <Link to="/studies">
          <Item>
            {studiesMatch ? <Pointer layoutId="pointer" /> : null}
            studies
          </Item>
        </Link>
        <Link to="/about">
          <Item>
            {aboutMatch ? <Pointer layoutId="pointer" /> : null}
            about
          </Item>
        </Link>
        <Link to="/contact">
          <Item>
            {contactMatch ? <Pointer layoutId="pointer" /> : null}
            contact
          </Item>
        </Link>
      </Menu>
    </Nav>
  );
}

export default Header;