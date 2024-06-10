import bootstrap_photo from "../icons/icon-bootstrap.png";
import css_photo from "../icons/icon-css-3.png";
import express_photo from "../icons/icon-express-js.png";
import git_photo from "../icons/icon-git.png";
import github_photo from "../icons/icon-github.png";
import html_photo from "../icons/icon-html-5.png";
import java_photo from "../icons/icon-java.png";
import js_photo from "../icons/icon-js.png";
import mongo_photo from "../icons/icon-mongodb.png";
import mysql_photo from "../icons/icon-mysql.png";
import node_photo from "../icons/icon-node-js.png";
import npm_photo from "../icons/icon-npm.png";
import python_photo from "../icons/icon-python.png";
import react_photo from "../icons/icon-react.png";
import redux_photo from "../icons/icon-redux.png";
import vite_photo from "../icons/icon-vite.png";

function AsideContentSkills() {
  return (
    <>
      <div>
        <h3
          className="text-gradient"
          style={{
            textAlign: "center",
          }}
        >
          CONOCIMIENTOS
        </h3>
        <ul className="skills-list">
          <li className="skills-item">
            HTML <img src={html_photo} alt="icono" />
          </li>
          <li className="skills-item">
            CSS <img src={css_photo} alt="icono" />
          </li>
          <li className="skills-item">
            Bootstrap <img src={bootstrap_photo} alt="icono" />
          </li>
          <li className="skills-item">
            GIT <img src={git_photo} alt="icono" />
          </li>
          <li className="skills-item">
            Github <img src={github_photo} alt="icono" />
          </li>
          <li className="skills-item">
            JavaScript <img src={js_photo} alt="icono" />
          </li>
          <li className="skills-item width-3rem">
            React <img src={react_photo} alt="icono" />
          </li>
          <li className="skills-item">
            Vite <img src={vite_photo} alt="icono" />
          </li>
          <li className="skills-item">
            Redux <img src={redux_photo} alt="icono" />
          </li>
          <li className="skills-item width-3rem">
            Node.JS <img src={node_photo} alt="icono" />
          </li>
          <li className="skills-item">
            NPM <img src={npm_photo} alt="icono" />
          </li>
          <li className="skills-item">
            Express.JS{" "}
            <img
              src={express_photo}
              style={{ filter: "invert(1)" }}
              alt="icono"
            />
          </li>
          <li className="skills-item width-3rem">
            MySQL <img src={mysql_photo} alt="icono" />
          </li>
          <li className="skills-item width-3rem">
            MongoDB <img src={mongo_photo} alt="icono" />
          </li>
          <li className="skills-item">
            Python <img src={python_photo} alt="icono" />
          </li>
          <li className="skills-item width-3rem">
            Java <img src={java_photo} alt="icono" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default AsideContentSkills;
