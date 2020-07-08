import React, {useState, useEffect}  from 'react'
import BlogCard from './BlogCard'

export const Blogs = () => {
    const [requestFailed, setRequestFailed] = useState(false)
    const [active, setActive] = useState(0)
    const [mediumPosts, setMediumPosts] = useState([])

    const data = [{    
        title: 'Turn the music up!',
        description: '',
        },
        {
        title: 'Choose your music',
        description: 'The world is full of music; why should you have to listen to music someone else chose?',
        },
        {
        title: 'Unlimited, streaming, ad-free',
        description: 'No arbitrary limits. No distractions.',
        },
        {
        title: 'Mobile enabled',
        description: 'Listen to your music on the go. This streaming service is available on all mobile platforms.',
    }]

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
