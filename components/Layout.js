import { useEffect } from 'react'
import Head from 'next/head'
import { Router, useRouter } from 'next/router'

import Navbar from './Navbar'
import Footer from './Footer'
import Showcase from './Showcase'
import styles from '@/styles/Layout.module.css'

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Navbar />
      {router.pathname === '/' && <Showcase />}

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Catologo Web',
  description: 'Browse Produtcs in Catolog with Web Browser',
  keywords: 'catalog, products',
}
