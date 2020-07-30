import React from 'react'
import SectionHead from '../components/SectionHead'
// import { Link} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const NavBar = () => {
    return (
        <div className="nav">
            {/* <h1 className="nav-header">Kenny Marks</h1> */}
            <SectionHead/>
            <div className='nav-body'>
                <a href='#about'>
                    <p>About</p>
                </a>
                <a href='#folio'>
                    <p>Portfolio</p>
                </a>
                <a href='#technical-writings'>
                    <p>Blog</p>
                </a>
                <a href="#twitter" >
                    <p>Twitter</p>
                </a>
                <a href='#contact'>
                    <p>Contact</p>
                </a>
            </div> 
        </div>
    )
}

export default NavBar
