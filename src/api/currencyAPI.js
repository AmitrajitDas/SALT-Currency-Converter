import axios from 'axios'

export const convertCurrency = async (from, to, amount) => {
  try {
    const { data } = await axios.get(
      `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
      {
        headers: {
          apikey: process.env.REACT_APP_API_KEY,
        },
      }
    )
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
