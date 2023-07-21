import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
  const params = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComment, isCommLoading, CommError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComment(params.id);
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>
        Page post with ID: {params.id}
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ marginBottom: '40px' }}>
          <strong>{post.id}.</strong> {post.title}
        </div>
      )}
      <h1>Comments</h1>
      {isCommLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div style={{ marginTop: '15px' }} key={comm.id}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import PostService from '../API/PostService';
// import Loader from '../components/UI/loader/Loader';

// const PostIdPage = () => {
//   const params = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     const fetchPostById = async () => {
//       try {
//         const response = await PostService.getById(params.id);
//         setPost(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchPostById();
//   }, [params.id]);

//   if (!post) {
//     return <Loader />;
//   }

//   return (
//     <div>
//       <h1>Page post with ID = {params.id}</h1>
//       <div>
//         {post.id}. {post.title}
//       </div>
//     </div>
//   );
// };

// export default PostIdPage;
