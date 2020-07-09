import React, {useState, useEffect}  from 'react'
import BlogCard from './BlogCard'

export const Blogs = () => {
    const [mediumPosts, setMediumPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
        
    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kmarks2013")
            .then(res => res.json())
            .then( data => {
                setMediumPosts(data.items)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    console.log(mediumPosts)


    return (
        <div>
            <h3>Blogs</h3>
        </div>
    )
}
