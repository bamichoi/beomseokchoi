import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  padding: 10px 10px;
  padding-left: 5px;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f4dfba;
  border-left: 20px solid #876445;
  position: fixed;
  z-index: 10;
`;

const Menu = styled.ul`
  padding-right: 5px;
`;

const Logo = styled.div`
  padding-left: 2.5px;
  div:first-child {
    font-size: 20px;
    background-color: white;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 2px;
  }
  div:last-child {
    font-size: 13px;
    text-align: center;
  }
`;

const Social = styled.div`
  border-bottom: 3px solid #eec373;
  i {
    margin-left: 5px;
  }
  i:hover {
    color: #f4deba;
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
  left: -14px;
`;

function Header() {
  const projectsMatch = useMatch("/projects");
  const studiesMatch = useMatch("/studies");
  const aboutMatch = useMatch("/about");
  const contactMatch = useMatch("/contact");

  return (
    <Nav className="nav">
      <Link to="/">
        <Logo className="nav_logo">
          <div>Beomseok Choi</div>
          <div>/ software developer</div>
        </Logo>
      </Link>
      <Social className="nav_social">
        <a
          href="https://www.linkedin.com/in/beomseok-choi-02b9a0228/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100059771932658"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square"></i>
        </a>
        <a
          href="https://www.instagram.com/this_is_bami/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram-square"></i>
        </a>
        <a
          href="https://github.com/bamichoi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </Social>
      <Copy className="nav_copy">&copy; 2022</Copy>
      <Menu>
        <Link to="/projects">
          <Item className="menu_item">
            {projectsMatch ? <Pointer layoutId="pointer" /> : null}
            projects
          </Item>
        </Link>
        <Link to="/studies">
          <Item className="menu_item">
            {studiesMatch ? <Pointer layoutId="pointer" /> : null}
            studies
          </Item>
        </Link>
        <Link to="/about">
          <Item className="menu_item">
            {aboutMatch ? <Pointer layoutId="pointer" /> : null}
            about
          </Item>
        </Link>
        <Link to="/contact">
          <Item className="menu_item">
            {contactMatch ? <Pointer layoutId="pointer" /> : null}
            contact
          </Item>
        </Link>
      </Menu>
    </Nav>
  );
}

export default Header;
