import {createSlice} from "@reduxjs/toolkit";

const profile =
{
    name: 'Jose Annunziato',
    handle: '@jannunzi',
    profilePicture: 'icons8-react-80.png',
    bannerPicture: 'banner.jpg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '1968-07-07',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223
}


const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        saveProfile(state, {payload}){
            state.name = payload.name
            state.handle = payload.handle
            state.profilePicture = payload.profilePicture
            state.bannerPicture = payload.bannerPicture
            state.bio = payload.bio
            state.website = payload.website
            state.location = payload.location
            state.dateOfBirth = payload.dateOfBirth
        }
    }
})

export const {saveProfile} = profileSlice.actions;
export default profileSlice.reducer;