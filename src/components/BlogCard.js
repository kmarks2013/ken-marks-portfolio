import React from 'react'


export default function BlogCard({active, mediumPosts}) {
    const tagToText = (node) => {
        let tag = document.createElement('div')
        tag.innerHTML = node
        node = tag.innerText
        return node
      }

      const shortenText = (text,startingPoint ,maxLength) => {
        return text.length > maxLength?
        text.slice(startingPoint, maxLength):
        text
      }

    return (
        <section>
            {
                mediumPosts.map((s, index) =>
                    <div className={index === active ? 'active' : 'inactive'} key={index}>
                        <img src={s.thumbnail} style={{width:'50px'}}/>
                        <div>
                        <h5 className='card-title post-title'>{s.title}</h5>
                        {/* <p>{s.description}</p> */}
                        <p className='card-text post-preview'> {'..' + `${shortenText(tagToText(s.description), 60, 200)}` + '...'}</p>
                        <a href={s.link} className="btn btn-link-grey">Read this article on Medium.com</a>
                        </div>
                    </div>
                )
            }
       </section>
    )
}