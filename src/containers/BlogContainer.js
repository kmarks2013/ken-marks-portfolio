import React, {useState, useEffect}  from 'react'
import { Blogs } from '../components/Blogs'

export const BlogContainer = () => {
    const [mediumPosts, setMediumPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
        
    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kmarks2013")
            .then(res => res.json())
            .then( data => {
                let posts = data.items.filter(article => article.categories.length > 0)
                setMediumPosts(posts)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])


    const finalData = mediumPosts.slice(0, 6);

    return (
        <div id="blogs" className="container mt-3">
          <h1 className="ui horizontal header divider mt-5 section-head">
            Blog Posts
          </h1>
          {isLoading && <p>Fetching data from Medium!</p>}

          <Blogs blogList={finalData}/>
        </div>
      );
}
