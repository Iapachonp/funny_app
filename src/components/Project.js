import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useState } from "react";
import { coffees } from "./coffee/coffee";

export const Projects = () => { 
  const [filter, setFilter] = useState("All");
  const Coffee_FILTER_MAP = {
  All: () => true,
  Huila: (coffee) => coffee.origin == "Huila",
  Cauca: (coffee) => coffee.origin == "Cauca",
};
  return (
    <section className="project" id="cafe">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Comprar Caf&#233; online</h2>
                <p>Cada uno de nuestros granos es seleccionado con esmero y tostado en lotes pequeños, 
                  asegurando así la frescura y el sabor inigualable de nuestro café. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="All">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="All" onClick={() => setFilter("All")} >Origen Colombia</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Huila" onClick={() => setFilter("Huila")}>Origen Huila</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Cauca" onClick={() => setFilter("Cauca")} >Origen Cauca</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : "yes"}>
                    <Tab.Pane eventKey={filter}>
                      <Row>
                        {
                          coffees
                          .filter(Coffee_FILTER_MAP[filter])
                          .map((coffee, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...coffee}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane> 
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
