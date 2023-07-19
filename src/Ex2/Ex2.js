import './Ex2.css';


function AnimalItem({ img, description }) {
  return (
    <li>
      <img src={img}></img>
      <p>{description}</p>
    </li>
  )
}

function Ex2() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
  const imgs = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png']
  const animalsLength = animals.length
  const lis = []
  for (let i = 0; i < animalsLength; i++) {
    lis.push(<AnimalItem img={imgs[i]} description={animals[i]}></AnimalItem>)
  }
  return (
    <div className='Animal-container'>
      <ul className='Animal-list'>
        {lis}
      </ul>
    </div>
  );
}


export default Ex2;
