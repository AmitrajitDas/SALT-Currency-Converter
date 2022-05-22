import { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import Input from './Input'
import { convertCurrency } from '../../api/currencyAPI'
import './converter.styles.css'
import Shield from '../../assets/shield.png'
import Arrow from '../../assets/Arrow.png'

const Converter = () => {
  const currency = ['INR', 'USD', 'GBP', 'EUR']

  const [fromCurr, setFromCurr] = useState('INR')
  const [toCurr, setToCurr] = useState('USD')
  const [amount, setAmount] = useState(0)
  const [res, setRes] = useState(0)
  const convertCurrency = (to, from, amount) => {
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
      .then((result) => setRes(result))
      .catch((error) => console.log('error', error))
  }

  useEffect(() => {
    convertCurrency(fromCurr, toCurr, amount)
    console.log(res)
  }, [fromCurr, toCurr, amount])

  return (
    <div className='mx-12 converter-container'>
      <div className='p-12 flex flex-row justify-between'>
        <div className='flex flex-row'>
          <Input amount={amount} setAmount={setAmount} type='from' />
          <div className='mt-8'>
            <Dropdown
              currency={currency}
              curr={fromCurr}
              setCurr={setFromCurr}
            />
          </div>
        </div>
        <img
          src={Arrow}
          alt='arrow'
          style={{ width: '10rem', marginTop: '1rem' }}
        />
        <div className='flex flex-row'>
          <div className='mt-8'>
            <Dropdown currency={currency} curr={toCurr} setCurr={setToCurr} />
          </div>
          <Input amount={res} setAmount={setRes} type='to' />
        </div>
      </div>
      <div className='flex flex-row'>
        <img
          src={Shield}
          alt='shield'
          style={{ width: '2rem', marginBottom: '2rem', marginLeft: '2rem' }}
        />
        <div className='font-primary text-primary'>
          Conversion rate of : 1 {toCurr} = 75 {fromCurr}
        </div>
      </div>
    </div>
  )
}

export default Converter
