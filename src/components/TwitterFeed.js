import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton} from 'react-twitter-embed';


export const TwitterFeed = () => {
    return (
        <div style={{width: 400, height:400, margin: 20}}>
            <h2> Twitter Feed: </h2>
            <TwitterTimelineEmbed
                sourceType="widget"
                screenName="kmarks2013"
                options={{height: 400}}
                noHeader
            />
            <TwitterFollowButton screenName="kmarks2013"/>
        </div>
    )
}
