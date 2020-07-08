import React, {useState, useEffect}  from 'react'
import BlogCard from '../components/BlogCard'
import LeftArrow from '../components/LeftArrow'
import RightArrow from '../components/RightArrow'
import data from '../data'

export const BlogCarousel = () => {
    const [active, setActive] = useState(0)
    const [dataLength, setDataLength] = useState(data.length)
    const [mediumPosts, setMediumPosts] = useState([])

    // console.log(dataLength)
    const goToPrevSlide = () => {
        let index = active
        let length = dataLength

        if (index < 1){
            index = length - 1
        } else {
            index--
        }
        setActive(index)
        console.log(active)
    }

    const goToNextSlide = () => {
        let index = active
        let length = dataLength

        if (index === length - 1){
            index = 0
        } else {
            index++
        }

        setActive(index)
        console.log(active)
    }

    const apiFetch = () => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kmarks2013")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.items)
                const res = data.items
                const posts = res.filter(item => item.categories.length > 0)
                setMediumPosts(posts)
            })
    }

    useEffect(() => {
        apiFetch()
    })



    return (
        <div>
            
        </div>
    )
}
