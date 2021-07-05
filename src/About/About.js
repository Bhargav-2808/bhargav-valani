import { Container, Row, Col } from "react-bootstrap";

import profile from "../Assets/images/profile/profile.jpg";

import "./About.css";
export default function About() {
  return (
    <>
      <Container className="HomeArea">
        <Row className="justify-content-md-center ">
          <Col className="d-flex justify-content-center">
            <h1>About</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center aboutbackground mb-5 mt-5">
          <Col md="5" className="d-flex justify-content-center mt-5 ">
            <img src={profile} alt="profile" className="aboutimg" />
          </Col>
          <Col md="5" className="d-flex justify-content-center mt-5">
            <div>
              {" "}
              <div className="paragraph">
              <p>
                I just started my career with basic HTML for two years. From
                that time to now, my mindsets and goals wholly changed. I love
                to do all that work. I am pursuing my bachelor's in the
                Information Technology field with LDRP-ITR collage. I love to
                learn new code, new technology, build community and collaborate
                with others. I also fond of playing cricket and reading new
                books and poetry. That always doesn't make me bored. I am also
                working with comprehensive projects and Got some working
                experience which boosts my profile,
                <br />
              </p>
              </div>
              <div className="skill">
                <ul>
                  <li>
                    Programming (C , C++ and Python-3(+Tkinter module),java),{" "}
                  </li>
                  <li>
                    Web Development (HTML-5 , CSS-3 and Bootstrap-4,
                    JavaScript,React js , API) ,{" "}
                  </li>
                  <li>
                    Blogging (WordPress , Google search console , google
                    analytics , Elementor page builder , Writing , Google
                    Adsense){" "}
                  </li>
                  <li>
                    Industrial Knowledge (Stock market, Technical analysis of
                    equity, Investment, Mutual fund ){" "}
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
