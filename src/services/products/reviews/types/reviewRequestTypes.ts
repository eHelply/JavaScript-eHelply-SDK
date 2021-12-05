export interface CreateReviewRequest {
  review: {
    rating: number,
    max_rating: number,
    review_text: string
  }
}

export interface UpdateReviewRequest {
  review: {
    rating?: number,
    max_rating?: number,
    review_text?: string
  }
}
