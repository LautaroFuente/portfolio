import MainContentProjectsItem from "./MainContentProjectsItem";
import photoCalculator from "../img/project-calculator.png";
import photoCars from "../img/project-cars.png";
import photoChrono from "../img/project-chrono.png";
import photoGames from "../img/project-games.png";
import photoHotel from "../img/project-hotel.png";
import photoSnake from "../img/project-snake.png";
import photoTateti from "../img/project-tateti.png";
import photoUntref from "../img/project-untref.png";
import photoEccomerce from "../img/project-eccomerce.png";

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

const technologies = {
  BOOTSTRAP: bootstrap_photo,
  CSS: css_photo,
  EXPRESS: express_photo,
  GIT: git_photo,
  GITHUB: github_photo,
  HTML: html_photo,
  JAVA: java_photo,
  JS: js_photo,
  MONGO: mongo_photo,
  MYSQL: mysql_photo,
  NODE: node_photo,
  NPM: npm_photo,
  PYTHON: python_photo,
  REACT: react_photo,
  REDUX: redux_photo,
  VITE: vite_photo,
};

function AllProjectsContent() {
  return (
    <>
      <h3
        className="text-gradient-alternative"
        style={{
          textAlign: "center",
        }}
      >
        MIS PROYECTOS
      </h3>
      <div className="container-project">
        <MainContentProjectsItem
          photo={photoCars}
          techs={[technologies.HTML, technologies.CSS, technologies.BOOTSTRAP]}
          desc={"Página web de una concesionaria"}
          link={
            "https://lautarofuente.github.io/proyecto-concesionario-bootstrap/"
          }
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={photoEccomerce}
          techs={[technologies.HTML, technologies.CSS, technologies.JS]}
          desc={
            "Página web de un E-commerce de relojes, donde usé la pasarela de pagos de stripe"
          }
          link={"https://lautarofuente.github.io/ecommerceTest/"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={photoSnake}
          techs={[technologies.HTML, technologies.CSS, technologies.JS]}
          desc={
            "Mini juego en el que tenés que comer los circulos y evitar los explosivos, podés moverte con las flechas del teclado o los botones en pantalla"
          }
          link={"https://lautarofuente.github.io/SnakeGame-js/"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={photoChrono}
          techs={[technologies.HTML, technologies.CSS, technologies.JS]}
          desc={
            "Reloj digital, donde también tiene una sección de modo alarma y una de modo cronómetro"
          }
          link={"https://lautarofuente.github.io/reloj-cronometro-js/"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={photoTateti}
          techs={[technologies.HTML, technologies.CSS, technologies.JS]}
          desc={"Juego 'ta-te-ti'"}
          link={"https://lautarofuente.github.io/ta-te-ti-js/"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={photoCalculator}
          techs={[technologies.HTML, technologies.CSS, technologies.JS]}
          desc={"Página web de una calculadora"}
          link={"https://lautarofuente.github.io/proyecto-calculadora-js/"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={photoUntref}
          techs={[technologies.HTML, technologies.CSS]}
          desc={"Página web de una institución escolar"}
          link={
            "https://lautarofuente.github.io/PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL/"
          }
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={photoGames}
          techs={[technologies.HTML, technologies.CSS]}
          desc={"Página web de información y noticias de juegos"}
          link={"https://lautarofuente.github.io/proyecto-pagina-videojuegos/"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={photoHotel}
          techs={[technologies.HTML, technologies.CSS]}
          desc={"Página web de un hotel"}
          link={"https://lautarofuente.github.io/proyecto-hotel-bootstrap/"}
          type={"alternative"}
        />
      </div>
    </>
  );
}

export default AllProjectsContent;
