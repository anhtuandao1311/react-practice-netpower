import './Ex10.css';
import { Link } from 'react-router-dom';

function Ex10() {
  return (
    <ul className='Navbar'>
      <li><Link to='/'>Exercise 1</Link></li>
      <li><Link to='/exercise2'>Exercise 2</Link></li>
      <li><Link to='/exercise3'>Exercise 3</Link></li>
      <li><Link to='/exercise4'>Exercise 4</Link></li>
      <li><Link to='/exercise5'>Exercise 5</Link></li>
      <li><Link to='/exercise6'>Exercise 6</Link></li>
      <li><Link to='/exercise7'>Exercise 7</Link></li>
      <li><Link to='/exercise8'>Exercise 8</Link></li>
      <li><Link to='/exercise9'>Exercise 9</Link></li>

    </ul>
  );
}

export default Ex10


