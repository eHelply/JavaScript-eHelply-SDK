export interface createReviewRequest {
    review: {
        rating: number;
        max_rating: number;
        review_text: string;
    };
}
export interface updateReviewRequest {
    review: {
        rating?: number;
        max_rating?: number;
        review_text?: string;
    };
}
