import "./Footer.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdbreact";
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
      <MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <EmailIcon />
                </li>
                <li className="list-unstyled">
                  <PhoneIcon />
                </li>
                <li className="list-unstyled">
                  <InstagramIcon />
                </li>
                <li className="list-unstyled">
                  <FacebookIcon />
                </li>
                <li className="list-unstyled">
                  <GitHubIcon />
                </li>
                <li className="list-unstyled">
                  <LinkedInIcon />
                </li>
                <li className="list-unstyled">
                    StackOverflow
                </li>
                <li className="list-unstyled">
                    Hashnode
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:
          </MDBContainer>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
