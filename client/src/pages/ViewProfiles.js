import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FIND_USER } from "../util/queries";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Profile.css";
import Stack from 'react-bootstrap/Stack'

function ViewProfiles() {
  const params = useParams();
  console.log(params);

  const { loading, error, data } = useQuery(FIND_USER, {
    variables: params,
  });
  console.log(loading);
  console.log(data);
  if (error) {
    console.log(error);
  }

  const user = data?.findUser || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  return (

    <Container>
      <Row>
        <Col>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Card className="card">
            <Card.Body>
              <Card.Title>Profile</Card.Title>

              <Card.Text>{user.username}</Card.Text>
              <Card.Text>Age: 24</Card.Text>
              <Card.Text>City: Denver</Card.Text>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Body>
              <Card.Title>Skin Regime</Card.Title>
              <Card.Text>
                Skin type: Dry-sensitive Cleanser: Glossier Milk Wash Toner: The
                Ordinary Toner Mosturizer/SPF: Glow Recipe: Plump creme Masks:
                Holler & Glow eye Masks Serums:""
              </Card.Text>
            </Card.Body>
          </Card>
          </Stack>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>My Skin Bio</Card.Title>

              <Card.Text>{user.post}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewProfiles;
