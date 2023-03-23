import { Link } from "react-router-dom";

// BlogList = ({ blogs, title })  blogs, title names must be the same as the variables in home.js componet
const BlogList = ({ blogs, title }) => {
  //   const blogs = props.blogz;
  //   const title = props.titleAttr;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
