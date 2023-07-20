import './Ex6.css'

function Item({item}){
  return (
    <div className='Item'>
      <h1>{item.setup}</h1>
      <p>{item.punchline}</p>
    </div>
  )
}

function Ex6() {
  const data = [
    {
      id: "1",
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit"
    },
    {
      id: "2",
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#"
    }
  ]

  return (
    <div className='Ex6-container'>
      {
        data.map(item=>(<Item key={item.id} item={item}></Item>))
      }
    </div>

  )
}

export default Ex6