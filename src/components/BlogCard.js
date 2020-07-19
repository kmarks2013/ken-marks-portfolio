import React from 'react'
import {BlogImage} from './blogcard/BlogImage'
const moment = require('moment')

export default function BlogCard({blog}) {
    // console.log(blog)

    return (
        <section className='blog-card' >
            <BlogImage src={blog.thumbnail}/>
            <a className='blog-title' href={blog.link}> {blog.title}</a>
            <p>
                    Published:{" "}
                    {moment(blog.pubDate).format(" MMMM Do YYYY")}
            </p>
            {/* {
                mediumPosts.map((s, index) =>
                    <div className={index === active ? 'active' : 'inactive'} key={index}>
                        <img src={s.thumbnail} style={{width:'50px'}}/>
                        <div>
                        <h5 className='card-title post-title'>{s.title}</h5>
                        <p>{s.description}</p>
                        <p className='card-text post-preview'> {'..' + `${shortenText(tagToText(s.description), 60, 200)}` + '...'}</p>
                        <a href={s.link} className="btn btn-link-grey">Read this article on Medium.com</a>
                        </div>
                    </div>
                )
            } */}
       </section>
    )
}