import {createReviewRequest, updateReviewRequest} from "./reviewTypes"
import {Logger} from "../../../utils/logger";
import {AxiosInstance} from "axios";

export default class ReviewSdk {
    axiosClient: AxiosInstance
    logger: Logger

    constructor(axiosClient: AxiosInstance , logger: Logger) {
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

    delete(reviewUuid: string, type: string, entity: string): Promise<string> {
        return this.axiosClient.delete<string>(`/products/reviews/types/${type}/entities/${entity}/reviews/${reviewUuid}`).then((res: any) => {
            this.logger.debug(res);
            return res.data
        });
    }
}
