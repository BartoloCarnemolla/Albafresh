import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  const Menu = () => {}

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark py-3 shadow fixed-top menu'>
        <div className='container'>
          <div className={styles.logo}>
            <Link href='/' className='navbar-brand'>
              <a>Catalogo</a>
            </Link>
          </div>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navmenu'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navmenu'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link href='/chisiamo'>
                  <a className='nav-link'>Chi siamo</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/prodotti'>
                  <a className='nav-link'>Prodotti</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/about'>
                  <a className='nav-link'>About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
