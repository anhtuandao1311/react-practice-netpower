import './Ex9.css'
import { useState } from 'react'

function Ex9() {
  let fruits = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ]

  const [items, setItems] = useState(fruits)

  const handleChecked = (e) => {
    let searchVal = e.target.value
    searchVal = searchVal.toLowerCase()
    setItems(fruits.filter(fruit => {
      const cond = fruit.toLowerCase().indexOf(searchVal) >= 0
      return cond
    }))
  }
  return (
    <div className='Ex7-container'>
      <div>
        <label httpfor="fruit">Search:</label>
        <input onChange={handleChecked} id='fruit' />
      </div>

      <ul>
        {
          items.map((item, id) => {
            return <li key={id}>{item}</li>
          })
        }
      </ul>
    </div>

  )
}

export default Ex9