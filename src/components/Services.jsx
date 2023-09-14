import React from 'react';
import '../assets/styles/Services.css';
import img1 from '../assets/images/New-Project-1.jpg';
import img2 from '../assets/images/Graphic-Designing1.jpg';
import img3 from '../assets/images/101_ux_vs_ui_illustration_blog.png';

const Services = () => {
  return (
    <section id='service'>
      <div className="service-hid">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi expedita facere reiciendis deserunt iusto, at corporis quasi eius impedit deleniti veniam tenetur nisi iure repudiandae. Illum ex nam sit!
      </div>
      <div className='service'>
          <h1>SERVICES</h1>
          <div className="ser-a">
            <div className="ser-a-a">
              <h3 style={{textAlign: 'center'}}>Web Design and Development</h3>
              <img src={img1} alt="Web Design and Development" style={{width: '100%'}}/>
              <p>
              Transforming ideas into functional and visually appealing websites is my specialty. Whether you're starting from scratch or looking to revamp your online presence, I offer tailored web design and development solutions that cater to your brand and user needs. From responsive layouts to seamless user experiences, I work diligently to bring your vision to life.
              </p>
              <p>
                <li>
                <b>Responsive Design</b> - Crafted to look stunning across all devices, your website will provide a consistent experience for users on desktop, tablet, and mobile.
                </li>
                <li>
                <b>User-Centric Approach</b> -  I prioritize user experience, ensuring intuitive navigation and engaging interactions to keep visitors coming back.
                </li>
                <li>
                <b>Custom Development</b> - Leveraging HTML, CSS, and JavaScript, I build unique and functional websites that align with your objectives.
                </li>
              </p>
              
            </div>
            <div className="ser-a-b">
            <h3 style={{textAlign: 'center'}}>Graphic Design</h3>
            <img src={img2} alt="Web Design and Development" style={{width: '100%'}}/>
              <p>
              Captivating visuals are the heart of effective communication. My graphic design services encompass a wide range of creative solutions that enhance your brand identity and messaging. From logos to marketing collateral, I craft designs that resonate with your target audience.
              </p>
              <p>
                <li>
                  <b>Print Materials</b> - Develop a strong brand identity with a memorable logo, color palette, and typography that reflects your mission.
                </li>
                <li>
                  <b>Branding</b> - From business cards to brochures, I create print-ready designs that convey professionalism and creativity.
                </li>
                <li>
                  <b>Digital Assets</b> - Engage your audience online with eye-catching social media graphics, banners, and digital advertisements.
                </li>
              </p>
            </div>
            <div className="ser-a-c">
            <h3 style={{textAlign: 'center'}}>UI/UX Design</h3>
            <img src={img3} alt="Web Design and Development" style={{width: '100%'}}/>
              <p>
              A harmonious blend of aesthetics and functionality is crucial for successful digital products. I specialize in creating intuitive user interfaces and seamless user experiences that leave a lasting impression.
              </p>
              <p>
                <li>
                <b>Wireframing and Prototyping</b> - I visualize the user journey through wireframes and interactive prototypes, ensuring a clear layout before development.
                </li>
                <li>
                <b>User-Centered Approach</b> - Every design decision is guided by user research and behavior analysis to ensure maximum usability and engagement.
                </li>
                <li>
                <b>Iterative Design</b> - I believe in constant improvement. I iterate on designs based on feedback and testing to optimize the user experience.
                </li>
              </p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Services