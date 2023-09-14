import React from 'react';
import '../assets/styles/Contact.css';
import img from '../assets/images/21.jpg';
import { useState } from 'react';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [body, setBody] = useState('');
  const [country, setCountry] = useState('');


  return (
      <section id='contact'>
        <div className="contact-hid">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi expedita facere reiciendis deserunt iusto, at corporis quasi eius impedit deleniti veniam tenetur nisi iure repudiandae. Illum ex nam sit!
      </div>
        <div className="contact-con">
          <div className="con-img">
              <img src={img} alt="Contact Img" />
            <div className="con-con">
            <h3>You can reach me through the following means...</h3>
            <form onSubmit="">
          <label>Name:</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <label>Email:</label>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <label>Country:</label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="Afganistan">Afganistan</option>
            <option value="Ghana">Ghana</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Togo">Togo</option>
            <option value="United State">United State</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niger">Niger</option>
            <option value="China">China</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="Korean">Korean</option>
            <option value="British">British</option>
            <option value="Congo">Congo</option>
          </select>
          <label>Phone Number:</label>
          <input
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)} />
          <label>Your Message:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <button>Submit</button>
        </form>
          </div>
          <div className="social">
            <a href="http://facebook.com/adeyemidanielgad"><h2 className='a'>f</h2></a>
            <a href="http://twitter.com/Danieladegad"><h2 className='b'>t</h2></a>
            <a href="http://www.linkedin.com/in/adeyemi-daniel-gad/"><h2 className='c'>In</h2></a>
            <a href="http://instagram.com/adeyemi-daniel-gad"><h2 className='d'>IG</h2></a>
          </div>
          </div>

        </div>
      </section>
  )
}

export default Contact