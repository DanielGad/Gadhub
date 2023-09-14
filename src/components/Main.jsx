import React from 'react';
import '../assets/styles/Main.css';
import me from '../assets/images/IMG_20220107_234816_090-removebg-preview.png';
import { useEffect } from 'react';

const Main = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="main">
      <div className="main-hid">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi expedita facere reiciendis deserunt iusto, at corporis quasi eius impedit deleniti veniam tenetur nisi iure repudiandae. Illum ex nam sit!
      </div>
      <div className='main'>
            <div className="con1">
              <h3>Hello World! I'm</h3>
              <h1>Daniel Oluwagbenga Adeyemi</h1>
              <img src={me} alt="Daniel Gad" className='Daniel' />
              <h2>Web and Graphics Designer</h2>
            </div>
        </div>
    </section>
    
  )
}

export default Main