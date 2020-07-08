import React from 'react'
import { AboutMe } from '../components/AboutMe'
import { TwitterFeed } from '../components/TwitterFeed'
import { Weblinks } from '../components/Weblinks'
import { Portfolio } from '../components/Portfolio'

export const MainContainer = () => {
    return (
        <div>
            <AboutMe/>
            <Portfolio />
            <TwitterFeed />
            <Weblinks />
        </div>
    )
}
