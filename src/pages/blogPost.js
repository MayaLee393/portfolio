import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";  // Import gray-matter to parse front matter
import { Buffer } from 'buffer';
global.Buffer = Buffer;

const BlogPost = () => {
  const { blogId } = useParams();  // Get the blogId from the URL
  const [content, setContent] = useState("");  // Store the markdown content
  const [metadata, setMetadata] = useState({});  // Store the front matter metadata

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        // Fetch the blog markdown file dynamically based on blogId
        const response = await fetch(`/portfolio/blogs/${blogId}.md`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const text = await response.text();

        // Parse the front matter and markdown content using gray-matter
        const { data, content } = matter(text);
        console.log("Parsed metadata:", data);
        console.log("Parsed content:", content);

        // Set the front matter and content
        setMetadata(data);
        setContent(content);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };
    fetchBlogPost();
  }, [blogId]);  // Trigger refetch when blogId changes

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-4xl font-bold">{metadata.title}</h1>
        <p className="text-500 mt-2">{metadata.date} | by {metadata.author}</p>
      </div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
