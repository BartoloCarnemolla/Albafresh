import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  const Menu = () => {}

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark py-2 shadow fixed-top menu'>
        <div className='container-fluid'>
          <div className={styles.logo}>
            <Link href='/' className='navbar-brand'>
              <a>
                <Image
                  src='/images/logo_albabio_bianco.png'
                  height={43}
                  width={85}
                />
              </a>
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
                  <a className='nav-link'>Ortaggi</a>
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
