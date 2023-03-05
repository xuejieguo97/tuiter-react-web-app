import React from "react";
import postArray from "./posts.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postArray.map(post =>
                    <PostSummaryItem key={post._id} post={post}/>)
            }

        </ul>
    );
};

export default PostSummaryList;
