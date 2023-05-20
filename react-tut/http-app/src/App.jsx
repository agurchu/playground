import { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import config from "./config.json";
import http from "./services/httpService";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    http.get(config.apiEndpoint).then((response) => {
      const { data } = response;
      setPosts(data);
    });
  }, []);

  const handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj);
    const newPosts = [post, ...posts];
    setPosts(newPosts);
  };

  const handleUpdate = useCallback(async (post) => {
    setPosts((prevPosts) => {
      const newPosts = [...prevPosts];
      const index = newPosts.indexOf(post);
      newPosts[index] = { ...post, title: "Updated" };
      return newPosts;
    });
  }, []);

  const handleDelete = async (post) => {
    setPosts(posts.filter((newPost) => newPost.id !== post.id));
    try {
      await http.delete(config.apiEndpoint + "/" + post.id);
    } catch (error) {
      // Expected (404: not found, 400: bad request) - client errors
      // - display a specific error msg
      if (error.response && error.response.status === 404)
        alert("This post has already been deleted");
      // Unexpected (network down, server down, db down, bug)
      // - log them
      // - display a generic and friendly error msg
      setPosts(posts);
    }
  };

  return (
    <div className="container my-4">
      <button onClick={handleAdd} className="btn btn-primary">
        Add
      </button>
      <table className="table">
        <thead>
          <tr>
            <th className="col">Title</th>
            <th className="col">Update</th>
            <th className="col">Delete</th>
          </tr>
        </thead>
        {posts.length > 0 && (
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(post)}
                    className="btn btn-secondary"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(post)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default App;
