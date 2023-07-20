import './Ex5.css'
import { useEffect, useState } from 'react'


function Ex5() {
  // const [show,setShow] = useState(false)
  let [firstName, setFirstName] = useState('')
  let [lastName, setLastName] = useState('')

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleClick = () => {
    firstName = firstName.trim()
    lastName = lastName.trim()
    if(firstName && lastName){alert(`Hello ${firstName} ${lastName}!`)}
    else alert(`Please input both first name and last name!`)

    setFirstName('')
    setLastName('')
  }

  return (
    <div className='Ex5-container'>
      <div>
        <input onChange={handleFirstNameChange} value={firstName} placeholder='First name' />
        <input onChange={handleLastNameChange} value={lastName} placeholder='Last name' />
        <button onClick={handleClick}>GREET ME</button>
      </div>
    </div>

  )
}

export default Ex5