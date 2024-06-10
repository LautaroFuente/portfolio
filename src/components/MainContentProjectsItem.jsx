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
        <div id={`carouselExample${link}`} className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href={link} target="_blank" style={{ textAlign: "center" }}>
                <img
                  className="photo-project"
                  src={photo}
                  alt="foto del projecto"
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href={link} target="_blank" style={{ textAlign: "center" }}>
                <img
                  className="photo-project"
                  src={photo}
                  alt="foto del projecto"
                />
              </a>
            </div>
            <div className="carousel-item">
              <a href={link} target="_blank" style={{ textAlign: "center" }}>
                <img
                  className="photo-project"
                  src={photo}
                  alt="foto del projecto"
                />
              </a>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#carouselExample${link}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#carouselExample${link}`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
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
