import React, {useState, useEffect} from 'react'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import ProjectSlide from './ProjectSlide'


const Carousel = ({data}) => {
    const [current, setCurrent] = useState(0)
    const [length, setLength] = useState()

    useEffect(() => {
        setLength(data.length)
    }, [])
    
    const goToNextSlide = () => {
        let index = current
        let dataLength = length
        if (index ===dataLength - 1){ 
            index = 0
        } else{
            index ++
        }
        setCurrent(index)        
    }
    
    const goToPrevSlide = () => {
        let index = current
        let dataLength = length
        if (index < 1){
            index = dataLength - 1
        } else {
            index --
        }
        setCurrent(index)
    }
    
    return (
        <div className="carousel">
            <div>
                <LeftArrow goToPrevSlide={() => goToPrevSlide()}/>
            </div>
            <div>
                <ProjectSlide data={data} index={current} />
            </div>
            <div>  
                <RightArrow goToNextSlide={() => goToNextSlide()}/>
            </div>
            
        </div>
    )
}

export default Carousel
