import './dropdown.styles.css'

const DropDown = ({ currency, curr, onChangeCurr }) => {
  return (
    <select
      value={curr}
      onChange={onChangeCurr}
      className='font-secondary text-2xl font-bold select'
    >
      {currency?.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  )
}

export default DropDown
