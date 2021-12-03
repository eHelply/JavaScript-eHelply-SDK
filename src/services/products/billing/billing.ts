import {Logger} from "../../../utils/logger";
import {BillingAccountResponse, GetPaymentResponse, GetSecretResponse} from "./types/billingResponseTypes";
import {AxiosInstance, AxiosResponse} from "axios";


export default class BillingSdk {
  axiosClient: AxiosInstance
  logger: Logger

  constructor(axiosClient: AxiosInstance, logger: Logger) {
    this.axiosClient = axiosClient;
    this.logger = logger;
  }
  createBillingAccount(): Promise<BillingAccountResponse> {
    return this.axiosClient.post<BillingAccountResponse>(
      `/products/billing/create_billing_account`
    ).then((res: AxiosResponse<BillingAccountResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }

  getSecret(): Promise<GetSecretResponse> {
    return this.axiosClient.get<GetSecretResponse>(
      `/products/billing/retrieve_secret`
    ).then((res: AxiosResponse<GetSecretResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }

  viewPaymentMethod(): Promise<GetPaymentResponse> {
    return this.axiosClient.get<GetPaymentResponse>(
      `/products/billing/view_payment_method`
    ).then((res: AxiosResponse<GetPaymentResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }

  removePaymentMethod(): Promise<string> {
    return this.axiosClient.delete<string>(
      `/products/billing/remove_payment_method`
    ).then((res: AxiosResponse<string>) => {
      this.logger.debug(res);
      return res.data
    });
  }
}
