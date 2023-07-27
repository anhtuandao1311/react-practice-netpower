import { ChevronLeft, ChevronRight } from 'react-feather'
import { useEffect, useState } from 'react'
import './Ex8.css'


const imageUrls = [
  'https://kenwheeler.github.io/slick/img/fonz3.png',
  'https://kenwheeler.github.io/slick/img/fonz2.png',
  'https://kenwheeler.github.io/slick/img/fonz1.png'
]

function Carousel({
  children ,
  autoPlay,
  autoSlideInterval,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () => {
    setCurr(curr => {
      if (curr === 0) return children.length - 1
      return curr - 1
    })
  }
  const next = () => {
    setCurr(curr => {
      if (curr === children.length - 1) return 0
      return curr + 1
    })
  }

  useEffect(() => {
    if (!autoPlay) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className='img-container'>
      <div className="img-list" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {children}
      </div>
      <div className='btn-list'>
        <button onClick={prev}>
          <ChevronLeft size={40} />
        </button >
        <button onClick={next}>
          <ChevronRight size={40} />
        </button>
      </div>

      <div className='small-img-list'>
        <div style={{}}>
          {imageUrls.map((url, i) => (
            <img src={url} alt={url} className={curr === i ? 'is-active' : ''} />
          ))}
        </div>
      </div>
    </div >
  )
}

function Ex8() {
  return (
    <div className="Ex8-container">
      <Carousel autoPlay={true} autoSlideInterval={3000}>
        {imageUrls.map(url => (
          <img src={url} alt={url} />
        ))}
      </Carousel>
    </div>
  )
}

export default Ex8
