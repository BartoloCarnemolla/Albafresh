import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  const Menu = () => {};

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark py-3 shadow fixed-top menu">
        <div className="container-fluid">
          <div className={styles.logo}>
            <Link href="/" className="navbar-brand">
              <a>Catalogo</a>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto mx-2">
              <li className="nav-item">
                <a href="/chisiamo" className="nav-link">
                  Chi siamo{' '}
                </a>
              </li>
              <li className="nav-item">
                <a href="/prodotti" className="nav-link">
                  Prodotti
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
