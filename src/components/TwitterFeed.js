import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton} from 'react-twitter-embed';


export const TwitterFeed = () => {
    return (
        <div className='twitter-feed'>
            <h2> Twitter Feed: </h2>
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
