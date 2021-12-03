import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import {
  CreateTicketRequest,
  UpdateTicketResponse,
  CreateTicketResponse,
  CreateContactRequest,
  GetTicketResponse,
  CreateContactResponse
} from "./ticketTypes";

export default class SupportSdk {
  axiosClient: AxiosInstance
  logger: Logger

  constructor(axiosClient: AxiosInstance, logger: Logger) {
    this.axiosClient = axiosClient;
    this.logger = logger;
  }

  createTicket(projectUuid: string, activeMemberId: string, payload: CreateTicketRequest): Promise<CreateTicketResponse> {
    return this.axiosClient.post<CreateTicketResponse>(
      `/sam/support/projects/${projectUuid}/members/${activeMemberId}/tickets`,
      payload
    ).then((res: AxiosResponse<CreateTicketResponse>) => {
      this.logger.debug(res);
      return res.data;
    });

  }

  listTickets(projectUuid: string, activeMemberId: string): Promise<Array<GetTicketResponse>> {
    return this.axiosClient.get<Array<GetTicketResponse>>(
      `/sam/support/projects/${projectUuid}/members/${activeMemberId}/tickets`
    ).then((res: AxiosResponse<Array<GetTicketResponse>>) => {
      this.logger.debug(res)
      return res.data;
    });
  }

  createContact(payload: CreateContactRequest): Promise<CreateContactResponse> {
    return this.axiosClient.post<CreateContactResponse>(
      `/sam/support/contact`,
      payload
    ).then((res: AxiosResponse<CreateContactResponse>) => {
      this.logger.debug(res)
      return res.data;
    })
  }

  getTicket(projectUuid: string, activeMemberId: string, ticketId: string): Promise<GetTicketResponse> {
    return this.axiosClient.get<GetTicketResponse>(
      `/sam/support/projects/${projectUuid}/members/${activeMemberId}/tickets/${ticketId}`
    ).then((res: AxiosResponse<GetTicketResponse>) => {
      this.logger.debug(res)
      return res.data
    });
  }
}
