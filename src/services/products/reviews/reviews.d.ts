import { createReviewRequest, updateReviewRequest } from "./reviewTypes";
export default class ReviewSdk {
    axiosClient: any;
    constructor(axiosClient: any);
    create(payload: createReviewRequest, type: string, entity: string): void;
    update(payload: updateReviewRequest, reviewUuid: string, type: string, entity: string): void;
    get(reviewUuid: string, type: string, entity: string): void;
    delete(reviewUuid: string, type: string, entity: string): void;
}
