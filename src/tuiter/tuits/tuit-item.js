import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import TuitStats from "./tuit-stats-item";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        post = {
            _id: 123,
            topic: "Space",
            username: "SpaceX",
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
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`/images/${post.image}`} alt="post-profile" className="rounded-circle" height="48" width="48"/>
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <span className="fw-bolder">{post.username}</span> <FontAwesomeIcon icon={faCircleCheck} className="text-primary"/>  <span className="text-muted">{post.handle} &middot; {post.time}</span><br/>
                    {post.tuit}
                    <TuitStats post={post}/>
                </div>
            </div>
        </div>

    )
}

export default TuitItem;