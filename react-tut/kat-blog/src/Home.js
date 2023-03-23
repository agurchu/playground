import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  // not store useEffect() to const cos it does not return anything but just pass as argument function
  // this fuction fires in every render
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  // [] dependency array makes sure useEffect() runs the function once after the initail render
  // [name] ensures useEffect() runs the function again when name changes

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/**blogs variable may be any name. 
      titleAttr changes get updated to BlogList component
       */}
    </div>
  );
};

export default Home;
