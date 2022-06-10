import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FIND_USER } from '../util/queries';


function ViewProfiles() {
  const params  = useParams();
  console.log(params);

  const { loading, error, data } = useQuery(FIND_USER, {
    variables: params
  });
  console.log(loading);
  console.log(data);
if(error) {
  console.log(error);
}
return (
  <>
 {
 
 loading ? <> "loading" </>: 
   <div>
   <h1>{data.email}</h1>
   {/* <h3>{data.post.description}</h3> */}
   </div>
 }
 </>
 )
 




}
export default ViewProfiles;
