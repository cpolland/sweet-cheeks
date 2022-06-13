import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../util/queries';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import { Card, Button } from 'react-bootstrap';



const Community = () => {

  const { postId } = useParams();
  const { loading } = useQuery(QUERY_POST, {
    variables: { postId: postId },
  });
  
  const post = {author: "marlovessknn", createdAt: Date.now, 
  postText: "Hello, I love skincare!", comments: [{username:"mikelovesSPF", 
  commentText:"Cool, so do I! ", createdAt: Date.now,  }]};
 

  if (loading) {
    return <div>Loading...</div>;
  }
  return (

    <container>
    <Card>
    <Card.Header>Community</Card.Header>
    <Card.Body>
    <Card.Title>Beautylover12</Card.Title>
    <Card.Text>
      Has anyone tried Glossiers new rose water spray?
    </Card.Text>
    <Button variant="info">Comment</Button>
    <Button variant="info">View comments</Button>
    </Card.Body>
    </Card>
    
    
    <Card>
    <Card.Header>Community</Card.Header>
    <Card.Body>
    <Card.Title>Stephlovesskincare12</Card.Title>
    <Card.Text>
      Opinions on the new Summer Friday face mask?
    </Card.Text>
    <Button variant="info">Comment</Button>
    <Button variant="info">View comments</Button>
    </Card.Body>
    </Card>

    <Card>
    <Card.Header>Community</Card.Header>
    <Card.Body>
    <Card.Title>Haley1234</Card.Title>
    <Card.Text>
      Who's tried the Cerave moisturizer?
    </Card.Text>
    <Button variant="info">Comment</Button>
    <Button variant="info">View comments</Button>
    </Card.Body>
    </Card>

    </container>
    
    
  );
};

export default Community;

