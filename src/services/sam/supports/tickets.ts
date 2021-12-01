import {Logger} from "../../../utils/logger";
import {AxiosInstance} from "axios";
import {makeAxiosClientHeaderless} from "../../../utils/axiosClient";
import {createTicketRequest, createContactRequest} from "./ticketTypes";

export default class SupportSdk {
  axiosClient: AxiosInstance
  axiosClientHeaderless: AxiosInstance
  logger: Logger
  constructor(axiosClient: any, logger: Logger) {
    this.axiosClient = axiosClient;
    this.axiosClientHeaderless = makeAxiosClientHeaderless(axiosClient);
    this.logger = logger;
  }
  create_ticket(payload: createTicketRequest, projectUuid: string, activeMemberId: string) {
    this.axiosClient.post(`/sam/support/project/${projectUuid}/members/${activeMemberId}/tickets`, payload).then((res: any) => {
      this.logger.debug(res);
    });
  }
  list_tickets(projectUuid: string,  activeMemberId: string) {

    this.axiosClient.get(`/sam/support/project/${projectUuid}/members/${activeMemberId}/tickets`, payload).then((res: any) => {
      this.logger.debug(res);
    });
  }
  create_contact(payload: createContactRequest){
    this.axiosClient.post(`sam/support/contact`, payload).then((res: any) => {
      this.logger.debug(res)
    });
  }
  get_ticket(projectUuid: string, activeMemberId: string, ticketId: string) {

    this.axiosClient.get(`sam/support/projects/${projectUuid}/members/${activeMemberId}/tickets/${ticketId}`).then((res: any ) => {
      this.logger.debug(res)
    });
  }

}
