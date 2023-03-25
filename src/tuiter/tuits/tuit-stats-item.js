import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment, faHeart, faShareFromSquare} from "@fortawesome/free-regular-svg-icons";
import {faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {useDispatch} from "react-redux";
import {dislikeTuit, likeTuit} from "./tuits-reducer";

const  TuitStats = (
    {
        post = {
            _id: 123,
            topic: "Space",
            userName: "SpaceX",
            title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            time: "2h",
            image: "spaceX.jpeg",
            liked: true,
            replies: 123,
            retuits: 432,
            likes: 2345,
            handle: "@spacex",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const likeHandler = (post) => {
        dispatch(likeTuit(post))
    }
    const dislikeHandler = (post) => {
        dispatch(dislikeTuit(post))
    }

    return(
        <div className="row">
            <div className="col-3">
                <FontAwesomeIcon icon={faComment} className="pe-2"/>
                {post.replies}
            </div>
            <div className="col-3">
                <FontAwesomeIcon icon={faComment} className="pe-2"/>
                {post.retuits}
            </div>
            <div className="col-3">
                {post.liked && <FontAwesomeIcon icon={solidHeart} className="text-danger pe-2" onClick={() => dislikeHandler(post)}/>}
                {!post.liked && <FontAwesomeIcon icon={faHeart} className="pe-2" onClick={() => likeHandler(post)}/>}
                {post.likes}
            </div>
            <div className="col-3">
                <FontAwesomeIcon icon={faShareFromSquare} className="pe-2"/>
            </div>
        </div>
    );
};

export default TuitStats;
