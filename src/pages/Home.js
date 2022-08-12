import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hola, soy Nicolás</h2>
        <div className="prompt">
          <p>Programador frontend apasionado por el aprendizaje y la mejora continua.</p>
          <LinkedInIcon cursor="pointer" onClick={() => window.open('https://www.linkedin.com/in/nicolascaruso/')}/>
          <EmailIcon cursor="pointer" onClick={() => window.open("mailto:nico.caruso1992@outlook.com")}/>
          <GithubIcon cursor="pointer" onClick={() => window.open('https://github.com/Valkyries12')}/>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              Javascript, ReactJS,  Redux, HTML, CSS, NPM,
              BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              SQL
            </span>
          </li>
          <li className="item">
            <h2>Lenguajes</h2>
            <span>JavaScript, C, HTML, CSS</span>
          </li>
          <li className="item">
            <h2>Idioma</h2>
            <span>Inglés (intermedio), Ruso (básico)</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
