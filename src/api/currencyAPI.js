export const convertCurrency = (to, from, amount) => {
  var myHeaders = new Headers()
  myHeaders.append('apikey', 'Y28Zgxhqc85b3C2atkrXSRbfGSzqjPQo')

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  }

  let res

  fetch(
    `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      res = result
    })
    .catch((error) => console.log('error', error))

  return res
}
