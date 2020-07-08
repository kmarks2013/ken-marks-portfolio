import React from 'react'
import { AboutMe } from '../components/AboutMe'
import { TwitterFeed } from '../components/TwitterFeed'
import { Weblinks } from '../components/Weblinks'

export const MainContainer = () => {
    return (
        <div>
            <AboutMe/>
            <TwitterFeed />
            <Weblinks />
        </div>
    )
}
