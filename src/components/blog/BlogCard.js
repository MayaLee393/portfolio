import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <div 
      className="border p-4 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer" 
      onClick={handleClick}
    >
      <h2 className="text-xl font-semibold">{blog.title}</h2>
      <p className="text-gray-500">{blog.date}</p>
      <p className="mt-2">{blog.excerpt}</p>
      <p className="text-blue-500 mt-2">Read More →</p>
    </div>
  );
};

export default BlogCard;
