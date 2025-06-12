import React from 'react'
import ProjectSection from '../components/ProjectSection'
import BlogSection from '../components/BlogSection';
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';


const IndexPage = () => {

  return (
    <div className='App'>


        <div className="main-section container-fluid d-flex justify-content-center align-items-center">
          <div className="row w-100">
            {/* Left Column */}
            <div className="index-left col-12 col-md-4 d-flex flex-column align-items-center">
              <img 
                src={`${process.env.PUBLIC_URL}/lilguy.GIF`} 
                alt="Profile Picture" 
                className="picture w-32 md:w-32 lg:w-64 xl:w-112 h-auto rounded"
              />
            </div>

            {/* Right Column */}
            <div className="col-12 col-md-8 d-flex align-items-center">
            
              <div className='desc-container '>
              <h1 className="name mt-4 text-4xl font-script animate-typing">Hi, I'm Maya Lee!</h1>

                <div className='paper solid-lines '>
                  <p className="description mt-4 ">
                    I am a Computer Science student at The University of Texas at Austin with 
                    a focus on software engineering and web development.
                    I have always had a strong passion for creative activities, such as building and 
                    painting, which translate into my projects. 
                  </p>
                </div>
              </div>
            </div>

            <div className='w-full flex justify-center items-center gap-4 mt-4'>
              <Link to="https://www.linkedin.com/in/maya-lee-98a91728a/" target="_blank" rel="noopener noreferrer">
                <CiLinkedin className='text-5xl icon' />
              </Link>
              <Link to="https://github.com/MayaLee393" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare className='text-5xl icon' />
              </Link>
            </div>

          </div>
        </div>
        



        
        <hr className='line w-64 md:w-96 lg:w-112 xl:w-112 h-1 mx-auto mt-10'></hr>
        <ProjectSection/>
        <hr className='line w-64 md:w-96 lg:w-112 xl:w-112 h-1 mx-auto mt-4'></hr>
        <BlogSection/>
      <br/>
    </div>

  )
}

export default IndexPage
