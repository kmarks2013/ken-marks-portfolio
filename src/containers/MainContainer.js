import React from 'react'
import { AboutMe } from '../components/AboutMe'
import { Weblinks } from '../components/Weblinks'
import { TwitterFeed } from '../components/TwitterFeed'

export const MainContainer = () => {
    return (
        <div>
            <AboutMe/>
            <TwitterFeed />
            <Weblinks />
        </div>
    )
}
