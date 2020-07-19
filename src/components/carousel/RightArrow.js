import React from 'react'

const RightArrow = ({goToNextSlide}) => {
    return (
        <div className='forwardArrow' onClick={goToNextSlide}>
            <i className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
        </div>
    )
}

export default RightArrow
