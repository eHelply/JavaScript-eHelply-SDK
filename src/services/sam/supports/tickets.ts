import {Logger} from "../../../utils/logger";
import {AxiosInstance} from "axios";
import {makeAxiosClientHeaderless} from "../../../utils/axiosClient";
import {createTicketRequest, createContactRequest, ticketResponse} from "./ticketTypes";

export default class SupportSdk {
  axiosClient: AxiosInstance
  axiosClientHeaderless: AxiosInstance
  logger: Logger
  constructor(axiosClient: any, logger: Logger) {
    this.axiosClient = axiosClient;
    this.axiosClientHeaderless = makeAxiosClientHeaderless(axiosClient);
    this.logger = logger;
  }
  create_ticket(payload: createTicketRequest, projectUuid: string, activeMemberId: string): any {
    this.axiosClient.post(`/sam/support/project/${projectUuid}/members/${activeMemberId}/tickets`, payload).then((res: any) => {
      const response: ticketResponse = {
        ticket_id: res.data.ticket_id,
        subject: res.data.subject,
        priority: res.data.priority
      }
      return response
    });

  }
  list_tickets(projectUuid: string,  activeMemberId: string): any{

    this.axiosClient.get(`/sam/support/project/${projectUuid}/members/${activeMemberId}/tickets`).then((res: any) => {
      return res
    });
  }
  create_contact(payload: createContactRequest): any{
    this.axiosClient.post(`sam/support/contact`, payload).then((res: any) => {
      return res
    });
  }
  get_ticket(projectUuid: string, activeMemberId: string, ticketId: string): any {

    this.axiosClient.get(`sam/support/projects/${projectUuid}/members/${activeMemberId}/tickets/${ticketId}`).then((res: any ) => {
      return res
    });
  }

}
