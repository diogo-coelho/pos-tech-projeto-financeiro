const accountInformation = async (): Promise<Response> => {
  const response = await fetch('http://localhost:3000/api/account', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await response
}

export { accountInformation }