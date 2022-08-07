import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Marzo 2019 - Agosto 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Instituto de formación técnica superior (IFTS Nº18).
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            CABA, Buenos Aires Argentina.
          </h4>
          <p> Tecnicatura en análisis de sistemas.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Febrero 2022 - ACTUAL"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Universidad tecnológica nacional (UTN). 
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Avellaneda, Buenos Aires Argentina.
          </h4>

          <p> Tecnicatura universitaria en programación.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Abril 2014 - Diciembre 2016"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Soporte técnico - Eysd informáttica
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lanús Este
          </h4>
          {/* <p>.</p> */}
          <ul>
            <li><p>Reparación de PC, notebooks y All in one.</p></li>
            <li><p>Carga de mapas en GPS marca Garmín..</p></li>
            <li><p>Soporte de control remoto.</p></li>
            <li><p>Atención al cliente.</p></li>
          </ul>
        </VerticalTimelineElement>
        

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Noviembre 2019 - Febrero 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desarrollador frontend Jr - Capgemini
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            CABA / Remoto
          </h4>
          {/* <p>
            
          </p> */}
          <ul>
            <li>
              <p>Migración de un aplicativo bancario hecho en ASP hacia ReactJS con redux.</p>
            </li>
            <li>
              <p>Desarrollo de interfaces de usuario con ReactJS.</p>
            </li>
            <li>
              <p>Soporte de aplicación en Vanilla Javascript, DOJO, ReactJS.</p>
            </li>
            <li>
              <p>Resolución de incidencias.</p>
            </li>
            <li>
              <p>Utilización de metodologías ágiles con Jira como herramienta de gestión.</p>
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Febrero 2022 - Abril 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desarrollador Frontend Jr - Alkemy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Prácticas remotas.
          </h4>
          {/* <p>.</p> */}
          <ul>
            <li><p>Prácticas/aceleración en ReactJS.</p></li>
            <li><p>Creación de página de ONG junto a 7 compañeros y un mentor.</p></li>
            <li><p>Se utilizaron tecnologías como ReactJS, Redux, Javascript, ChakraUI, Formik + Yup.</p></li>
            <li><p>Utilización de metodologías ágiles con Jira como herramienta de gestión.</p></li>
          </ul>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
