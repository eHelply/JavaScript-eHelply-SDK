import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import {CreateTicketRequest, CreateContactRequest, TicketResponse, ContactResponse} from "./ticketTypes";

export default class SupportSdk {
  axiosClient: AxiosInstance
  logger: Logger
  constructor(axiosClient: AxiosInstance, logger: Logger) {
    this.axiosClient = axiosClient;
    this.logger = logger;
  }
  create_ticket(projectUuid: string, activeMemberId: string, payload: CreateTicketRequest ): Promise<TicketResponse> {
    return this.axiosClient.post<TicketResponse>(
      `/sam/support/projects/${projectUuid}/members/${activeMemberId}/tickets`,
      payload
    ).then((res: AxiosResponse<TicketResponse>) => {
      this.logger.debug(res);
      return res.data;
    });

  }
  list_tickets(projectUuid: string,  activeMemberId: string): Promise<Array<TicketResponse>>{
    return this.axiosClient.get<Array<TicketResponse>>(
      `/sam/support/projects/${projectUuid}/members/${activeMemberId}/tickets`
    ).then((res:AxiosResponse<Array<TicketResponse>> ) => {
      this.logger.debug(res)
      return res.data;
    });
  }
  create_contact(payload: CreateContactRequest): Promise<ContactResponse>{
    return this.axiosClient.post<ContactResponse>(
      `/sam/support/contact`,
      payload
    ).then((res: AxiosResponse<ContactResponse>) => {
      this.logger.debug(res)
      return res.data;
    })
  }
  get_ticket(projectUuid: string, activeMemberId: string, ticketId: string): Promise<TicketResponse> {
    return this.axiosClient.get<TicketResponse>(
      `/sam/support/projects/${projectUuid}/members/${activeMemberId}/tickets/${ticketId}`
    ).then((res: AxiosResponse<TicketResponse> ) => {
      this.logger.debug(res)
      return res.data
    })
  }
}
