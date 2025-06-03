import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <h1>A little more about me...</h1>
      <div className='about-content'>
      <h2>Education</h2>
        <div className='education'>
          School: The University of Texas at Austin, December 2025 <br/>
          Major: Computer Science (BS) <br/>
          Minor: Business <br/>
        </div>
        <div className='skills'>
          <h2>Skills</h2>
          <ul>
            <li>
              Languages: Java, Python, C, JavaScript, HTML and CSS, SQL 
            </li>
            <li>
              Tools/Frameworks: Git, React, AWS, REST APIs, Pandas, Scikit-learn, Docker, Figma, Firebase 
            </li>
          </ul>
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
  )
}

export default AboutPage
