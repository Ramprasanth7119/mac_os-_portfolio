import dayjs from 'dayjs';
import { navIcons, navLinks } from '#constants'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className='font-bold'>Ram's Portfolio</p>
        <ul>
          {navLinks.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>

      <div>
        {navIcons.map(({id,img}) => <li key={id}><img src={img} className='icon-hover' alt={`icon-${id}`}/></li>)}
      </div>

      <time>{dayjs().format('ddd MMM D h:mm A')}</time>
    </nav>
  )
}

export default Navbar 
