import {Logger} from "../../../utils/logger";

export default class BillingSdk {
  axiosClient: any
  logger: Logger

  constructor(axiosClient: any, logger: Logger) {
    this.axiosClient = axiosClient;
    this.logger = logger;
  }

  createBillingAccount(): void {
    return this.axiosClient.post(`/products/billing/create_billing_account`).then((res: any) => {
      this.logger.debug(res);
    });
  }

  getSecret(): void {
    return this.axiosClient.get(`/products/billing/retrieve_secret`, payload).then((res: any) => {
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
