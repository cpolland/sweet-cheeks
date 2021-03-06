import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {  QUERY_POST } from '../util/queries';

import { Card, Button } from 'react-bootstrap';
function ViewComments() {
  const params  = useParams();
  console.log(params);

  const { loading, error, data } = useQuery(QUERY_POST,  {
    variables: params

  });
  console.log(loading);
  console.log(data);
if(error) {
  console.log(error);
}

const post = {author: "marlovessknn", createdAt: Date.now, postText: "Hello, I love skincare!", comments: [{userName:"mikelovesSPF", commentText:"Cool, so do I! ", createdAt: Date.now,  }]};
return (
  <>
 {
 
 loading ? <> "loading" </>: 
  //  <div>
  //  <h1>{data.post}</h1>
  //  <h3>Yes, i love it!</h3>
  //  </div>
  <Card>
  <Card.Header>KellyLovesSkincare</Card.Header>
  <Card.Body>
    <Card.Text>
      I love that product! I use it everyday and have seen great results.
    </Card.Text>
    <Button variant="primary">Add Comment</Button>
  </Card.Body>
</Card>
 }
 </>
 )
 
}



export default ViewComments;
