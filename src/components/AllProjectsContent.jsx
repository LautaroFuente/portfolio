import MainContentProjectsItem from "./MainContentProjectsItem";
import projectImages from "../img/images.js";
import techIcons from "../icons/icons.js";

const technologies = {
  BOOTSTRAP: techIcons.bootstrap,
  CSS: techIcons.css,
  EXPRESS: techIcons.express,
  GIT: techIcons.git,
  GITHUB: techIcons.github,
  HTML: techIcons.html,
  JAVA: techIcons.java,
  JS: techIcons.js,
  MONGO: techIcons.mongo,
  MYSQL: techIcons.mysql,
  NODE: techIcons.node,
  NPM: techIcons.npm,
  PYTHON: techIcons.python,
  REACT: techIcons.react,
  REDUX: techIcons.redux,
  VITE: techIcons.vite,
  PUG: techIcons.pug,
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
          photo={[
            projectImages.hanged1,
            projectImages.hanged2,
            projectImages.hanged3,
          ]}
          techs={[
            technologies.NODE,
            technologies.EXPRESS,
            technologies.JS,
            technologies.CSS,
            technologies.PUG,
            technologies.MYSQL,
          ]}
          desc={
            "Juego típico del ahorcado donde registra tu nombre para al final guardarlo junto con tu puntuación en una base de datos y poder acceder a los puntajes"
          }
          link={"https://github.com/LautaroFuente/hanged-game-node"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={[
            projectImages.todolist1,
            projectImages.todolist2,
            projectImages.todolist3,
          ]}
          techs={[
            technologies.REACT,
            technologies.VITE,
            technologies.JS,
            technologies.CSS,
          ]}
          desc={
            "Lista de tareas con React, donde podés agregar, editar, borrar y marcar. Utiliza json server para que los cambios persistan"
          }
          link={"https://github.com/LautaroFuente/To-Do-List-React"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={[
            projectImages.snake1,
            projectImages.snake2,
            projectImages.snake3,
          ]}
          techs={[technologies.HTML, technologies.CSS, technologies.JS]}
          desc={
            "Mini juego donde sos una serpiente, tenés que comer los circulos y evitar los explosivos, podés moverte con las flechas del teclado o los botones en pantalla"
          }
          link={"https://lautarofuente.github.io/SnakeGame-js/"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={[
            projectImages.concesionaria1,
            projectImages.concesionaria2,
            projectImages.concesionaria3,
          ]}
          techs={[technologies.HTML, technologies.CSS, technologies.BOOTSTRAP]}
          desc={"Página web de una concesionaria"}
          link={
            "https://lautarofuente.github.io/proyecto-concesionario-bootstrap/"
          }
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={[
            projectImages.relojes1,
            projectImages.relojes2,
            projectImages.relojes3,
          ]}
          techs={[technologies.HTML, technologies.CSS, technologies.JS]}
          desc={
            "Página web de un E-commerce de relojes, donde usé la pasarela de pagos de stripe"
          }
          link={"https://lautarofuente.github.io/ecommerceTest/"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={[
            projectImages.hotel1,
            projectImages.hotel2,
            projectImages.hotel3,
          ]}
          techs={[technologies.HTML, technologies.CSS]}
          desc={"Página web de un hotel"}
          link={"https://lautarofuente.github.io/proyecto-hotel-bootstrap/"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={[
            projectImages.reloj1,
            projectImages.reloj2,
            projectImages.reloj3,
          ]}
          techs={[technologies.HTML, technologies.CSS, technologies.JS]}
          desc={
            "Reloj digital, donde también tiene una sección de modo alarma y una de modo cronómetro"
          }
          link={"https://lautarofuente.github.io/reloj-cronometro-js/"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={[
            projectImages.english1,
            projectImages.english2,
            projectImages.english3,
          ]}
          techs={[
            technologies.HTML,
            technologies.CSS,
            technologies.PUG,
            technologies.JS,
            technologies.NODE,
          ]}
          desc={"Pagina web hecha con el Static Site Generator Eleventy(11ty)"}
          link={
            "https://lautarofuente.github.io/static-site-generator-eleventy-example/"
          }
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={[
            projectImages.tateti1,
            projectImages.tateti2,
            projectImages.tateti3,
          ]}
          techs={[technologies.HTML, technologies.CSS, technologies.JS]}
          desc={"Juego 'ta-te-ti'"}
          link={"https://lautarofuente.github.io/ta-te-ti-js/"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={[
            projectImages.calculadora1,
            projectImages.calculadora2,
            projectImages.calculadora3,
          ]}
          techs={[technologies.HTML, technologies.CSS, technologies.JS]}
          desc={"Página web de una calculadora"}
          link={"https://lautarofuente.github.io/proyecto-calculadora-js/"}
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={[
            projectImages.untref1,
            projectImages.untref2,
            projectImages.untref3,
          ]}
          techs={[technologies.HTML, technologies.CSS]}
          desc={"Página web de una institución escolar"}
          link={
            "https://lautarofuente.github.io/PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL/"
          }
          type={"alternative"}
        />
        <MainContentProjectsItem
          photo={[
            projectImages.videojuegos1,
            projectImages.videojuegos2,
            projectImages.videojuegos3,
          ]}
          techs={[technologies.HTML, technologies.CSS]}
          desc={"Página web de información y noticias de juegos"}
          link={"https://lautarofuente.github.io/proyecto-pagina-videojuegos/"}
          type={"alternative"}
        />
      </div>
    </>
  );
}

export default AllProjectsContent;
