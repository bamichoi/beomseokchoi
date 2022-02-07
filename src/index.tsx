import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme } from "theme";
import App from "./App";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  font-family: "Montserrat", sans-serif;
  background-color:#f4dfba;

}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}

a {
  text-decoration:none;
  color:inherit;
}

@media screen and (max-width: 600px) {
  .nav{
    padding-bottom: 20px;
  }
  .nav_logo {
    padding-left: 2.5px;
  div:first-child {
    font-size: 90%;
    width: fit-content;
  }
  div:last-child {
    font-size: 70%;
    text-align: center;
  }
  }

  .nav_social {
    border-bottom: 3px solid #eec373;
    font-size: 80%;
  i {
    margin-left: 5px;
  }
  i:hover {
    color: #f4deba;
  }
  a:first-child i {
    margin-left: 0px;
  }
  }

  .nav_copy{
    font-size: 80%;
  }

  .menu_item {
  font-size: 80%;
  text-decoration: underline;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  position: relative;
  }

  .wrapper {
    flex-direction:column;
  }
  
  .side-container {
   width: 100%;
   padding-bottom: 40px;
   z-index: 10;
   background-color: #F4DFBA;
 }

  .side_title {
    font-size: 280%;
  }

  .main {
    width: 100%;
    padding-top: 25%;
    padding-left: 0;
    padding-right: 0;
  }

  

  // Projects
  .main_project-grid {
  display: grid;
  width: 100%;
  padding: 0 7%;
  grid-template-columns: repeat(3, 1fr);
  }
  .pj{
    .pj_icon {
    width: 70px;
    height: 70px;
    border-radius: 14px;
  }
  span {
    font-size: 70%;
  }
  }
 .pj_card{
  position: fixed;
  width: 80%;
  height: 40vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-top: 20%;
  z-index: 12;
  .pj_card_video {
    width: 100%;
    height: 19vh;
    background-size: cover;
  }
  .pj_card_text {
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 100%;
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
    font-size: 140%;
    margin-bottom: 10px;
  }
  }

 }

 // Studies
 
 .main_studies {
  width: 80%;
  position: absolute;
  right: 0;
 }
 .studies_item {
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
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 200%;
    color: #95c9b9;
  }
  h2 {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 100%;
    width: fit-content;
  }
  span,
  a {
    margin-bottom: 5px;
    font-size: 80%;
  }
  span:last-child {
    text-align: end;
    margin-right: 10px;
    font-size: 80%;
  }
 }

 // About
 .main_profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .profile_img {
  width: 50vw;
  height: 50vw;
  border-radius: 0px;
  margin-bottom: 20px;
  }
  
  .profile_bio {
    margin: 0 10px;
  h1 {
    font-size: 230%;
    margin-bottom: 20px;
    text-align: center;
  }
  p {
    margin-bottom: 1px;
  }
  p:last-child {
    margin-top: 15px;
    font-weight: 500;
  }
  }
}

.skillset {
  margin: 35px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 25px;
    text-decoration: underline;
  }
  .skillset_skills{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  }

  // Contact
  .main_contact {
  position: static;
  padding: 0 20px;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .contact_form {
  padding-right: 0px;
  border-right: none;

  input {
    width: 74vw;
  }
  textarea {
    width: 74vw;
  }
  button {
    width: 30vw;
    margin-bottom: 20px;
    }
  }
  .contact_info {
  margin-left: 0px;
  align-items: flex-start;
    }
  }

  // Home
  .home-main {
  width: 100%;
  height: 100%;
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  }

  .home_greeting{
  width: 100%;
  height: 40vh;
  padding: 0 10px;
  h1 {
    font-size: 190%;
    line-height: 100%;;
  }

  }
  .home_turntable {
  width: 100%; 
  height: 100%;
  justify-content: flex-end; 
  align-items: center; 

  .turntable_controller {
  left: 10px; 
  margin-top: 0px;
  }
  }

  .turntable_stylus {
  left: 10px;
  height: 50vh;
  .stylus_header {
    width: 20px;
    height: 15vh;
  }
  .stylus_arm {
    width: 10px;
    height: 50vh;
  }
  }

  .turntable_circle {
  position: absolute;
  right: -20vh; 
  bottom: 20px;
  width: 130vw; 
  height: 130vw; 
  border-radius: 65vw; 
    .circle-overlay{
      width: 130vw; 
      height: 130vw; 
      border-radius: 65vw; 
    }
    .circle2{
      position: absolute;
      width: 65vw; 
      height: 65vw;
      border-radius: 37.5vw;
      .circle3{
        width: 55vw; 
        height: 55vw; 
        border-radius: 27.5vw;
      }
    }
  }
}

// Circle resize for e.g. iPhone SE 
// But you can use framer-motion responsive animation!!
@media screen and (max-width: 375px) and (min-height: 667px){

  .turntable_stylus {
  left: 10px;
  height: 48vh;
  .stylus_header {
    width: 20px;
    height: 15vh;
  }
  .stylus_arm {
    width: 10px;
    height: 48vh;
  }
  }

  .turntable_circle {
  position: absolute;
  right: -19vw; 
  bottom: 20px;
  width: 105vw; 
  height: 105vw; 
  border-radius: 52.5vw; 
    .circle-overlay{
      width: 105vw; 
      height: 105vw; 
      border-radius: 52.5vw; 
    }
    .circle2{
      position: absolute;
      width: 60vw; 
      height: 60vw;
      border-radius: 30vw;
      .circle3{
        width: 50vw; 
        height: 50vw; 
        border-radius: 25vw;
      }
    }
  }
}
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
