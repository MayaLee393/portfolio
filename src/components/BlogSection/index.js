import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";


const BlogSection = () => {
    const id_array = [1]
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
    const fetchBlogs = async () => {
        try {
        const response = await fetch('/portfolio/blogs.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // console.log("Fetched blogs:", data);
        const project_array = []
        for(let i=0; i<id_array.length; i++) {
            let blogid = "blog"+id_array[i]
            const project = data.find(p => p.id === blogid);
            if (project) {
                project_array.push(project);
            }
        }
        // console.log("display blogs:", project_array);
        setBlogs(project_array); 
        } catch (error) {
        console.error('Error fetching blogs:', error);
        }
    };
    fetchBlogs();
    }, []); 

  return (
    <div>
        <div className='project-section container text-center'>
          <div className='project-header text-left flex items-center justify-between mb-4'>
              <h1 className="text-2xl font-bold md:text-4xl  ">Blogs</h1>
              <Link to="/projects" className='text-base md:text-lg mr-4 hover:scale-125'>
              <div className='flex gap-4 no-underline'>
                    <div><p className='no-underline'>More Blogs</p></div>
                    <div><FaArrowRight /></div>
              </div>
                  

              </Link>
          </div>
          {Array.isArray(blogs) && blogs.length === 0 ? (
          <p>Loading blogs...</p>
                ) : (
                blogs.map((blog) => (
                    <div key={blog.id} className='project-bar mobile-bar row mb-2 '>
                        <div className='project-picture col-md-4 d-none d-md-block position-relative overflow-hidden'>
                            <img
                                src={`/portfolio/blogs/images/${blog.image}`}
                                alt="Blog preview"
                                className="w-100 h-100 object-cover position-absolute top-0 start-0"
                            />
                            <div className='slanted-edge position-relative'></div>
                        </div>

                        <div className='project-content mobile-project text-left col-12 col-md-8  d-flex justify-between align-items-center '>
                        <div>
                            <h1 className=" text-xl font-bold">{blog.title}</h1>
                            <p>{blog.summary.includes('\n')? blog.summary.slice(0, blog.summary.indexOf('\n')) : blog.summary}</p>
                        </div>
                            <Link
                                to={`/blogs/${blog.id}`}
                                className="no-underline d-flex align-items-center text-3xl mr-4 hover:scale-150"
                                    style={{ color: 'var(--color3)' }}
                            >
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                    ))
                )}
          
          
        </div>
        <br/>
    </div>
  )
}

export default BlogSection
