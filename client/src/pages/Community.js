import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../util/queries';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import React from 'react';



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

    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {post.username} <br />
        <span style={{ fontSize: '1rem' }}>
          posted on {post.createdAt}
        </span>
      </h3>


      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px solid #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {post.postText}
        </blockquote>
      </div>

      <div className="my-5">
        <PostList comments={post.comments} />
      </div> 
      <div className="m-3 p-4" style={{ border: '1px solid #1a1a1a' }}>
        <PostForm postId={post._id} />
      </div>
    </div>
  );
};

export default Community;

