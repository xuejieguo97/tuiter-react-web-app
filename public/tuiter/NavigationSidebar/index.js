const NavigationSidebar = (current) => {


    return(`
   <div class="list-group">
        <a href="/" class="list-group-item">
                <i class="fab fa-twitter"></i>
        </a>
        
        <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${current === "home" ? "active": ""}">
            <div class="row">
                <div class="col-xl-2 col-xxl-1">
                    <i class="fa fa-home"></i>
                </div>
                <div class="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Home</div>
            </div>
        </a>

        <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action ${current === "explore" ? "active": ""}">
            <div class="row">
                <div class="col-xl-2 col-xxl-1">
                    <i class="fa fa-hashtag"></i>
                </div>
                <div class="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Explore</div>
            </div>
        </a>
        
        <a href="#" class="list-group-item list-group-item-action disabled ${current === "notification" ? "active": ""}">
            <div class="row">
                <div class="col-xl-2 col-xxl-1">
                    <i class="fa fa-bell"></i>
                </div>
                <div class="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Notifications</div>
            </div>
        </a>
        
        <a href="#" class="list-group-item list-group-item-action disabled ${current === "message" ? "active": ""}">
            <div class="row">
                <div class="col-xl-2 col-xxl-1">
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Messages</div>
            </div>
        </a>
        
        <a href="#" class="list-group-item list-group-item-action disabled ${current === "bookmark" ? "active": ""}">
            <div class="row">
                <div class="col-xl-2 col-xxl-1">
                    <i class="fa fa-bookmark"></i>
                </div>
                <div class="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Bookmarks</div>
            </div>
        </a>
        
        <a href="#" class="list-group-item list-group-item-action disabled ${current === "list" ? "active": ""}">
            <div class="row">
                <div class="col-xl-2 col-xxl-1">
                    <i class="fa fa-list"></i>
                </div>
                <div class="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Lists</div>
            </div>
        </a>
        
        <a href="#" class="list-group-item list-group-item-action disabled ${current === "notification" ? "profile": ""}">
            <div class="row">
                <div class="col-xl-2 col-xxl-1">
                    <i class="fa fa-user"></i>
                </div>
                <div class="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">Profile</div>
            </div>
        </a>
        
        <a href="#" class="list-group-item list-group-item-action  disabled ${current === "notification" ? "more": ""}">
            <div class="row">
                <div class="col-xl-2 col-xxl-1">
                    <i class="fa fa-circle"></i>
                </div>
                <div class="d-none d-xl-block col-xl-10 col-xxl-10 ps-xl-1 ps-xxl-2">More</div>
            </div>
        </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

export default NavigationSidebar;