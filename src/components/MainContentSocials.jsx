import github_photo from "../icons/icon-github.png";
import link_photo from "../icons/icon-linkedin.png";
import email_photo from "../icons/icon-email.png";

function MainContentSocials() {
  return (
    <>
      <div className="socials">
        <h3
          className="text-gradient"
          style={{
            marginBottom: "4rem",
          }}
        >
          MIS REDES
        </h3>
        <div className="container-socials">
          <a
            href="https://github.com/LautaroFuente"
            target="_blank"
            className="container-socials-item"
          >
            <img src={github_photo} alt="Github" />
          </a>

          <a
            href="https://www.linkedin.com/in/lautaro-fuente-868b752ba/"
            target="_blank"
            className="container-socials-item"
          >
            <img src={link_photo} alt="Linkedin" />
          </a>

          <a
            href="mailto:lautaro.fuente@yahoo.com"
            className="container-socials-item"
          >
            <img src={email_photo} alt="Correo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default MainContentSocials;
