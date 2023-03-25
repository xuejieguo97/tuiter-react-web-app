import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../profile/profile.css";
import {Link} from "react-router-dom";
import {saveProfile} from "../profile/profile-reducer";
import {useNavigate} from "react-router";

const EditProfile = () => {
    const userProfile = useSelector((state) => state.profile);
    const [profile, setProfile] = useState(userProfile);
    const [editDOB, setDOB] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const save = () => {
        console.log("from edit", profile.name);
        dispatch(saveProfile(profile));
        navigate("/tuiter/profile")
    }

    const editDOBHandlerDone = () => {
        setDOB(false);
    }

    const editDOBHandler = ()=> {
        setDOB(true);
    }


    const dobChangeHandler = (event) => {
        const bioValue = event.target.value;
        const newProfile = {
            ...profile,
            dateOfBirth: bioValue
        }
        setProfile(newProfile)
    }

    const bioChangeHandler = (event) => {
        const bioValue = event.target.value;
        const newProfile = {
            ...profile,
            bio: bioValue
        }
        setProfile(newProfile)
    }

    const nameChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newProfile = {
            ...profile,
            name: nameValue
        }
        setProfile(newProfile)
    }

    const locationChangeHandler = (event) => {
        const locationValue = event.target.value;
        const newProfile = {
            ...profile,
            location: locationValue
        }
        setProfile(newProfile)
    }

    const websiteChangeHandler = (event) => {
        const websiteValue = event.target.value;
        const newProfile = {
            ...profile,
            website: websiteValue
        }
        setProfile(newProfile)
    }

    return(
        <>
            <div className="row m-1">
                <div className="col-1">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg text-dark"></i>
                    </Link>
                </div>
                <div className="col-9">
                    Edit profile
                </div>
                <button className="col-2 btn btn-dark btn-sm" onClick={save}>
                    Save
                </button>
            </div>
            <img src={`/images/${profile.bannerPicture}`} alt="profile-banner" width="100%"/>
            <div className="move-up-50px">
                <img src={`/images/${profile.profilePicture}`} alt="profile" height="100" width="100" className="rounded-circle profile-avatar"/>
                <div className="border border-1 border-muted rounded m-3">
                    <label className="pt-1 ps-1 ms-2 text-muted">Name</label><br/>
                    <div className="ms-2">
                        <input value={profile.name} onChange={nameChangeHandler} className="border-0 fs-5 w-100"/>
                    </div>
                </div>
                <div className="border border-1 border-muted rounded m-3">
                    <label className="pt-1 ps-1 ms-2 text-muted" htmlFor="profile-bio">Bio</label><br/>
                    <div className="ms-2">
                        <textarea value={profile.bio} onChange={bioChangeHandler} className="border-0 fs-5 w-100" id="profile-bio"></textarea>
                    </div>
                </div>
                <div className="border border-1 border-muted rounded m-3">
                    <label className="pt-1 ps-1 ms-2 text-muted" htmlFor="profile-location">Location</label><br/>
                    <div className="ms-2">
                        <input value={profile.location} onChange={locationChangeHandler} className="border-0 fs-5 w-100" id="profile-location"/>
                    </div>
                </div>
                <div className="border border-1 border-muted rounded m-3">
                    <label className="pt-1 ps-1 ms-2 text-muted" htmlFor="profile-website">Website</label><br/>
                    <div className="ms-2">
                        <input value={profile.website} onChange={websiteChangeHandler} className="border-0 fs-5 w-100" id="profile_website"/>
                    </div>
                </div>
                <div className="m-3">
                    <label className="pt-1 ms-2 text-muted" htmlFor="profile-date">Birth date</label>
                    {!editDOB && <span className="text-primary" onClick={editDOBHandler}>  Edit</span>}
                    {editDOB && <span className="text-primary" onClick={editDOBHandlerDone}>  Done</span>}
                    <br/>
                    <div className="ms-2">
                        {editDOB && <input type="date" value={profile.dateOfBirth} onChange={dobChangeHandler} className="border-0 fs-5 w-100" id="profile_date"/>}
                        {!editDOB && <div className="fs-5">{profile.dateOfBirth}</div>}
                    </div>
                </div>
            </div>
        </>

    )


}

export default EditProfile;