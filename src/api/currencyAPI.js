export const convertCurrency = (from, to, amount) => {
  var data
  var myHeaders = new Headers()
  myHeaders.append('apikey', process.env.REACT_APP_API_KEY)

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  }

  fetch(
    `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => (data = result))
    .catch((error) => console.log('error', error))

  return data
}
