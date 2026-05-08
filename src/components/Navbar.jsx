import dayjs from 'dayjs';
import { navIcons, navLinks } from '#constants'
import useWindowStore from './store/window';

const Navbar = () => {

  const {openWindow} = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className='font-bold'>Ram's Portfolio</p>
        <ul style={{ display: 'flex', gap: '1rem' , listStyle: 'none', marginLeft: '2rem', cursor: 'pointer'}}>
          {navLinks.map((item) => <li key={item.id} onClick={() => openWindow(item.type)}>{item.name}</li>)}
        </ul>
      </div>

      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', alignItems: 'center' }}>
        {navIcons.map(({id, img, showDot, badgeCount}) => (
          <li key={id} className='nav-icon-item'>
            <img src={img} className='icon-hover' alt={`icon-${id}`} />
            {showDot && <span className='nav-icon-dot' aria-hidden='true' />}
            {typeof badgeCount === 'number' && badgeCount > 0 && (
              <span className='nav-icon-badge' aria-label={`${badgeCount} new notifications`}>
                {badgeCount}
              </span>
            )}
          </li>
        ))}
      </ul>

      <time>{dayjs().format('ddd MMM D h:mm A')}</time>
    </nav>
  )
}

export default Navbar 
