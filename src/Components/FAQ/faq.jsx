import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./faq.css";

const faqs = [
  {
    question: "What is Wanderlust?",
    // answer: "Wanderlust is a travel platform to discover amazing destinations and plan your next adventure."
  answer:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "How do I book a trip?",
    answer: "You can browse destinations and book directly through our website."
  },
  {
    question: "Is Wanderlust free to use?",
    answer: "Yes, Wanderlust is free for all users. Some premium features may require payment."
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel your booking from your account dashboard."
  },
  
];

const FAQ = () => {
  return (
    <Container className="faq-container py-5" id="faq">
          <h4 className="mb-4 text-center">Frequently Asked Questions</h4>

      <Row className="justify-content-center mt-5 ">
          {/* <h4 className="mb-4 text-center">Frequently Asked Questions</h4> */}

        <Col xs={12} md={8} lg={6} >
          <Accordion defaultActiveKey="0">
            {faqs.map((faq, idx) => (
              <Accordion.Item eventKey={String(idx)} key={idx}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
         {/* <Col xs={12} md={8} lg={6}>
          <h4 className="mb-4 text-center">Frequently Asked Questions</h4>
          <Accordion defaultActiveKey="0">
            {faqs.map((faq, idx) => (
              <Accordion.Item eventKey={String(idx)} key={idx}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col> */}
      </Row>
    </Container>
  );
};

export default FAQ;
