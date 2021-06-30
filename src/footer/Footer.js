import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import {white } from "@material-ui/core/colors"
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

// const LinkdIn = <FontAwesomeIcon icon={faCofee} />
// const Facebook = <FontAwesomeIcon />
// const Instagram = <FontAwesomeIcon />
// const Github = <FontAwesomeIcon />
// const StackOverflow = <FontAwesomeIcon />
// const Hashnode = <FontAwesomeIcon />
// const Email = <FontAwesomeIcon />
// const Phone = <FontAwesomeIcon />
const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#37474f", width: "100%" }}>
        <Container className="Footer">
          <Row className="justify-content-md-center ">
            <Col md="6">
              <div>
                <h3>Bhargav Valani</h3>
              </div>
              <Row className="justify-content-md-center">
                <Col md="6" className="d-flex justify-content-center">
                  <Button variant="">
                    <a
                      href="https://stackoverflow.com/users/16188116/bhargav-valani"
                      style={{
                        textDecoration: "none",
                        color: "#37474f",
                        textAlign: "center",
                      }}
                    >
                      StackOverflow
                    </a>
                  </Button>
                </Col>
                <Col md="6" className="d-flex justify-content-center">
                  <Button variant="">
                    <a
                      href="https://hashnode.com/@bhargav2808"
                      style={{
                        textDecoration: "none",
                        color: "#37474f",
                        textAlign: "center",
                      }}
                    >
                      Blog
                    </a>
                  </Button>
                </Col>
              </Row>
            </Col>

            <Col md="6" className="justify-content-md-center footericon">
              <Row className="justify-content-md-center">
                <Col md="2" className="d-flex justify-content-center">
                  <EmailIcon style={{color:'white'}} />
                  
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                  <PhoneIcon style={{color:'white'}}/>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                  <FacebookIcon style={{color:'white'}}/>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                  <InstagramIcon style={{color:'white'}}/>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                  <GitHubIcon style={{color:'white'}}/>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                  <LinkedInIcon style={{color:'white'}}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
