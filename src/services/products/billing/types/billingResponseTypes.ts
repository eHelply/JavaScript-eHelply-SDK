export interface BillingAccountResponse{
  first_name: string,
  last_name: string,
  project_uuid: string,
  stripe_customer_id: string
}

export interface GetStripeSecret {
  secret: string,
}

export interface GetPaymentResponse {
  payment_id: string,
  last_4_digits: string,
  card_brand: string,
  project_uuid: string
}
