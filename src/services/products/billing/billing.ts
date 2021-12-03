import {Logger} from "../../../utils/logger";
import {BillingAccountResponse} from "./billingTypes";
import {AxiosResponse} from "axios";

export default class BillingSdk {
  axiosClient: any
  logger: Logger

  constructor(axiosClient: any, logger: Logger) {
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

  getSecret(): void {
    return this.axiosClient.get(`/products/billing/retrieve_secret`).then((res: any) => {
      this.logger.debug(res);
    });
  }

  viewPaymentMethod() {
    return this.axiosClient.get(`/products/billing/view_payment_method`).then((res: any) => {
      this.logger.debug(res);
    });
  }

  removePaymentMethod() {
    return this.axiosClient.delete(`/products/billing/remove_payment_method`).then((res: any) => {
      this.logger.debug(res);
    });

  }
}
