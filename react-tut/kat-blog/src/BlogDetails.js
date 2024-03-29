import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + data.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
