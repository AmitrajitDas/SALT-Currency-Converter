import TextField from '@mui/material/TextField'
import { useStyles } from './input.styles'
import './input.styles.css'

const Input = ({ amount, setAmount, type }) => {
  const classes = useStyles()
  return (
    <div className='flex flex-col'>
      <label className='input-label mb-6'>Amount</label>
      {/* <input
        value={type === 'to' ? amount?.result : amount}
        onChange={(e) => {
          type === 'from' && setAmount(e.target.value)
        }}
        className='input font-secondary text-2xl font-bold'
      />{' '} */}
      <TextField
        variant='standard'
        value={type === 'to' ? amount?.result : amount}
        onChange={(e) => {
          type === 'from' && setAmount(e.target.value)
        }}
        className={classes.input}
        inputProps={{
          style: {
            color: '#434343',
            fontSize: '2rem',
            fontWeight: '700',
          },
        }}
      />
    </div>
  )
}

export default Input
