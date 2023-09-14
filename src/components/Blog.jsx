import React from 'react';
import '../assets/styles/Blog.css';
import BlogsFile from '../assets/data.json';

const Blog = () => {
  return (
    <section id='blog'>
      <div className="blog-hid">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi expedita facere reiciendis deserunt iusto, at corporis quasi eius impedit deleniti veniam tenetur nisi iure repudiandae. Illum ex nam sit!
      </div>
      <div className='blog'>
        <h1>MY BLOGS!</h1>
        </div>
        <div className="cont">
          <div className="blog-contents">
          {BlogsFile.blogs.map((blog) => (
          <div className="blog-items" key={blog.id}>
            <img src={blog.poster} alt="BlogImage" />
            <h3>{blog.title}</h3>
            <p>Written by {blog.author}</p>
            <button>View</button>
          </div>
        ))}
        </div>
        </div>
        
        
       
      
    </section>
  )
}

export default Blog