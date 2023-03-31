import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment, faShareFromSquare, faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import {faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {faRetweet} from "@fortawesome/free-solid-svg-icons";

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
            dislikes: 0,
            handle: "@spacex",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();

    return(
        <div className="row">
            <div className="col-2">
                <FontAwesomeIcon icon={faComment} className="pe-1"/>
                {post.replies}
            </div>
            <div className="col-2">
                <FontAwesomeIcon icon={faRetweet} className="pe-1"/>
                {post.retuits}
            </div>
            <div className="col-2">
                <FontAwesomeIcon icon={solidHeart} className="text-danger pe-1" onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    likes: post.likes + 1
                }))}/>
                {post.likes}
            </div>
            <div className="col-2">
                <FontAwesomeIcon icon={faThumbsDown} className="pe-1" onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    dislikes: post.dislikes + 1
                }))}/>
                {post.dislikes}
            </div>
            <div className="col-2">
                <FontAwesomeIcon icon={faShareFromSquare} className="pe-1"/>
            </div>
        </div>
    );
};

export default TuitStats;
