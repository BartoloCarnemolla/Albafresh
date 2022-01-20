import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className='p-5  text-white text-center position-relative piede'>
      <div className='container'>
        <p>Copyright &copy; Catalogo 2022</p>
        <Link href='/about' className='position-absolute bottom-0 end-0 p-5'>
          About Catalogo
        </Link>
      </div>
    </footer>
  )
}
