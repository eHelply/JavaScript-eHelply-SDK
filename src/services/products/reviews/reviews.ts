import * as config from "../../../secret.json";
import { reviewSchema } from  "./reviewTypes"
import axios from "axios";

export default class ReviewSdk {
  axisoClient: any
  constructor(axisoClient: any) {
    this.axisoClient = axisoClient
  }
  create( rating: number, maxRating: number, reviewText: string ): void {
    let data: reviewSchema = {
      review: {review_text: reviewText, rating: rating, max_rating: maxRating}
    };
    data.review.review_text = reviewText
    data.review.max_rating = maxRating
    data.review.rating = rating
    this.axisoClient.post("/products/reviews/types/type_name/entities/uuid1236", data).then((res: any) => {
      console.log(res)
    })
  }
  // update(reviewUuid: string, rating: number, reviewText: string ): void{
  //
  // }
  // get(reviewUuid: string){
  //
  // }
  // delete(reviewUuid: string){
  //
  // }
  // search() {
  //
  // }

}
