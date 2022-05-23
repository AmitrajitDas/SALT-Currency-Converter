import { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import Input from './Input'
import { convertCurrency } from '../../api/currencyAPI'
import './converter.styles.css'
import Arrow from '../../assets/Group 1828.png'
import Circle from '../../assets/Ellipse 152.png'
import Shield from '../../assets/shield.png'

const Converter = () => {
  const currency = ['INR', 'USD', 'GBP', 'EUR']

  const [fromCurr, setFromCurr] = useState(currency[0])
  const [toCurr, setToCurr] = useState(currency[1])
  const [amount, setAmount] = useState()
  const [res, setRes] = useState()

  useEffect(() => {
    // convertCurrency(fromCurr, toCurr, amount).then((data) => setRes(data))
    console.log(res)
  }, [fromCurr, toCurr, amount])

  return (
    <div className='m-16 converter-container'>
      <div className='p-12 flex flex-row justify-between'>
        <div className='flex flex-row'>
          <Input amount={amount} setAmount={setAmount} type='from' />
          <div className='mt-12 ml-3'>
            <Dropdown
              currency={currency}
              curr={fromCurr}
              onChangeCurr={(e) => setFromCurr(e.target.value)}
            />
          </div>
        </div>

        <div className='mt-10'>
          <img src={Circle} alt='Circle' />
          <img
            src={Arrow}
            alt='arrow'
            style={{
              position: 'absolute',
              margin: '-1.3rem 0.5rem 0.5rem 0.52rem',
            }}
          />
        </div>
        <div className='flex flex-row'>
          <div className='mt-12 mr-3'>
            <Dropdown
              currency={currency}
              curr={toCurr}
              onChangeCurr={(e) => setToCurr(e.target.value)}
            />
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
        <div className='font-primary font-semibold text-lg text-primary mt-1'>
          Conversion rate of : 1 {toCurr} = {1 / res?.info?.rate} {fromCurr}
        </div>
      </div>
    </div>
  )
}

export default Converter
