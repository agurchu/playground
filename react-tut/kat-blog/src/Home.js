import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "Lorem ipsum...", author: "Kat", id: 1 },
    { title: "Welcome party", body: "Lorem ipsum...", author: "Thabo", id: 2 },
    {
      title: "Web dev top tips",
      body: "Lorem ipsum...",
      author: "Kat",
      id: 3,
    },
  ]);

  const [name, setName] = useState("kat");

  // this function passes id as a prop
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // not store useEffect() to const cos it does not return anything but just pass as argument function
  // this fuction fires in every render
  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);
  // [] dependency array makes sure useEffect() runs the function once after the initail render
  // [name] ensures useEffect() runs the function again when name changes

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      {/**blogs variable may be any name. 
      titleAttr changes get updated to BlogList component
       */}
      <button onClick={() => setName("Jimmy")}>Change name</button>
      <p>{name}</p>
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Kat")}
        handleDelete={handleDelete}
        title="Kat's blogs"
      />
    </div>
  );
};

export default Home;
