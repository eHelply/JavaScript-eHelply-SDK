import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import {GetKpisResponse, GetMonitorServicesResponse} from "./types/monitorResponseTypes";

export default class MonitorSdk {
  axiosClient: AxiosInstance
  logger: Logger

  constructor(axiosClient: AxiosInstance, logger: Logger) {
    this.axiosClient = axiosClient;
    this.logger = logger;
  }

  getServices(): Promise<Array<GetMonitorServicesResponse>> {
    return this.axiosClient.post<Array<GetMonitorServicesResponse>>(
      `/sam/monitor/services`,
    ).then((res: AxiosResponse<Array<GetMonitorServicesResponse>>) => {
      this.logger.debug(res);
      return res.data;
    });

  }

  getService(serviceUuid: string): Promise<GetMonitorServicesResponse> {
    return this.axiosClient.post<GetMonitorServicesResponse>(
      `/sam/monitor/services/${serviceUuid}`,
    ).then((res: AxiosResponse<GetMonitorServicesResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  getServiceKpis(serviceUuid: string): Promise<Array<GetKpisResponse>> {
    return this.axiosClient.post<Array<GetKpisResponse>>(
      `/sam/monitor/services/${serviceUuid}/kpis`,
    ).then((res: AxiosResponse<Array<GetKpisResponse>>) => {
      this.logger.debug(res);
      return res.data;
    });
  }
}