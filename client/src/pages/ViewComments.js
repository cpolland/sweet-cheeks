// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import {  QUERY_POST, QUERY_COMMENTS } from '../util/queries';


// function ViewComments() {
//   const params  = useParams();
//   console.log(params);

//   const { loading, error, data } = useQuery(QUERY_POST, QUERY_COMMENTS, {
//     variables: params
//   });
//   console.log(loading);
//   console.log(data);
// if(error) {
//   console.log(error);
// }

// return (
//   <>
//  {
 
//  loading ? <> "loading" </>: 
//    <div>
//    <h1>{data}</h1>
//    {/* <h3>{data.post.description}</h3> */}
//    </div>
//  }
//  </>
//  )
 
// }


// export default ViewComments;
