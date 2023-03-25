import {useSelector} from "react-redux";
import React from "react";
import "./profile.css";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = new Date(profile.dateOfBirth).getFullYear();
    const monthIndex = new Date(profile.dateOfBirth).getMonth();
    const month = monthNames[monthIndex];
    const dateJoin = profile.dateJoined.split("/")
    const monthJoin = monthNames[parseInt(dateJoin[0]) - 1]
    const yearJoin = dateJoin[1]
    return(
        <div className="container-fluid">
            <div className="card">
                    <img src={`/images/${profile.bannerPicture}`} alt="profile-banner" width="100%"/>
                <div className="move-up-50px">
                    <div>
                        <img src={`/images/${profile.profilePicture}`} alt="profile" height="100" width="100" className="rounded-circle profile-avatar"/>
                        <Link to="/tuiter/edit-profile" className="btn btn-outline-dark move-down-55px edit-button float-end edit-button me-4"><span className="fw-bolder text-dark">Edit profile</span></Link>
                    </div>
                    <div className="ms-3">
                        <span className="fs-5 fw-bold"> {profile.name}</span><br/>
                        <span className="text-muted">{profile.handle}</span>
                        <div className="pt-3 pb-3">
                            {profile.bio}
                        </div>
                        <div className="text-muted row">
                            <div className="col-4">
                                <i className="bi bi-geo-alt"></i> {profile.location}
                            </div>
                            <div className="col-4">
                                <i className="bi bi-balloon"></i> Born in {month} {year}
                            </div>
                            <div className="col-4">
                                <i className="bi bi-calendar3"></i> Joined {monthJoin} {yearJoin}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <span className="fw-bolder">{profile.followingCount}</span> <span className="text-muted">Following</span>
                            </div>
                            <div className="col-4">
                                <span className="fw-bolder">{profile.followersCount}</span> <span className="text-muted">Followers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProfileComponent