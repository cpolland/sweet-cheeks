import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../util/queries";
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

  const user = data?.users || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(user);
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

              <Card.Text>{user.username}</Card.Text>
              <Card.Text>Age: {user.age}</Card.Text>
              <Card.Text>City: {user.city}</Card.Text>
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

              <Card.Text>AmyL23</Card.Text>
              <Card.Text>Age: 30</Card.Text>
              <Card.Text>City: Los Angeles</Card.Text>
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

              <Card.Text>PeterK</Card.Text>
              <Card.Text>Age: 27</Card.Text>
              <Card.Text>City: El Cajon</Card.Text>
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

              <Card.Text>KendallJones33</Card.Text>
              <Card.Text>Age: 35</Card.Text>
              <Card.Text>City: San Diego</Card.Text>
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

              <Card.Text>HaileyB</Card.Text>
              <Card.Text>Age: 28</Card.Text>
              <Card.Text>City: Chicago</Card.Text>
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
