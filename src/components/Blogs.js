import React, {useState, useEffect}  from 'react'
import BlogCard from './BlogCard'

export const Blogs = () => {
    const [mediumPosts, setMediumPosts] = useState([])

    const apiFetch = () => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kmarks2013")
            .then(response => {
                if (!response.ok) {
                    throw Error("Network request failed")
                }
                return response
                })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.items)
                const res = data.items
                const posts = res.filter(item => item.categories.length > 0)
                setMediumPosts(posts)
                setRequestFailed(true)
            })
    }

    useEffect(() => {
        apiFetch()
    })



    return (
        <div>
            <h3>Blogs</h3>
        </div>
    )
}
