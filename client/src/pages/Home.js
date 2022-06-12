import { useAuth } from "../util/auth";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import image from "../assets/imgs/Screen Shot 2022-06-07 at 11.16.21 AM.png";

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div className="home-style">
      {/* TODO: display logged in user's username */}
      <h1>Welcome {isLoggedIn ? user.username : "Guest"}!</h1>
      <hr />
      <Container>
        <Row>
          <Col>
            <Card.Img variant="top" src={image} />
          </Col>
          <Col xs={6}>
            <div className="welcome">
              <h1>Welcome!</h1>
              <p>
                Here at Sweet-Cheeks we promote sisterhood and body positivity!
                These days, skincare has dominated the internet. Our goal is to
                create a community where everyone can share their skin care
                regimen and list products they suggest for various skin types.
                Sign up today and see what other skincare regimens our community
                is using!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
