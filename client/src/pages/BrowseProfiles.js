import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, FIND_USER } from "../util/queries";
import { Container, Row, Col, Card } from "react-bootstrap";

function BrowseProfiles() {
  const params = useParams();
  console.log(params);

  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: params,
  });
  console.log(loading);
  console.log(data);
  if (error) {
    console.log(error);
  }
  const users = data?.users || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    // <ul>
    //   {data.map(user => (
    //     <li key={user.BrowseProfiles}></li>
    //   ))}
    <Container>
      <Row>
        <Col>
          <Card bg="info">
            <Card.Body>
              <Card.Title>Profile</Card.Title>

              <Card.Text>{users.username}</Card.Text>
              <Card.Text>Age:{users.age}</Card.Text>
              <Card.Text>City:{users.city}</Card.Text>
              <Card.Link as={Link} to="/view-profiles/:userId">
                View Profile
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card bg="light">
            <Card.Body>
              <Card.Title>Profile</Card.Title>

              <Card.Text>Stephlovesskincare12</Card.Text>
              <Card.Text>Age: 24</Card.Text>
              <Card.Text>City: Denver</Card.Text>
              <Card.Link as={Link} to="/view-profiles/:userId">
                View Profile
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card bg="info">
            <Card.Body>
              <Card.Title>Profile</Card.Title>

              <Card.Text>Stephlovesskincare12</Card.Text>
              <Card.Text>Age: 24</Card.Text>
              <Card.Text>City: Denver</Card.Text>
              <Card.Link as={Link} to="/view-profiles/:userId">
                View Profile
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card bg="#FFF9C4">
            <Card.Body>
              <Card.Title>Profile</Card.Title>

              <Card.Text>Stephlovesskincare12</Card.Text>
              <Card.Text>Age: 24</Card.Text>
              <Card.Text>City: Denver</Card.Text>
              <Card.Link as={Link} to="/view-profiles/:userId">
                View Profile
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card bg="info">
            <Card.Body text="light">
              <Card.Title>Profile</Card.Title>

              <Card.Text>Stephlovesskincare12</Card.Text>
              <Card.Text>Age: 24</Card.Text>
              <Card.Text>City: Denver</Card.Text>
              <Card.Link as={Link} to="/view-profiles/:userId">
                View Profile
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    // </ul>
  );

  // function BrowseProfile() {
  //   return <h2> Browse Users </h2>;
  // }
}
export default BrowseProfiles;
