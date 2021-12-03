import {createReviewRequest, updateReviewRequest} from "./reviewTypes"
import {Logger} from "../../../utils/logger";

export default class ReviewSdk {
    axiosClient: any
    logger: Logger

    constructor(axiosClient: any, logger: Logger) {
        this.axiosClient = axiosClient;
        this.logger = logger;
    }

    create(payload: createReviewRequest, type: string, entity: string): void {
        return this.axiosClient.post(`/products/reviews/types/${type}/entities/${entity}`, payload).then((res: any) => {
            this.logger.debug(res);
        }).catch(error => {
            throw error
        });
    }

    update(payload: updateReviewRequest, reviewUuid: string, type: string, entity: string): void {
        return this.axiosClient.put(`/products/reviews/types/${type}/entities/${entity}/reviews/${reviewUuid}`, payload).then((res: any) => {
            this.logger.debug(res);
        }).catch(error => {
            throw error
        });
    }

    get(reviewUuid: string, type: string, entity: string) {
        return this.axiosClient.get(`/products/reviews/types/${type}/entities/${entity}/reviews/${reviewUuid}`).then((res: any) => {
            this.logger.debug(res);
        }).catch(error => {
            throw error
        });
    }

    delete(reviewUuid: string, type: string, entity: string) {
        return this.axiosClient.delete(`/products/reviews/types/${type}/entities/${entity}/reviews/${reviewUuid}`).then((res: any) => {
            this.logger.debug(res);
        }).catch(error => {
            throw error
        });

    }
}
