import { Routes, Route } from "react-router-dom";
import BlogList from "../components/blog/BlogList";
import BlogPost from "./blogPost";

const BlogPage = () => {
  return (
    <div className="p-4">
      <h1 >Blogs</h1>
      <p className="mb-4">Just some thoughts...</p>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path=":blogId" element={<BlogPost />} /> 
      </Routes>
    </div>
  );
};

export default BlogPage;
