import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div>
                <div class="row mb-2 d-flex flex-row align-items-center">
                    <div class="col-10 col-md-11 d-flex flex-row align-items-center">
                        <span class="wd-bg-color-white border-0 wd-move-to-front wd-move-to-right-20px wd-search-icon-dimension ps-0 wd-move-up-5px"><i class="fa fa-search"></i></span>
                        <input type="text" class="form-control rounded-pill ps-5 justify-content-start" placeholder="Search Twitter"/>
                    </div>
                    <div class="col-2 col-md-1">
                        <i class="fa fa-cog fa-2x text-primary d-flex flex-row-reverse"></i>
                    </div>
                </div>
               <ul class="nav mb-2 nav-tabs" id="explore-nav">
                      <li class="nav-item" role="presentation">
                            <a class="nav-link active" data-bs-toggle="tab" href="#home" aria-selected="false" role="tab" tabindex="-1">For you</a>
                      </li>
                      <li class="nav-item" role="presentation">
                            <a class="nav-link" data-bs-toggle="tab" href="#home" aria-selected="false" role="tab" tabindex="-1">Trending </a>
                      </li>
                      <li class="nav-item" role="presentation">
                            <a class="nav-link" data-bs-toggle="tab" href="#home" aria-selected="false" role="tab" tabindex="-1">News</a>
                      </li>
                      <li class="nav-item" role="presentation">
                            <a class="nav-link" data-bs-toggle="tab" href="#home" aria-selected="false" role="tab" tabindex="-1">Sports</a>
                      </li>
                      <li class="nav-item d-none d-md-block" role="presentation">
                            <a class="nav-link" data-bs-toggle="tab" href="#home" aria-selected="false" role="tab" tabindex="-1">Entertainment</a>
                      </li>
               </ul>
               <!-- image with overlaid text -->
               <div class="card border-0 bg-black">
               <div class="wd-fix-size-400px mb-3">
                    <img class="card-img-top" src="../image/explore/spaceship.png" height="400"/>
                    <p class="fs-2 fw-bolder wd-move-to-front wd-move-right-10px wd-move-up-60px text-black">
                        SpaceX's Starship
                    </p>
               </div>
               
               ${PostSummaryList()}
               </div> 
            </div>
    `);
}
export default ExploreComponent;
