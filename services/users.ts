import { AuthorizeFormData, UserFormData } from "@/components/ui/RegistrationForm/registration-form"
import { NextApiResponse } from "next"

const createUser = async (userFormData: UserFormData): Promise<Response> => {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userFormData)
  })
  return await response
}

const authorizeUser = async (authorizeFormData: AuthorizeFormData): Promise<Response> => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authorizeFormData)
  })
  return await response
}

export { createUser, authorizeUser }