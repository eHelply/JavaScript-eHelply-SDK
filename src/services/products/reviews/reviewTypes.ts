export interface createReviewRequest {
  review: {
    rating: number,
    max_rating: number,
    review_text: string
  }
}

export interface updateReviewRequest {
  review: {
    rating?: number,
    max_rating?: number,
    review_text?: string
  }
}
export interface ReviewResponse {
  uuid: string,
  rating_percentage: number,
  rating: number,
  max_rating: number,
  review_text: string,
  date_updated: string,
  date_created: string
}
