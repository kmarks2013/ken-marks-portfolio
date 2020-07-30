import React from 'react'
import {AboutMe} from '../components/AboutMe'
import { BlogContainer } from './BlogContainer'
import { Portfolio } from './Portfolio'
import { TwitterFeed } from '../components/TwitterFeed'
import { Weblinks } from '../components/Weblinks'

function ContentContainer() {
    return (
        <div>
            <AboutMe/>
            <BlogContainer/>

        </div>
    )
}

export default ContentContainer
