export interface IUser {
  id: string,
  email: string,
  first_name: string,
  last_name: string,
  shipping: IAddress,
  billing: IAddress
}

export interface ICartUser {
  user_id: string,
  email: string,
  first_name: string,
  last_name: string,
  display_name: string,
}

export interface IAddress {
  first_name: string,
  last_name: string,
  address_1: string,
  city: string,
  state: string,
}