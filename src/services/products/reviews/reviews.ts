import {createReviewRequest, ReviewResponse, updateReviewRequest} from "./reviewTypes"
import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";

export default class ReviewSdk {
    axiosClient: AxiosInstance
    logger: Logger

    constructor(axiosClient: AxiosInstance , logger: Logger) {
        this.axiosClient = axiosClient;
        this.logger = logger;
    }

    create(payload: createReviewRequest, type: string, entity: string): Promise<any> {
        return this.axiosClient.post<any>(
          `/products/reviews/types/${type}/entities/${entity}`,
          payload
        ).then((res: AxiosResponse<any>) => {
            this.logger.debug(res);
            return res.data
        });
    }

    update(reviewUuid: string, type: string, entity: string, payload: updateReviewRequest): Promise<any> {
        return this.axiosClient.put<any>(
          `/products/reviews/types/${type}/entities/${entity}/reviews/${reviewUuid}`,
          payload
        ).then((res: AxiosResponse<any>) => {
            this.logger.debug(res);
            return res.data
        });
    }

    get(reviewUuid: string, type: string, entity: string): Promise<ReviewResponse> {
        return this.axiosClient.get<ReviewResponse>(
          `/products/reviews/types/${type}/entities/${entity}/reviews/${reviewUuid}`
        ).then((res: AxiosResponse<ReviewResponse>) => {
            this.logger.debug(res);
            return res.data;
        });
    }

    delete(reviewUuid: string, type: string, entity: string): Promise<any> {
        return this.axiosClient.delete<any>(
          `/products/reviews/types/${type}/entities/${entity}/reviews/${reviewUuid}`
        ).then((res: any) => {
            this.logger.debug(res);
            return res.data
        });
    }
}
