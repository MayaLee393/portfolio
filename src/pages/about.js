import React from 'react'

const AboutPage = () => {
  return (
    <div className='about-page'>
      <h1>A little more about me...</h1>
      <div className='about-content'>
        <div className='education'>
          School: The University of Texas at Austin, December 2025 <br/>
          Major: Computer Science (BS) <br/>
          Minor: Business <br/>
        </div>
        <div className='skills'>
          Skills:
          <ul>
            <li>Java</li>
            <li>HTML/CSS</li>
            <li>Javascript React</li>
            <li>Python</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
      <div className='links-container flex justify-center gap-4 p-4'>
      <a href="https://www.linkedin.com/in/maya-lee-98a91728a/"
            target="_blank" 
            rel="noopener noreferrer" 
        >
        <button className="btn">
          LinkedIn
        </button>
        </a>
        <a href="https://github.com/MayaLee393"
            target="_blank" 
            rel="noopener noreferrer"
        >
        <button className="btn">
          Github
        </button>
        </a>
        <a
          href="/portfolio/resume.pdf"  // Path to the PDF in the public folder
          target="_blank"  // Open in a new tab
          rel="noopener noreferrer" // For security reasons
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
