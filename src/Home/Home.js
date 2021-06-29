
import {Container, Row, Col } from 'react-bootstrap'
import './home.css'
import home2 from'../Assets/images/home2.svg'
import {Typing} from '../Typing/Typing'
export default function Home() {
  return (
    <>
      <Container className="HomeArea">
        <Row className="justify-content-md-center ">
            <Col  md ="6" >
              <Typing/>
          
          </Col>
          
          <Col  md="6">          
           <img src={home2} alt="Home"/>
          </Col>
        </Row>
      
      </Container>
    </>
  );
}
