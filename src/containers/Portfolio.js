import React, {useState} from 'react'
import Carousel from '../components/carousel/Carousel'

const PROJECTS = [
    {
        title: "Total Recall",
        description: "Total Recall is an arcade style memory game. Users can compete to have their score in the top 10 ten.",
        details:[
            "Implemented an algorithm through JavaScript to calculate scores based on the moves, time, and consecutive pairs.",
            "Utilized SQL to arrange the scores table in descending order to create a top 10 list.",
            "Created an interactive user interface using Responsive Css to fit common screen sizes."
        ]
    },
    {
        title: "League of Loadouts",
        description: "A League of Legends champion loadout builder for players to design a build around their playstyle.",
        details:[
            "Cached static information about in game Champions and Items using RestClient to make API calls.",
            "Created an interactive user interface applying React, Redux, React-Router, React-Hover, and custom CSS.",
            "Employed custom routes and seraizlers in a Rails API to create dynamic end-points for front end use."
        ]
    },
    {
        title: "The Doctor Regens",
        description: "A Doctor Who fan forum for Whovians who want to discuss their favorite Doctors from the BBC series.",
        details:[
            "Developed a Rails API with endpoints for users, comments, and iterations of the Doctor.",
            "Implemented authorization and authentication using Bcrypt, JWT, and local storage.",
            "Designed a user interface utilizing React and CSS."
        ]
    },
    {
        title: "Virtual Board",
        description: "A productivity application, by providing users a virtual white board space to brainstorm, list out ideas, and draw out concepts.",
        details: [
            "Developed a Rails API with endpoints for users, whiteboards, thoughts, a to-do list, quotes, and doodles.",
            "Created a user interface utilizing object orientated JavaScript and CSS to design features and functionality."

        ]
    }
]

export const Portfolio = () => {
    const [current, setCurrent] = useState(0)
    console.log(PROJECTS)
    return (
        <div id='folio' className='portfolio'>
            <h1 className='section-head'>Portfolio</h1>
            <Carousel data={PROJECTS}/>
        </div>
    )
}
