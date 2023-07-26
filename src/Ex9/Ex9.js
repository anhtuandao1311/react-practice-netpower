import './Ex9.css'
import { useEffect, useState } from 'react'

function UserItem({ user }) {
  return (
    <div>
      <img src={user.avatar} alt='avatar'></img>
      <h2>{user.first_name} {user.last_name}</h2>
      <p>{user.employment.title}</p>
    </div>
  )
}

function Ex9() {
  const [refresh, setRefresh] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then(res => res.json())
      .then(users => {
        setUsers(users)
      })
  }, [refresh])

  const handleClick = () => {
    setRefresh(refresh + 1)
  }

  return (
    <div className='Ex9-container'>
      <div className='Button'>
        <button onClick={handleClick}>Fetch Random</button>
      </div>
        <div className='User-list'>
          {
            users.map(user => (
              <UserItem user={user}></UserItem>
            ))
          }
        </div>
    </div>

  )
}

export default Ex9