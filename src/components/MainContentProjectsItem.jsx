function MainContentProjectsItem({ photo, techs, desc, link, type = "none" }) {
  return (
    <>
      <div
        className={
          type === "none"
            ? "project-item"
            : "project-item project-item-alternative"
        }
      >
        <a href={link} target="_blank" style={{ textAlign: "center" }}>
          <img className="photo-project" src={photo} alt="foto del projecto" />
        </a>
        <p>{desc}</p>
        <h6 style={{ padding: "0.5rem", margin: "0.5rem 0" }}>
          Tecnologias Usadas:
        </h6>
        <div className="list-tech">
          {techs.map((el, index) => (
            <img key={index} src={el} alt=""></img>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainContentProjectsItem;
