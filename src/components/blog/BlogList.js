import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch('/portfolio/blogs.json');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log("Fetched blogs:", data);
          const reversedBlogs = data.reverse();
          setBlogs(reversedBlogs); 
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };
      fetchBlogs();
    }, []); 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.isArray(blogs) && blogs.length === 0 ? (
          <p>Loading blogs...</p>
        ) : (
          blogs.map((blog) => (
              <div key={blog.id} className="card-container w-full h-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <BlogCard key={blog.id} blog={blog} className="w-full h-full max-w-sm"/>
              </div>
            ))
        )}
    </div>
  );
};

export default BlogList;
