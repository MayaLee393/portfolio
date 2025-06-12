import { Routes, Route } from "react-router-dom";
import BlogList from "../components/blog/BlogList";
import BlogPost from "./blogPost";

const BlogPage = () => {
  return (
    <div className="p-4">
      <h1 style={{fontFamily:' "VT323", monospace'}} className='text-6xl mb-4'>Blogs</h1>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path=":blogId" element={<BlogPost />} /> 
      </Routes>
    </div>
  );
};

export default BlogPage;
