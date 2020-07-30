import React from 'react'

const ProjectSlide = ({data, index}) => {
    console.log(data.length)
    return (
        <div className='project-content'>
            {
                data.map((project, projectIndex) => 
                    <div 
                        className={projectIndex === index ? 'active' : 'inactive'}
                        key={projectIndex}
                    >

                        {console.log(project.title)}
                        <h2>{project.title}</h2>
                        <h6>{project.description}</h6>
                        <ul>
                            {project.details.map(detail => {
                                return <li>{detail}</li>
                            })}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default ProjectSlide
