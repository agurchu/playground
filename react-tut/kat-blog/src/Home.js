import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  // not store useEffect() to const cos it does not return anything but just pass as argument function
  // this fuction fires in every render
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => response.json())
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        });
    }, 1000);
  }, []);
  // [] dependency array makes sure useEffect() runs the function once after the initail render
  // [name] ensures useEffect() runs the function again when name changes

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/**blogs variable may be any name. 
      titleAttr changes get updated to BlogList component
       */}
    </div>
  );
};

export default Home;
