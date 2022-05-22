import './dropdown.styles.css'

const DropDown = ({ currency, curr, setCurr }) => {
  return (
    <select className='font-secondary text-2xl font-bold select'>
      {currency?.map((c) => (
        <option value={c} onChange={(e) => setCurr(e.target.value)}>
          {c}
        </option>
      ))}
    </select>
  )
}

export default DropDown
