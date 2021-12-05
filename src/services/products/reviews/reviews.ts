import {
    CreateReviewResponse,
    GetReviewResponse,
    UpdateReviewResponse
} from "./types/reviewResponseTypes"
import {UpdateReviewRequest,CreateReviewRequest} from "./types/reviewRequestTypes"
import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";

export default class ReviewSdk {
    axiosClient: AxiosInstance
    logger: Logger

    constructor(axiosClient: AxiosInstance , logger: Logger) {
        this.axiosClient = axiosClient;
        this.logger = logger;
    }

    create(type: string, entity: string, payload: CreateReviewRequest): Promise<CreateReviewResponse> {
        return this.axiosClient.post<CreateReviewResponse>(
          `/products/reviews/types/${type}/entities/${entity}`,
          payload
        ).then((res: AxiosResponse<CreateReviewResponse>) => {
            this.logger.debug(res);
            return res.data
        });
    }

    update(reviewUuid: string, type: string, entity: string, payload: UpdateReviewRequest): Promise<UpdateReviewResponse> {
        return this.axiosClient.put<UpdateReviewResponse>(
          `/products/reviews/types/${type}/entities/${entity}/reviews/${reviewUuid}`,
          payload
        ).then((res: AxiosResponse<UpdateReviewResponse>) => {
            this.logger.debug(res);
            return res.data
        });
    }

    get(reviewUuid: string, type: string, entity: string): Promise<GetReviewResponse> {
        return this.axiosClient.get<GetReviewResponse>(
          `/products/reviews/types/${type}/entities/${entity}/reviews/${reviewUuid}`
        ).then((res: AxiosResponse<GetReviewResponse>) => {
            this.logger.debug(res);
            return res.data;
        });
    }

    delete(reviewUuid: string, type: string, entity: string): Promise<string> {
        return this.axiosClient.delete<string>(
          `/products/reviews/types/${type}/entities/${entity}/reviews/${reviewUuid}`
        ).then((res: AxiosResponse<string>) => {
            this.logger.debug(res);
            return res.data
        });
    }
}
