import React from 'react'

const LeftArrow = ({goToPrevSlide}) => {
    return (
        <div className='backArrow' onClick={goToPrevSlide}>
            <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
        </div>
    )
}

export default LeftArrow