import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <div 
      className="card border p-4 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer" 
      onClick={handleClick}
    >
      <h2 className="text-xl font-semibold">{blog.title}</h2>
      <p className="text-gray-500 text-sm">{blog.date}</p>
      <img src={`/portfolio/blogs/images/${blog.image}`} alt={blog.title} className="w-full h-48 object-cover rounded-lg" />
      <p className="mt-2 text-sm">{blog.summary}</p>
      <p className="text-blue-500 mt-2">Click to Read More</p>
    </div>
  );
};

export default BlogCard;
