import React from 'react'

const IndexPage = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
    <div className="row w-100">
      {/* Left Column */}
      <div className="index-left col-12 col-md-6 d-flex flex-column align-items-center">
        <img 
          src={`${process.env.PUBLIC_URL}/MayaLee.JPEG`} 
          alt="Profile Picture" 
          className="picture w-64 md:w-80 lg:w-96 xl:w-112 h-auto rounded"
        />
        <h1 className="name mt-4 text-4xl font-script animate-typing">Hi, I'm Maya Lee!</h1>
      </div>

    {/* Right Column */}
    <div className="col-12 col-md-6 d-flex align-items-center">
      <div className='desc-container'>
        <div className='paper solid-lines'>
        <p className="description mt-4">
          &emsp;I am a junior Computer Science student at The University of Texas at Austin. 
          I have always had a strong passion for creative activities, such as building and 
          painting, and that translates into my computer science work. 
          <br></br>&emsp;As a fun task to keep myself busy, I like to create useful websites and developing 
          programs that automate tasks I find repetitive or tedious.
           My curiousity drives me to explore new technologies
          to learn to keep myself engaged in fun projects.
        </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default IndexPage
