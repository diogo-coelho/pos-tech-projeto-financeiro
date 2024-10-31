import { UserFormData } from "@/components/ui/RegistrationForm/registration-form"

const createUser = async (userFormData: UserFormData): Promise<any> => {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userFormData)
    })
    return await response.json()
  } catch (error: unknown) {
    console.log('Ocorreu um erro: ', error);
  }
}

export { createUser }