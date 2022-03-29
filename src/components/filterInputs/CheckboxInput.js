export const CheckboxInput = ({
  name,
  id,
  value,
  checked,
  cardName,
  changeHandler,
}) => {
  return (
    <div className='input-selector'>
      <input
        type='checkbox'
        name={name}
        id={id}
        value={value}
        className='input-selector-field'
        checked={checked}
        onChange={changeHandler}
      />
      <label htmlFor={id} className='input-selector-label'>
        {cardName}
      </label>
    </div>
  )
}
