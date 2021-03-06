import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='p-5  text-white text-center position-relative piede'>
      <div className='container'>
        <p>Copyright &copy; Catalogo 2022</p>
        <Link href='/about' className='position-absolute bottom-0 end-0 p-5'>
          About Albafresh
        </Link>
      </div>
    </footer>
  )
}
