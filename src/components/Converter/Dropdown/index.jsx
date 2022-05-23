import { MenuItem, Select } from '@mui/material'
import { useStyles } from './dropdown.styles.js'
import './dropdown.styles.css'

const DropDown = ({ currency, curr, onChangeCurr }) => {
  const classes = useStyles()

  return (
    <Select
      value={curr}
      placeholder='F'
      onChange={onChangeCurr}
      className={classes.select}
    >
      {currency?.map((c) => (
        <MenuItem key={c} value={c} className={classes.selectDrop}>
          {c}
        </MenuItem>
      ))}
    </Select>
  )
}

export default DropDown
