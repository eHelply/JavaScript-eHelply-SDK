import {Logger} from "../../../utils/logger";
import {AxiosInstance} from "axios";
import {makeAxiosClientHeaderless} from "../../../utils/axiosClient";

export default class SupportSdk {
  axiosClient: AxiosInstance
  axiosClientHeaderless: AxiosInstance
  logger: Logger
  constructor(axiosClient: any, logger: Logger) {
    this.axiosClient = axiosClient;
    this.axiosClientHeaderless = makeAxiosClientHeaderless(axiosClient);
    this.logger = logger;
  }
  create_ticket(payload) {
    let payload = {
      ticket: {
        subject: this.ticket.subject,
        priority: this.ticket.priority.toUpperCase()
      }
    };
    let self = this;
    // TODO: need to change monitor into support instead currently not supported
    // TODO: when a newest ticket being created sort them by created date so the newest will be at the front of the page rather last
    this.$qecl.$axios.post(`${this.$qecl.facts.get_service_endpoint("monitor")}/support/projects/${this.projectUuid}/members/${this.activeMemberId}/tickets`, payload).then((response) => {
      self.$emit("ok", response.data);
      self.loading = false;
      self.hide();
    });
  }
  list_tickets() {
    let self = this;
    let projectUuid = this.$route.params.project;
    let activeParticipantUUID = this.$store.getters["user/getMe"].uuid;
    this.$qecl.$axios.get(`${this.$qecl.facts.get_service_endpoint("monitor")}/support/projects/${projectUuid}/members/${activeParticipantUUID}/tickets`).then((response) => {
      self.tickets = response.data;
      self.loading = false;
    });
  }
  create_contact(){
    let participantData = this.$store.getters["user/getMe"]
    let payload = {
      "email": participantData.email.address,
      "first_name": participantData.first_name,
      "last_name": participantData.last_name,
      "phone_number": participantData.phone_number
    }
    this.$qecl.$axios.post(`${this.$qecl.facts.get_service_endpoint("monitor")}/support/contact`, payload).then((response) => {
    }).catch(error =>{
      if (error.response.status === 409) {
        console.log("Contact already exists")
      }
    });
  }
  update_ticket () {

  }
  delete_ticket () {

  }
  get_ticket() {

  }

}
