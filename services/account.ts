import { TransactionFormData } from "@/components/ui/Transaction/transaction"

const accountInformation = async (): Promise<Response> => {
  const response = await fetch(`http://localhost:3000/api/account`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return await response;
}

const transferAmount = async (transaction: TransactionFormData): Promise<Response> => {
  const response = await fetch('/api/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction)
  })
  return await response;
}

export { accountInformation, transferAmount }