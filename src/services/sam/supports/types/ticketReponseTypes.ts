export interface CreateTicketResponse {
  ticket_id: string,
  subject: string,
  priority: string
}
export interface GetTicketResponse extends  CreateTicketResponse {}
export interface UpdateTicketResponse extends  CreateTicketResponse {}

export interface CreateContactResponse {
  contact_id: string,
  first_name: string,
  last_name: string,
  email: string,
  phone: string
}
