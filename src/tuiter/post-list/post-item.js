import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment, faHeart} from "@fortawesome/free-regular-svg-icons";
import {faRetweet, faUpload, faCircleCheck, faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import RetweetItem from "./retweet-item";

const PostItem = (
    {
        post = {
            "userName": "Elon Musk",
            "text": "We might need a different name, as this is basically just Starlink with roaming capability. so you can take your terminal anywhere.",
            "profile": "elon_musk.jpeg",
            "handle": "elonmusk",
            "time": "15h",
            "comment": "5,346",
            "retweet": "1,601",
            "likes": "19.2k",
            "image": "countdown.jpeg",
            "retweeted_tuiter": {
                "userName": "SpaceX",
                "text": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on am as-needed basis anywhere Starlink provides active coverage -> startlink.com/rv",
                "profile": "spaceX.jpeg",
                "handle": "SpaceX",
                "time": "16h"
            }
        }
    }
) => {

    const retweet = post.retweeted_tuiter === "" ? "" : <RetweetItem post={post.retweeted_tuiter}/>;
    const image = post.image === "" ? "" : <img className="border-bottom border-light wd-border-rounded-corner mt-2" src={`/images/${post.image}`} alt="post" width="100%" height="330"/>;

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img src={`/images/${post.profile}`} className="rounded-circle" height="48" width="48"/>
                </div>

                <div className="col-11">
                    <div className="ps-4">
                        <div className="row">
                            <div className="col-11">
                                <span className="fw-bolder">{post.userName}</span> <FontAwesomeIcon icon={faCircleCheck} className="text-primary"/>  <span className="text-muted">@{post.handle} &middot; {post.time}</span>
                            </div>
                            <div className="col-1 d-flex flex-row-reverse text-dark">
                                <FontAwesomeIcon icon={faEllipsisH}/>
                            </div>
                        </div>
                        {post.text}

                        {image}
                        {retweet}

                        <div className="row text-muted mt-2">
                            <div className="col-3">
                                <FontAwesomeIcon icon={faComment} /><span className="ps-2">{post.comment}</span>
                            </div>
                            <div className="col-3">
                                <FontAwesomeIcon icon={faRetweet} /><span className="ps-2">{post.retweet}</span>
                            </div>
                            <div className="col-3">
                                <FontAwesomeIcon icon={faHeart} /><span className="ps-2">{post.likes}</span>
                            </div>
                            <div className="col-3">
                                <FontAwesomeIcon icon={faUpload} />
                            </div>
                        </div>

                        <p className="text-primary pt-3 pb-3">Show this thread</p>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;