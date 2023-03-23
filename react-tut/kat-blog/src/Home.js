import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "Lorem ipsum...", author: "kat", id: 1 },
    { title: "Welcome party", body: "Lorem ipsum...", author: "Thabo", id: 2 },
    {
      title: "Web dev top tips",
      body: "Lorem ipsum...",
      author: "Locus",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      {/**blogs variable may be any name. 
      titleAttr changes get updated to BlogList component
       */}
    </div>
  );
};

export default Home;
