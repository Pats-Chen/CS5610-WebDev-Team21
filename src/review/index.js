import React    from "react";
import ReviewItems from "./review-items.js";
import {ListGroup} from "react-bootstrap";

function MyReviews(reviews) {

    return (
       <>
           <div>


               <div className="row">
                   <ListGroup>
                   {
                       reviews.reviews.map(review => <ReviewItems key={review._id} review={review}/>)
                   }
                       </ListGroup>

               </div>

           </div>



       </>
    );
}

export default MyReviews;