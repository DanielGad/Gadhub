import React from 'react';
import '../assets/styles/Projects.css';
import img11 from '../assets/images/pro1.jpg';
import img22 from '../assets/images/pro2.jpg';
import img33 from '../assets/images/pro3.jpg';
import img44 from '../assets/images/pro11.jpg';
import img55 from '../assets/images/pro5.jpg';
import img66 from '../assets/images/pro6.jpg';
import img77 from '../assets/images/pro7.jpg';
import img88 from '../assets/images/pro8.jpg';
import img99 from '../assets/images/pro9.jpg';

const Projects = () => {
  const ScreenShots = [
    {img: img11},
    {img: img22},
    {img: img66},
    {img: img77},
    {img: img88},
    {img: img99},
    {img: img33},
    {img: img55},
    {img: img44},

   
  ]
      
  
  return (
    <section id='project'>
      <div className="project-hid">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita quis doloribus velit doloremque pariatur nulla? Illum consequatur perferendis, sapiente alias ab consectetur? Aut, perspiciatis dolore? Asperiores a ducimus perspiciatis.
      </div>
      <div className="prooo"></div>
      <div className='project'>
        <h1>MY PROJECTS</h1>
        <div className="pro-a">
          <h3>Project Title: My General Projects</h3>
        <b>Overview:</b>
        <p>This is a general project, I had the incredible opportunity to fuse my front-end development prowess with my graphic design skills. The goal was to swiftly keep myself on track in my Journey. Through meticulous design and code, I strived to craft an experience that seamlessly blends aesthetics and functionality.</p>
        <b>Role:</b>
        <p>I took on the role of both the front-end developer and graphic designer, allowing me to fully realize the project's vision from concept to execution.</p>
        <b>Tools and Technologies Used:</b>
       <p>
       <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>CorelDraw</li>
        <li>Adobe PhotoShop</li>
        <li>Adobe Illustrator</li>
       </p>
       <b>Design Process:</b>
       <p>I began by delving into in-depth research to understand the target audience and design trends relevant to the project's scope. After defining a clear design direction, I meticulously created wireframes and mockups, ensuring each element resonated with the intended user experience.</p>
       <b>Development Highlights:</b>
       <p>The coding journey involved translating the intricate design into a functional website. I paid meticulous attention to responsiveness and cross-browser compatibility, using HTML, CSS, and JavaScript to bring the design to life. Interactive features, smooth animations, and a user-friendly interface were paramount in creating an engaging digital experience.</p>
       <b>Challenges Faced:</b>
       <p>No project is without its challenges. Throughout this endeavor, I encountered technical hudles, design constraints, Scope creep, Responsive Designs, Content Integration e.t.c. However, overcoming these challenges became an opportunity for growth and innovation.</p>
       <b>Outcome:</b>
       <p>The end result is a Responsive Web design, engaging web app, Dynamic Portfolio, Creative designs that successfully addresses what have been intended to work upon.</p>
       <b>Key Takeaways:</b>
       <p>This project allowed me to further refine my skills in both front-end development and graphic design. The successful fusion of these disciplines highlights my ability to create cohesive and impactful digital experiences.</p>
       <h3>Here are Some Screenshots</h3>
       <div className="shots">
       {ScreenShots.map((image, index) => (
        <img key={index} src={image.img} alt={`Screenshot ${index + 1}`} className='imggg'/>
        ))}
       </div>

        </div>
        
      </div>
    </section>
  )
}

export default Projects