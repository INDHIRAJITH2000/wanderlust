import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Banner.css";


const Banner = () => {
  return (
    <Container fluid className="bannerimg py-5" id="home">

      <Row className="justify-content-center mt-5 ">

        <Col xs={12} md={8} lg={6} >
         <div className="overlay">
         
                <h2>welcome to wanderlust</h2>
                <p>
                    an interactive travel blog that inspires you to explore the world.
                </p>
              </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde consequuntur odit iure quasi labore molestias ad. Iure recusandae optio, vero cum voluptatum est pariatur modi, quibusdam delectus excepturi, sed quis?
          </p> */}
        </Col>
       
      </Row>
    </Container>
  );
};

export default Banner;
