import React from 'react';

const PostList = ({ posts = [] }) => {
  if (!posts.length) {
    return <h3>No Posts.</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Posts
      </h3>
      <div className="flex-row my-4">
        {posts &&
          posts.map((post) => (
            <div key={post._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {post.username} posted{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {post.createdAt}
                  </span>
                </h5>
                <p className="card-body">{post.text}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

// export default PostList;
