export interface IUser {
  FIRSTNAME: string,
  LASTNAME: string,
  email: string,
  password: string,
  recaptcha: string
}

export interface IAdminLogin {
  EmailId: string,
  Password: string
}
