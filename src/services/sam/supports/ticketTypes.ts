export interface CreateTicketRequest {
  ticket: {
    subject: string,
    priority: string,
  }
}
export interface CreateContactRequest {
  email: string,
  first_name: string,
  last_name: string,
  phone_number: string

}

export interface TicketResponse {
  ticket_id: string,
  subject: string,
  priority: string
}

export interface ContactResponse {
  contact_id: string,
  first_name: string,
  last_name: string,
  email: string,
  phone: string

}
