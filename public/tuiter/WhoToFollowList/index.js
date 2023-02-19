import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js"

const WhoToFollowList = () => {
    return (`
           <ul class="list-group mt-2">
                <li class="list-group-item fw-bolder">Who to follow</li>
                    ${
                        whos.map(who => {
                            return(WhoToFollowListItem(who))
                        }).join("")
                    }
           </ul>
    `);
}

export default WhoToFollowList;