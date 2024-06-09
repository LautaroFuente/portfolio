import AsideContentSkills from "./AsideContentSkills";
import photo from "../img/fotoCV.png";

function AsideContent() {
  return (
    <>
      <div className="aside">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={photo} className="my-photo" alt="foto" />
          <AsideContentSkills />
        </div>
        <div>
          <h3
            className="text-gradient"
            style={{
              textAlign: "center",
              marginTop: "3rem",
            }}
          >
            CONTACTO
          </h3>
          <p
            style={{
              padding: "1rem",
              textAlign: "center",
              fontSize: "0.8rem",
              marginBottom: "3rem",
            }}
          >
            - lautaro.fuente@yahoo.com
          </p>
        </div>
      </div>
    </>
  );
}

export default AsideContent;
