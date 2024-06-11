import techIcons from "../icons/icons.js";

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
            HTML <img src={techIcons.html} alt="icono" />
          </li>
          <li className="skills-item">
            CSS <img src={techIcons.css} alt="icono" />
          </li>
          <li className="skills-item">
            Bootstrap <img src={techIcons.bootstrap} alt="icono" />
          </li>
          <li className="skills-item">
            GIT <img src={techIcons.git} alt="icono" />
          </li>
          <li className="skills-item">
            Github <img src={techIcons.github} alt="icono" />
          </li>
          <li className="skills-item">
            JavaScript <img src={techIcons.js} alt="icono" />
          </li>
          <li className="skills-item width-3rem">
            React <img src={techIcons.react} alt="icono" />
          </li>
          <li className="skills-item">
            Vite <img src={techIcons.vite} alt="icono" />
          </li>
          <li className="skills-item">
            Redux <img src={techIcons.redux} alt="icono" />
          </li>
          <li className="skills-item width-3rem">
            Node.JS <img src={techIcons.node} alt="icono" />
          </li>
          <li className="skills-item">
            NPM <img src={techIcons.npm} alt="icono" />
          </li>
          <li className="skills-item">
            Express.JS{" "}
            <img
              src={techIcons.express}
              style={{ filter: "invert(1)" }}
              alt="icono"
            />
          </li>
          <li className="skills-item width-3rem">
            PUG <img src={techIcons.pug} alt="icono" />
          </li>
          <li className="skills-item width-3rem">
            MySQL <img src={techIcons.mysql} alt="icono" />
          </li>
          <li className="skills-item width-3rem">
            MongoDB <img src={techIcons.mongo} alt="icono" />
          </li>
          <li className="skills-item">
            Python <img src={techIcons.python} alt="icono" />
          </li>
          <li className="skills-item width-3rem">
            Java <img src={techIcons.java} alt="icono" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default AsideContentSkills;
