import { useLoaderData } from "react-router-dom";
import { PostInterface } from "../interfaces/post.interface";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData() as PostInterface[];

  return (
    <>
      {posts && posts.length > 0 &&
        <ul className={classes.posts}>
          {posts.map((post: PostInterface) => <Post key={post._id} id={post._id} author={post.author} body={post.body}  />)}
        </ul>
      }
      {posts && posts.length === 0 &&
        <div style={{textAlign: 'center', color: '#ffffff'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      }
    </>
    
  );
}

export default PostList;
