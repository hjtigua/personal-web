import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faRobot,
  faDisplay,
  faLaptopCode,
  faAnchor,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div>
      <h3 className=" text-gray-700 text-2xl font-bold py-4">
        <FontAwesomeIcon icon={faLaptopCode} size="lg" color="#F7BE3B" />
        <span className="px-2">Experiencia</span>
      </h3>
      <hr />
      <div className="text-lg text-gray-700 mt-6">
        <p className="mb-2">
          <span>Octubre 2018 -</span>
          <em> Agosto 2021</em>
        </p>
        <p className="mb-2">
          <strong>🔸Desarrollador Web Full-Stack </strong>
          <span className="underline text-gray-500">Grupo Link</span>
        </p>
        <p className="mb-2 ml-5 text-gray-400">
          <em>
            Agencia de desarrollo de software y servicios con presencia en
            varios países de Latinoamérica.
          </em>
        </p>
        <ul className="list-disc ml-5">
          <li>
            Desarrollo y mantenimiento de funcionalidades sobre los diferentes
            sitios web de la empresa.
          </li>
          <li>
            Creación de Landing page, Mailing como parte de estrategia de
            proyectos de la empresa Claro Ecuador.
          </li>
          <li>
            Soporte de incidencias provenidas de los diferentes sitios web.
          </li>
        </ul>
      </div>
      <div className="text-lg text-gray-700 mt-6 ">
        <p className="mb-2">
          <span>Noviembre 2017 -</span>
          <em> Octubre 2018</em>
        </p>
        <p className="mb-2">
          <strong>🔹Desarrollador de Aplicaciones de escritorio </strong>
          <span className="underline text-gray-500">Grupo Link</span>
        </p>
        <p className="mb-2 ml-5 text-gray-400">
          <em>
            Agencia de desarrollo de software y servicios con presencia en
            varios países de Latinoamérica.
          </em>
        </p>
        <ul className="list-disc ml-5">
          <li>
            Creación de nuevo aplicativo de escritorio “kiosko” para Claro
            Ecuador.
          </li>
          <li>
            Mantenimiento y desarrollo de nuevas funcionabilidades de aplicativo
            de escritorio ya existente.
          </li>
          <li>
            Creación de Video llamada como un componente embebido para
            aplicaciones de kiosco.
          </li>
        </ul>
      </div>

      <h3 className=" text-gray-700 text-2xl font-bold py-4">
        <FontAwesomeIcon icon={faPerson} size="lg" color="#202020" />
        <span className="px-2">Skills</span>
      </h3>
      <hr />
      <div className="flex justify-between flex-wrap">
        <ul className="list-disc ml-5 mt-6 text-gray-700 text-lg">
          <li>Desarrollo con buenas prácticas: Clean code</li>
          <li>Trabajo en equipo</li>
          <li>Proactividad y compromiso</li>
          <li>Aprendizaje continuo</li>
        </ul>
      </div>

      <h3 className="py-4 text-gray-700 text-2xl font-bold">
        <FontAwesomeIcon icon={faRobot} size="lg" color="#6c757d" />
        <span className="px-2">Backend</span>
      </h3>
      <hr />
      <div className="flex justify-between flex-wrap">
        <ul className="list-disc ml-5 mt-6 text-gray-700 text-lg">
          <li>Laravel</li>
          <li>JavaScript</li>
          <li>C#</li>
          <li>TypeScript</li>
        </ul>

        <ul className="list-disc ml-5 mt-6 text-gray-700 text-lg">
          <li>MySQL</li>
          <li>SQL Server</li>
          <li>Oracle</li>
          <li>MongoDB </li>
        </ul>
      </div>

      <h3 className="py-4 text-gray-700 text-2xl font-bold">
        <FontAwesomeIcon icon={faDisplay} size="lg" color="#ffc53a" />
        <span className="px-2">Frontend</span>
      </h3>
      <hr />
      <div className="flex justify-between flex-wrap">
        <ul className="list-disc ml-5 mt-6 text-gray-700 text-lg">
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>TailwindCSS</li>
        </ul>
      </div>

      <h3 className="py-4 text-gray-700 text-2xl font-bold">
        <FontAwesomeIcon icon={faAnchor} size="lg" color="#6c757d" />
        <span className="px-2">Otros</span>
      </h3>
      <hr />
      <div className="flex justify-between flex-wrap">
        <ul className="list-disc ml-5 mt-6 text-gray-700 text-lg">
          <li>Azure</li>
          <li>Digital Ocean</li>
          <li>Git - Github</li>
          <li>Docker</li>
        </ul>
      </div>
    </div>
  );
}
