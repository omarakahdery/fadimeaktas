export interface IUser {
  email: string,
  first_name: string,
  last_name: string,
  shipping: {
    first_name: string,
    last_name: string,
    address_1: string,
    city: string,
    state: string,
  },
}