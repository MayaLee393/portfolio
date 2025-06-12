import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <h1 style={{fontFamily:' "VT323", monospace'}} className='text-6xl mt-20'>About Me</h1>

    <div className='about-page'>
      <div className='about-content container-fluid d-flex justify-content-center align-items-center'>
          <div className="row w-100">

      <div className='col-12 col-md-3 d-flex flex-column align-items-center'>
        <div >
              <img 
                src={`${process.env.PUBLIC_URL}/MayaLee.jpeg`} 
                alt="Profile Picture" 
                className="picture w-32 md:w-64 lg:w-96 xl:w-112 h-auto rounded"
              />
        </div>
      </div>
      <div className='col-12 col-md-9 d-flex flex-column align-items-left mt-2'>
        <div>
          <div className='education'>
            <h2>Education</h2>
            <ul className='list-none'>
              <li>
                  School: The University of Texas at Austin, December 2025
              </li>
              <li>
                  Major: Computer Science (BS)
              </li>
              <li>
                Minor: Business 
              </li>
            </ul>
          </div>
          <div className='skills'>
            <h2>Skills</h2>
            <ul className='list-none'>
              <li>
                Languages: Java, Python, C, JavaScript, HTML and CSS, SQL 
              </li>
              <li>
                Tools/Frameworks: Git, React, AWS, REST APIs, Pandas, Scikit-learn, Docker, Figma, Firebase 
              </li>
              <li>
                Interests: painting, drawing, paper crafting, and recently, pixel art
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      </div>
      </div>
      <div className='links-container flex justify-center gap-4 p-4'>
        <Link to="https://www.linkedin.com/in/maya-lee-98a91728a/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin className='text-5xl icon' />
        </Link>
        <Link to="https://github.com/MayaLee393" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className='text-5xl icon' />
        </Link>
        <a
          href="/portfolio/resume.pdf" 
          target="_blank"  
          rel="noopener noreferrer" 
        >
          <button className="btn">
            My Resume
          </button>
        </a>
      </div>
          

    </div>
    </>
  )
}

export default AboutPage
