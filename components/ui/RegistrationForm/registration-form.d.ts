export interface AuthorizeFormData {
  email: string,
  password: string
}

export interface UserFormData extends AuthorizeFormData {
  name: string,
}
