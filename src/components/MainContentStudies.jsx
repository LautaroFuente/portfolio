import CV from "../files/CV.pdf";

function MainContentStudies() {
  return (
    <>
      <div className="studies">
        <h3
          className="text-gradient"
          style={{
            textAlign: "center",
            padding: "1rem",
          }}
        >
          PODES VER MIS ESTUDIOS Y MAS INFO EN MI CV
        </h3>
        <div>
          <a href={CV} download="CV.pdf">
            <button className="btn-cv">Descargar CV aca!</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default MainContentStudies;
