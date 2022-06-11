import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_POST } from "../util/queries";
import { Container, Row, Col, Card } from "react-bootstrap";

function ViewComments() {
  const params = useParams();
  console.log(params);

  const { loading, error, data } = useQuery(QUERY_POST, {
    variables: params,
  });
  console.log(loading);
  console.log(data);
  if (error) {
    console.log(error);
  }

  // const post = {
  //   author: "marlovessknn",
  //   createdAt: Date.now,
  //   postText: "Hello, I love skincare!",
  //   comments: [
  //     {
  //       userName: "mikelovesSPF",
  //       commentText: "Cool, so do I! ",
  //       createdAt: Date.now,
  //     },
  //   ],
  // };

  const comments = data?.posts || {};
  if(loading) {
    return <div> Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {comments.username}
              </Card.Subtitle>
              <Card.Text>
                {comments.posts}
                Has anyone tried Glossier's new rose water spray?
              </Card.Text>
              <Card.Link href="#">Comment</Card.Link>
              <Card.Link href="#">View Comments</Card.Link>
            </Card.Body>
          </Card>
          <Card border="info" style={{ width: "18rem" }}>
            <Card.Header>MEGlikesSPF</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                Yes I love it so much!. So Fresh, Put it in the fridge for a cooling feel!! 💙
              </Card.Text>
            </Card.Body>
            </Card>
          <Card border="info" style={{ width: "18rem" }}>
            <Card.Header>DewYsKnnLife</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                OMG! Can't wait to try! 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewComments;
