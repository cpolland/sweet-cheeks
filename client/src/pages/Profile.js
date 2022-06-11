import { useParams } from "react-router-dom";
import {  useQuery } from "@apollo/client";
import { ME } from "../util/queries";
import { Container, Row, Col, Card } from "react-bootstrap";

function Profile() {
  const params = useParams();
  console.log(params);

  const { loading, error, data } = useQuery(ME, {
    variables: params,
  });
  console.log(loading);
  console.log(data);
  if (error) {
    console.log(error);
  }

  const individual = data?.me || {};
  if(loading) {
    return <div> Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Profile</Card.Title>

              <Card.Text>{individual.username}</Card.Text>
              <Card.Text>Age: 33</Card.Text>
              <Card.Text>City: San Diego</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Skin Regime</Card.Title>

              <Card.Text>
                Skin type: Dry-sensitive Cleanser: Glossier Milk Wash Toner: The
                Ordinary Toner Mosturizer/SPF: Glow Recipe: Plump creme Masks:
                Holler & Glow eye Masks Serums:""
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>My Skin Bio</Card.Title>

              <Card.Text>
                "Lorem ipsum.................................."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
