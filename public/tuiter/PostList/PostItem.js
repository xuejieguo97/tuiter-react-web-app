const PostItem = (post) => {
    const image_content_link = post.image.content.link === "" ? "":`</br><span><i class="fa fa-link pe-2"></i>${post.image.content.link}</span>`;
    const image_content_text = post.image.content.text === "" ? "": `${post.image.content.text}`;
    let image_paragraph_text = "";
    const image_content_title = post.image.content.title === "" ? "": `<span class="card-title">${post.image.content.title}</span>`
    if (image_content_link !== ""  || image_content_text !== "") {
        image_paragraph_text = `
                                        <p class="card-text text-muted">
                                            ${image_content_text}
                                            ${image_content_link}
                                        </p>
        `
    }

    let image_content = "";
    if (image_content_title !== "" || image_paragraph_text !== "") {
        image_content = `
                        <div class="card-body bg-black wd-border-bottom-rounded-corner">
                            ${image_content_title}
                            ${image_paragraph_text}
                        </div>
        `
    }

    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <img src="${post.profile}" class="rounded-circle" height="48" width="48"/>
                </div>
                
                <div class="col-11">
                    <div class="ps-4">
                        <span class="fw-bolder">${post.userName}</span><i class="ps-1 fa fa-check-circle"></i> <span class="text-muted">@${post.handle} &middot; ${post.time}</span></br>
                        ${post.content}
                        <div class="card mt-2 border-light">
                            <img class="card-img-top border-bottom border-light ${image_content === "" ? 'wd-border-rounded-corner' : 'wd-border-top-rounded-corner'}" src="${post.image.src}" alt="Card image cap" width="100%" height="264"/>
                            ${image_content}
                        </div>
                    
                        <div class="row text-muted mt-2">
                            <div class="col-3">
                                <i class="fa fa-comment"></i><span class="ps-2"> ${post.comment}</span>
                            </div>
                            <div class="col-3">
                                <i class="fa fa-retweet"></i><span class="ps-2"> ${post.retweet}</span>
                            </div>
                            <div class="col-3">
                                <i class="fa fa-heart"></i><span class="ps-2">${post.likes}</span>
                            </div>
                            <div class="col-3">
                                <i class="fa fa-share"></i>
                            </div>
                        </div>
                    </div>  
                </div>       
            </div>
        </li>
    `)

}

export default PostItem;