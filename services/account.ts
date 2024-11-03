import { TransactionFormData } from "@/components/ui/Transaction/transaction"

const accountInformation = async (userId: string): Promise<Response> => {
  const response = await fetch(`http://localhost:3000/api/account/${userId}`, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return await response;
}

const transferAmount = async (userId: string, transaction: TransactionFormData): Promise<Response> => {
  const response = await fetch(`/api/account/${userId}`, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction)
  })
  return await response;
}

export { accountInformation, transferAmount }