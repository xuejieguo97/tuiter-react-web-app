import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {faHashtag, faList, faHome, faCircle, faL} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faEnvelope, faBell, faUser,} from "@fortawesome/free-regular-svg-icons";

const NavigationSidebar = () => {

    const {pathname} = useLocation();

    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a href="#" className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <div className="row">
                    <div className="col-xl-2 col-xxl-1">
                        <FontAwesomeIcon icon={faHome}/>
                    </div>
                        <div className="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Home</div>
                </div>
            </Link>

            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <div className="row">
                    <div className="col-xl-2 col-xxl-1">
                        <FontAwesomeIcon icon={faHashtag}/>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Explore</div>
                </div>
            </Link>

            <button className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <div className="row">
                    <div className="col-xl-2 col-xxl-1">
                        <FontAwesomeIcon icon={faBell}/>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Notifications</div>
                </div>
            </button>
            <button href="#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div className="row">
                    <div className="col-xl-2 col-xxl-1">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Messages</div>
                </div>
            </button>
            <button className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div className="row">
                    <div className="col-xl-2 col-xxl-1">
                        <FontAwesomeIcon icon={faBookmark}/>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Bookmarks</div>
                </div>
            </button>
            <button className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div className="row">
                    <div className="col-xl-2 col-xxl-1">
                        <FontAwesomeIcon icon={faList}/>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Lists</div>
                </div>
            </button>
            <button className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <div className="row">
                    <div className="col-xl-2 col-xxl-1">
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Profile</div>
                </div>
            </button>
            <button href="#" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className="row">
                    <div className="col-xl-2 col-xxl-1">
                        <FontAwesomeIcon icon={faCircle}/>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">More</div>
                </div>
            </button>
            <Link to="/" className="list-group-item">
                <div className="row">
                    <div className="col-xl-2 col-xxl-1">
                        <FontAwesomeIcon icon={faL}/>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Labs</div>
                </div>
            </Link>
        </div>
    );
};
export default NavigationSidebar;