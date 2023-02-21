import { Link, Params, useLoaderData } from 'react-router-dom';
import Modal from '../components/Modal';
import { PostInterface } from '../interfaces/post.interface';
import classes from './PostDetails.module.css'

function PostDetails() {
  const post = useLoaderData() as PostInterface;

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post!</h1>
          <p>Unfortunaly, the requested post could not be found.</p>
          <p>
            <Link to='..' className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch('http://localhost:8080/posts/' + params.id);
  const resData = await response.json();
  return resData.post;
}