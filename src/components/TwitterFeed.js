import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton} from 'react-twitter-embed';


export const TwitterFeed = () => {
    return (
        <div id="twitter" className='twitter-feed'>
            <h1 className='section-head'> Twitter Feed: </h1>
            <div className='timeline'>
            <TwitterTimelineEmbed
                sourceType="widget"
                screenName="kmarks2013"
                options={{height: 400}}
                theme="dark"
                noScrollbar
                noHeader
            />
            </div>
            <TwitterFollowButton screenName="kmarks2013"/>
        </div>
    )
}
