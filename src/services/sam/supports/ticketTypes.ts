export interface createTicketRequest {
  ticket: {
    subject: string,
    priority: string,
  }
}
export interface createContactRequest {
  email: string,
  first_name: string,
  last_name: string,
  phone_number: string

}
