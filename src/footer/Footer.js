import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
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
          <Row
            className="justify-content-md-center "
            style={{  }}
          >
            <Col md="6">
              <div>
                <h3>Bhargav Valani</h3>
                <hr />
              </div>
              <Row className="justify-content-md-center">
                <Col md="6" style={{ color: "white" }}>
                  <p style={{ textAlign: "center", fontSize: "1.2em", fontFamily: "fantasy", letterSpacing:"2px" }}>
                    Visit My Recent Blog
                  </p>

                  <ul>
                    {" "}
                    <li>
                      <a
                        href="https://bhargavvalani.hashnode.dev/how-to-learn-programming-or-5-step-you-need-to-know"
                        target="blank"
                      >
                        How to learn programming || 5 step you need to know{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://hashnode.com/@bhargav2808"
                        target="blank"
                      >
                        Read more blogs
                      </a>
                    </li>
                  </ul>

                  {/* <Button variant="">
                    <a
                      href="https://hashnode.com/@bhargav2808"
                      style={{
                        textDecoration: "none",
                        color: "#37474f",
                        textAlign: "center",
                      }}
                      target="blank"
                    >
                      Blog
                    </a>
                  </Button> */}
                </Col>
                {/* <Col md="3" className="d-flex justify-content-center">
                  <Button variant="">
                    <a
                      href="https://stackoverflow.com/users/16188116/bhargav-valani"
                      style={{
                        textDecoration: "none",
                        color: "#37474f",
                        textAlign: "center",
                      }}
                      target="blank"
                    >
                      StackOverflow
                    </a>
                  </Button>
                </Col> */}
              </Row>
            </Col>

            <Col md="6" className="justify-content-md-center footericon">
              <Row className="justify-content-md-center d-flex justify-content-center mb-5">
                <div className="footer-link">
                  <a href="mailto:bhargavvalani01@gmail.com" target="blank">
                    <EmailIcon style={{}} />
                  </a>
                  <a href="tel:+919327963077" target="blank">
                    <PhoneIcon style={{}} />
                  </a>
                  <a
                    href="https://www.facebook.com/bhargav.valani"
                    target="blank"
                  >
                    <FacebookIcon style={{}} />
                  </a>
                  <a
                    href="https://www.instagram.com/bhargav.valani_"
                    target="blank"
                  >
                    <InstagramIcon style={{}} />
                  </a>
                  <a href="https://github.com/Bhargav-2808" target="blank">
                    <GitHubIcon style={{}} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bhargav-valani/"
                    target="blank"
                  >
                    <LinkedInIcon style={{}} />
                  </a>
                </div>
              </Row>
              <Row className="justify-content-md-center d-flex justify-content-center mb-5">
                <Col className="justify-content-md-center d-flex justify-content-center mb-5">
                  <div className="mt-3 address">
                    
                      <h5> MO : +91 9327963077</h5>
                      <p>
                        {" "}
                        Ahmedabad-382350
                        <br />
                        Gujarat
                      </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div>
          <div className="py-2 text-center copy-style">
            © BHARGAV VALANI &nbsp; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
