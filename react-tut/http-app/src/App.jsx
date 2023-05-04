import { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(apiEndpoint).then((response) => {
      const { data } = response;
      setPosts(data);
    });
  }, []);

  const handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await axios.post(apiEndpoint, obj);
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
      await axios.delete(apiEndpoint + "/" + post.id);
      throw new Error("");
    } catch (error) {
      alert("Something failed while deleting a post");
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
