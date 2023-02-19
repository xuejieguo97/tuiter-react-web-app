import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js"

const PostSummaryList = () => {
    return(`
       <ul class="list-group">
        ${
            exploreItems.map(exploreItem => {
                return (PostSummaryItem(exploreItem))
            }).join("")
        } 
        </ul>
    `)
}

export default PostSummaryList;
