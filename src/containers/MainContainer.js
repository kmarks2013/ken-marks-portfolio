import React from 'react'
import { AboutMe } from '../components/AboutMe'
import { Portfolio } from '../components/Portfolio'
import { Blogs } from '../components/Blogs'
import { TwitterFeed } from '../components/TwitterFeed'
import { Weblinks } from '../components/Weblinks'
import {BlogCarousel} from './BlogCarousel'

export const MainContainer = () => {
    return (
        <div>
            <AboutMe />
            {/* <Portfolio /> */}
            {/* <Blogs /> */}
            <BlogCarousel />
            <TwitterFeed />
            <Weblinks />
        </div>
    )
}
