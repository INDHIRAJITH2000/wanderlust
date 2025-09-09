import React from "react";
import "./About.css";
import { Container, Row, Col, Image } from "react-bootstrap";
// import aboutImg from "../../assets/7732610_5237.svg";
import aboutImg from "../../assets/hiking.jpg";
import Sign from "../../assets/signremove1.png";



const About = () => {
  return (
    <Container className="about-page mt-5" id="about">
      <Row >
        <Col xs={12} md={6} lg={4} className="mb-4 mb-md-0">
          <Image
            src={aboutImg}
            alt="About"
            fluid
            rounded
            className="about-img"
          />
        </Col>
        <Col xs={12} md={6} lg={8}>
          <h4>About </h4>
          <p>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi vitae ab, odit maiores natus fugit. Magni ipsa, suscipit laborum molestias necessitatibus molestiae ut quas fugit neque. Voluptatem a temporibus voluptatibus.
         Officia consequatur labore fugit, facere eveniet dignissimos veniam corporis nulla perspiciatis ipsam quidem autem dolores tenetur soluta? Eius velit voluptates illo, exercitationem nihil iusto dignissimos nisi deleniti culpa expedita aliquid!
         Iure consequatur sapiente dolorem exercitationem ex unde odit eveniet, adipisci omnis doloribus, incidunt, ratione dicta. Veritatis est autem sequi odio voluptas, consequatur, fuga assumenda quisquam delectus quo repudiandae, consectetur unde!
         Dolor in ipsa illum explicabo quisquam eveniet expedita, ex eius? Odio vel fugiat dolores sunt culpa ad quaerat? Alias illo laudantium aut nam minus mollitia eum ab quis debitis animi.
         Alias nostrum aperiam culpa obcaecati fuga nesciunt dicta accusamus, ullam illo inventore porro neque quae ea officiis nisi cumque illum veniam eligendi qui dolores? Nobis odit quos voluptatum sit inventore?          
                </p>
                <img src={Sign} alt="" srcset="" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
