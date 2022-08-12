import React from 'react'
import './Blog.css'

const Blog = ({ imageUrl, title, description}) => {
  return (
    <div className='blogs'>
        <img src={imageUrl} alt="images" className='images'/>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Blog