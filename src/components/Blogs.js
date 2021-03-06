import React, {useState, useEffect}  from 'react'
import BlogCard from './BlogCard'

export const Blogs = ({blogList}) => {
    // console.log(blogList)

    const renderBlogs = blogList.map(blog =>
       <BlogCard blog={blog}/>
        )

    return (
        <div id="technical-writings" className='bloglist'>
            {renderBlogs}
        </div>
    )
}
