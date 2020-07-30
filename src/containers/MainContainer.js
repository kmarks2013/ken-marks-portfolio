import React from 'react'
import { AboutMe } from '../components/AboutMe'
import { Portfolio } from './Portfolio'
import { Blogs } from '../components/Blogs'
import { TwitterFeed } from '../components/TwitterFeed'
import { Weblinks } from '../components/Weblinks'
import { BlogContainer } from './BlogContainer'
import NavBar from './NavBar'

export const MainContainer = () => {
    return (
        <div>
            <NavBar/>
            <AboutMe />
            <Portfolio />
            <BlogContainer/>
            <TwitterFeed />
            <Weblinks />
        </div>
    )
}
