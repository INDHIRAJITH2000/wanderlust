import React from "react";
import "./Footer.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faWhatsapp, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footerbar = () => {
  return (
  <Container fluid className="footerbar  mt-5" id="contact">
      <Row >
        <hr />
        <Col xs={12} md={12} lg={6}>
          <p>
        developed by  Wanderlust &copy; 2025 All Rights Reserved.
                 </p>
        </Col>
         <Col xs={12} md={12} lg={6} className="footer-social-icons d-flex align-items-center justify-content-lg-end justify-content-center mt-2 mt-lg-0">
           <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="mx-2">
             <FontAwesomeIcon icon={ faWhatsapp} size="2x" />
           </a>
           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
             <FontAwesomeIcon icon={faXTwitter} size="2x" />
           </a>
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
             <FontAwesomeIcon icon={faInstagram} size="2x" />
           </a>
         </Col>
      </Row>
    </Container>
  );
};

export default Footerbar;

