const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row"> 
                <div class="col-2">
                    <img class="rounded-circle" src="${who.avatarIcon}" width="48" height="48">
                </div>
                <div class="col-7">
                    <span class="fw-bolder">${who.userName}</span><i class="fa fa-check-circle ps-1"></i></br>
                    <span>@${who.handle}</span>
                </div>
                <div class="col-3 d-flex flex-row-reverse">
                    <button type="button" class="btn btn-primary rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    `)
}

export default WhoToFollowListItem;