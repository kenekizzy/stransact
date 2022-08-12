import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import Blog from './Component/Blog';

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {

    const getBlogs = async () => {
      await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per page=40&context=embed").then(res => setBlogs(res.data))
    }

    getBlogs()
  }, [])
  console.log(blogs)
  return (
    <div className="App">
      <h2>Blog Posts</h2>
      {blogs.map(blog => (
        <Blog imageUrl={blog.jetpack_featured_media_url} title={blog.seoTitle} description={blog.seoDescription}/>
      ))}
    </div>
  );
}

export default App;
