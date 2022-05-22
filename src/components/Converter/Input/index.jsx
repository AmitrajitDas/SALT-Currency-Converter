import './input.styles.css'

const Input = ({ amount, setAmount, type }) => {
  return (
    <div className='flex flex-col'>
      <label className='input-label mb-6'>Amount</label>
      <input
        value={type === 'to' ? amount.result : amount}
        onChange={type === 'from' && ((e) => setAmount(e.target.value))}
        className='input font-secondary text-2xl font-bold'
      />{' '}
    </div>
  )
}

export default Input
