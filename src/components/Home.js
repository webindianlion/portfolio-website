import React from 'react'

function Home() {
  return (
    <div className="condiv home pt-0" style={{maxWidth:'800px'}}>
      <img src="/images/vinod_avtr.png" alt="ProfilePic" className="profilepic" />
      <h1 className='text-start mb-2 border-top pt-4'>Front-End Web Application Developer</h1>
      <h3 className='text-primary text-start mb-4'>(Vinod Kumar)</h3>
      <p className='text-black-50 text-start'>I am Frontend Web Application Developer with the latest Technologies skills. Good understanding of the Full-Stack Development life-cycle. 
      More than 7 Years of experience in Frontend Development with an IPO listed company (Affle India Ltd.). I am awarding winning employ @ Affle in 2109 for work excellence.</p>
      
      <div className='border-top border-bottom my-5 py-5'>
      <h3 className='text-primary text-start mb-4'>Projects Portfolio Link:</h3>

      <p className='text-black-50'>Here is list of projects I worked on  <a href='https://webindianlion.github.io/project-portfolio' target="_blank" rel='noreferrer'>Click Here</a> </p>

      <h3 className='text-primary text-start mb-4 border-top mt-5 pt-5'>Slills:</h3>
      <ul style={{ columnCount:'2'}}>
        <li>HTML</li>
        <li>CSS</li>
        <li>BOOTSTRAP</li>
        <li>JAVASCRIPT</li>
        <li>JQUERY</li>
        <li>JSON</li>
        <li>WORDPRESS</li>
        <li>REACT JS</li>
        <li>REDUX</li>
        <li>GIT</li>
        <li>TypeScript</li>
        <li>ES6</li>
        <li>SASS</li>
        <li>NodeJS</li>
        <li>MySQL</li>
        <li>MongoDB</li>
      </ul>
      
      </div>

      <div className="social">
      
      <a href="https://github.com/webindianlion/" target="_blank" rel="noreferrer">
      <i class="fab fa-github" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/inwebservice/" target="_blank" rel="noreferrer">
      <i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
      </div>

    </div>
  )
}

export default Home