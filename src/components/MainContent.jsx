import MainContentAboutMe from "./MainContentAboutMe";
import MainContentProjects from "./MainContentProjects";

function MainContent() {
  return (
    <>
      <div className="main">
        <MainContentAboutMe />

        <MainContentProjects />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1rem",
          }}
        >
          <a href="/proyectos">
            <button className="btn-more">Ver todos los proyectos</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default MainContent;
