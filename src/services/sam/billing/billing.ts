import {Logger} from "../../../utils/logger";
import {BillingAccountResponse, GetPaymentResponse, GetStripeSecret} from "./types/billingResponseTypes";
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
      `/sam/billing/create_billing_account`
    ).then((res: AxiosResponse<BillingAccountResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }

  getSecret(): Promise<GetStripeSecret> {
    return this.axiosClient.get<GetStripeSecret>(
      `/sam/billing/retrieve_secret`
    ).then((res: AxiosResponse<GetStripeSecret>) => {
      this.logger.debug(res);
      return res.data
    });
  }

  viewPaymentMethod(): Promise<GetPaymentResponse[]> {
    return this.axiosClient.get<GetPaymentResponse[]>(
      `/sam/billing/view_payment_method`
    ).then((res: AxiosResponse<GetPaymentResponse[]>) => {
      this.logger.debug(res);
      return res.data
    });
  }

  removePaymentMethod(): Promise<string> {
    return this.axiosClient.delete<string>(
      `/sam/billing/remove_payment_method`
    ).then((res: AxiosResponse<string>) => {
      this.logger.debug(res);
      return res.data
    });
  }
}
