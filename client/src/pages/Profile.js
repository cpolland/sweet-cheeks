import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ME } from "../util/queries";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Profile.css"
import Stack from 'react-bootstrap/Stack'

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
  if (loading) {
    return <div> Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Profile</Card.Title>

              <Card.Text>{individual.username}</Card.Text>
              <Card.Text>Age:{individual.age}</Card.Text>
              <Card.Text>City:{individual.city}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Skin Regime</Card.Title>

              <Card.Text>
             Skin Type: {individual.skinType} <br>
             </br>
             Cleanser: {individual.cleanser} <br>
             </br>
             Toner: {individual.toner}  <br>
             </br> 
             Mosturizer: {individual.moisturizer} <br>
             </br> 
             Serums: {individual.serums}   
                
                
              </Card.Text>
            </Card.Body>
          </Card>
          </Stack>
        </Col>


        <Col>
          <Card>
            <Card.Body>
              <Card.Title>My Skin Bio</Card.Title>

              <Card.Text>
                {individual.bio}
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
