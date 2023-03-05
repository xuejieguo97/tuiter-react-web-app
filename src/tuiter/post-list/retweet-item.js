import React from "react";


const RetweetItem = (
    {
        post = {
            "userName": "SpaceX",
            "text": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on am as-needed basis anywhere Starlink provides active coverage -> startlink.com/rv",
            "profile": "spaceX.jpeg",
            "handle": "SpaceX",
            "time": "16h"
        }
    }
) => {
    return (

            <div className="mt-3 mb-3 p-3 border wd-border-rounded-corner">
                <img src={`/images/${post.profile}`} className="rounded-circle" alt="post-profile" height="20" width="20"/>
                <span className="fw-bolder ps-1">{post.userName}</span> <span className="text-muted">@{post.handle} &middot; {post.time}</span><br/>
                {post.text}
            </div>
    )
}

export default RetweetItem;