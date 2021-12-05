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
