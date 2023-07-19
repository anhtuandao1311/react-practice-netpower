import './Ex3.css'
import { useState } from 'react'

function Ex3() {
  const [items, setItems] = useState([])

  const handleChecked = (e) => {
    let checkedValue = ''
    let isChecked = e.target.checked
    if (isChecked) {
      checkedValue = e.target.value
      if (items.includes(e.target.value)) return
      setItems([...items, checkedValue])
    } else {
      setItems(items.filter(item=>item!==e.target.value))
    }

  }
  return (
    <div className='Ex3-container'>
      <div>
        <h1>Your CheckList:</h1>
        <div>
          <input onChange={handleChecked} type="checkbox" id="apple" name="apple" value="Apple" />
          <label httpfor="apple">Apple</label>
        </div>

        <div>
          <input onChange={handleChecked} type="checkbox" id="banana" name="banana"
            value="Banana" />
          <label httpfor="banana">Banana</label>
        </div>

        <div>
          <input onChange={handleChecked} type="checkbox" id="tea" name="tea"
            value="Tea" />
          <label httpfor="tea">Tea</label>
        </div>

        <div>
          <input onChange={handleChecked} type="checkbox" id="coffee" name="coffee" value="Coffee" />
          <label httpfor="coffee">Coffee</label>
        </div>
        <p>Items checked are: {items.join(', ')}</p>
      </div>

    </div>
  )
}

export default Ex3