export interface SignUpData {
  email: string
  username: string
  password: string
}

export interface SignUpErrors {
  email?: string[]
  username?: string[]
  password?: string[]
  _form?: string[]
}
