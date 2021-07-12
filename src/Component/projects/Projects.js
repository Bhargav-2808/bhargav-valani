import React from "react";
// import { Timeline, Events, a, ImageEvent } from "@merc/react-timeline";
import "./Projects.css";

import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function Projects() {
  return (
    <>
      <div className="projectstop">
        <h1
          className="pt-3 text-center font-details-b pb-3 "
          style={{ color: "#37474f" }}
        >
          PROJECTS
        </h1>
     

        {/* Project: File Saparator */}

        <Container>
          <Row style={{display:"" , justifyContent:"center"}}>
            <Col md={7} >
              <div className="d-flex justify-content-between flex-column mt-5 ">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS - FILE SAPARATOR
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> This is simple Python
                          project which separate the file using it's extension
                          and put them into separate folder according to their
                          extension.
                          <hr />
                          <strong>Technology</strong>
                          <ul>
                            <li>
                              <span className="p-2">Python</span>
                            </li>
                          </ul>
                          <div className="d-flex justify-content-between flex-nowrap text-center">
                            <Button variant="">
                              <a
                                href="#"
                                style={{
                                  textDecoration: "none",
                                  color: "#37474f",
                                }}
                              >
                                SOURCE CODE
                              </a>
                            </Button>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>

              {/* Project: REal time weather App*/}

              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS - REAL TIME WEATHER DATA WEB-APP
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> The Application give
                          real time Weather Data using city Name.
                          <hr />
                          <strong>Features:</strong>
                          <ul className="list-styles pt-1">
                            <li>Give MIN and MAX Temprature of City</li>
                          </ul>
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2"> React</span>
                            </li>
                            <li>
                              <span className="p-2"> API</span>
                            </li>
                          </ul>
                          <div className="d-flex justify-content-between flex-nowrap text-center">
                            <Button variant="">
                              <a
                                href="#"
                                style={{
                                  textDecoration: "none",
                                  color: "#37474f",
                                }}
                              >
                                SOURCE CODE
                              </a>
                            </Button>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
              
              {/* Portfolio Website */}
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS - PORTFOLIO WEBSITE
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> The Website Simply made using React Components to reduce the responce time.
                          <hr />
                          
                     
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2"> REACT</span>
                            </li>
                            <li>
                              <span className="p-2"> HTML</span>
                            </li>
                            <li>
                              <span className="p-2"> CSS</span>
                            </li>
                            <li>
                              <span className="p-2"> NPM PACKAGE</span>
                            </li>
                            <li>
                              <span className="p-2"> react-bootstrap</span>
                            </li>
                            <li>
                              <span className="p-2">MATERIAL-UI</span>
                            </li>
                            <li>
                              <span className="p-2">GITHUB PAGES</span>
                            </li>
                          </ul>
                          <div className="d-flex justify-content-between flex-nowrap text-center">
                            <Button variant="">
                              <a
                                href="https://github.com/Bhargav-2808/bhargav-valani/"
                                style={{
                                  textDecoration: "none",
                                  color: "#37474f",
                                }}
                              >
                                SOURCE CODE
                              </a>
                            </Button>
                            <Button variant="">
                              <a
                                href="https://bhargav-2808.github.io/bhargav-valani/"
                                style={{
                                  textDecoration: "none",
                                  color: "#37474f",
                                }}
                              >
                                SEE LIVE
                              </a>
                            </Button>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>

              {/* Project: Freelancing*/}
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS - FREELANCING-WEBSITE
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> Freelancing Project
                          <hr />
                          <strong>Technology</strong>
                          <ul>
                            <li>
                              <span className="p-2">HTML</span>
                            </li>
                            <li>
                              <span className="p-2">CSS</span>
                            </li>
                            <li>
                              <span className="p-2">JAVASCRIPT</span>
                            </li>
                            <li>
                              <span className="p-2">BOOTSRAP</span>
                            </li>
                            <li>
                              <span className="p-2">FONT-AWESOME</span>
                            </li>
                          </ul>
                          <div className="d-flex justify-content-between flex-nowrap text-center">
                            <Button variant="">
                              <a
                                href="https://www.ktsglamstation.ca/"
                                style={{
                                  textDecoration: "none",
                                  color: "#37474f",
                                }}
                              >
                                SEE LIVE
                              </a>
                            </Button>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>

              {/* Project : Freelancing */}
              <div className="d-flex justify-content-between flex-column mt-1  mb-5">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS - FREELANCING-WEBSITE
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> Freelancing Project
                          <hr />
                          <strong>Technology</strong>
                          <ul>
                            <li>
                              <span className="p-2">HTML</span>
                            </li>
                            <li>
                              <span className="p-2">CSS</span>
                            </li>
                            <li>
                              <span className="p-2">JAVASCRIPT</span>
                            </li>
                            <li>
                              <span className="p-2">BOOTSRAP</span>
                            </li>
                            <li>
                              <span className="p-2">FONT-AWESOME</span>
                            </li>
                          </ul>
                          <div className="d-flex justify-content-between flex-nowrap text-center">
                            <Button variant="">
                              <a
                                href="https://kanutechnologies.ca/"
                                style={{
                                  textDecoration: "none",
                                  color: "#37474f",
                                }}
                              >
                                SEE LIVE
                              </a>
                            </Button>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
