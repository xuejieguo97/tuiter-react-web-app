const PostSummaryItem = (post) => {
    const post_topic = post.topic !== "" ? `<span className=text-muted>${post.topic}</span><br>` : '';
    const post_username = post.userName !== "" ? `<span class="fw-bolder">${post.userName}</span>` : '';
    const post_title = post.title !== "" ? `<span class= "fw-bolder">${post.title}</span><br>` : "";

    return(`
            <li class="list-group-item">
                <div class="row">
                    <div class="col-8 col-md-9">
                        ${post_topic}
                        <span class="fw-bolder">${post_username}</span>
                        <i class="fa fa-circle"></i>
                        <span class="text-muted"> - ${post.time}</span></br>
                        <span class="fw-bolder">${post_title}</span><br>
                    </div>
                    <div class="col-4 col-md-3 d-flex flex-row-reverse pe-2">
                        <img class="ms-xxl-5 rounded-circle" src="${post.image}" width="100" height="100">
                    </div>
                </div>
            </li>
   `)
}

export default PostSummaryItem;