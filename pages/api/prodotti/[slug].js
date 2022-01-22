import Link from 'next/link'
import Image from 'next/image'
import { API_URL } from '@/config/index'

export default function ProdottoPage({ prd }) {
  return (
    <div>
      <h2>Singolo prodotto</h2>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/prodotti`)
  const prodotti = await res.json()
  const paths = prodotti.map((prd) => ({
    params: { slug: prd.slug },
  }))
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/prodotti/${slug}`)
  const prodotti = await res.json()
  return {
    props: {
      prd: prodotti[0],
      revalidate: 1,
    },
  }
}
