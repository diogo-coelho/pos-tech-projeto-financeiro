export interface UserProps {
  name: string,
  email: string,
}

export interface UserJWTPayload {
  payload: {
    id: string,
    name: string,
    email: string
  }
}