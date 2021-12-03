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
export interface GetReviewResponse {
  uuid: string,
  rating_percentage: number,
  rating: number,
  max_rating: number,
  review_text: string,
  date_updated: string,
  date_created: string
}

export interface CreateReviewResponse {
  uuid: string,
  reviewable_entity_uuid: string,
  reviewable_entity_type: string,
  ehelply_meta_uuid: string,
  project_uuid: string,
  rating: number,
  max_rating: number,
  rating_percentage: number,
  date_updated: string,
  date_created: string,
  date_deleted: string
}

export interface UpdateReviewResponse extends  CreateReviewResponse {}
