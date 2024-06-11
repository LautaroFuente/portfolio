import AllProjectsContent from "./AllProjectsContent";

function AllProject() {
  return (
    <>
      <div className="urbanist-font-text">
        <AllProjectsContent />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "3rem",
          }}
        >
          <a href="/">
            <button className="btn-more-alternative">Volver al inicio</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default AllProject;
