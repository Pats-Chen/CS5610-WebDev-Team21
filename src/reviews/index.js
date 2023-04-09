import React    from "react";
import ReviewItems from "./review-items.js";
import WriteReview from "./write-review.js";
import reviews from "./reviews.json";

function MyReviews(props) {
    return (
       <>

           <div className="mt-3 mb-3"> main Nav bar</div>


           <div className="mt-3 mb-3"> Plan details component </div>


           <div>
               <WriteReview/>

               <div className="row">
                   {reviews.map(review =>
                       <ReviewItems key={review._id} summary={review}/>
                   )}

               </div>

           </div>
           <div className="mt-5">

               <p className="float-end"><a href="#">Back to top</a></p>
               <p>&copy; Team21. CS5610. NEU. &middot; <a href="#">Privacy</a>
                   &middot; <a href="#">Terms</a></p>


           </div>

       </>
    );
}

export default MyReviews;