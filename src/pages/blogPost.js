import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import matter from "gray-matter"; 
import { Buffer } from 'buffer';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'


global.Buffer = Buffer;

const BlogPost = () => {
  const { blogId } = useParams();  
  const [content, setContent] = useState("");  
  const [metadata, setMetadata] = useState({});  

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`/portfolio/blogs/${blogId}.md`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const text = await response.text();

        // Parse the front matter and markdown content using gray-matter
        const { data, content } = matter(text);
        // console.log("Parsed metadata:", data);
        // console.log("Parsed content:", content);

        setMetadata(data);
        setContent(content);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };
    fetchBlogPost();
  }, [blogId]);  // Trigger refetch when blogId changes

  return (
    <div className=" blog-box p-6 max-w-3xl mx-auto rounded">
      <Link
          to={`/blogs`}
          className="back-arrow no-underline d-flex align-items-center text-lg md:text-3xl mr-4 hover:scale-150"
              style={{ color: 'var(--color3)' }}
      >
          <FaArrowLeft />
      </Link>
      <div className=" mb-6">
        <h1 className="text-4xl font-bold">{metadata.title}</h1>
        <p className="text-500 mt-2">{metadata.date} | by {metadata.author}</p>
      </div>
      <div className="text-left">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkEmoji]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
