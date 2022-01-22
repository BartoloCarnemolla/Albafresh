import Link from 'next/link'
import Image from 'next/image'
import { API_URL } from '@/config/index'

export default function ProdottoPage({ prd }) {
  return (
    <div className='prodotto-header'>
      <div>
        <div className='prodotto-foto'>
          <Image src={prd.immagine} height={140} width={140} />
        </div>
        <h2>Singolo prodotto</h2>
        <p>{prd.descrizione}</p>
        <div>
          <small>Disponibilità</small>
        </div>
      </div>
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
