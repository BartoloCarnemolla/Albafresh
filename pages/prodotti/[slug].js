import Link from 'next/link'
import Image from 'next/image'
import { API_URL } from '@/config/index'
import LavorazionePage from 'pages/lavorazioni'

export default function ProdottoPage({ prd, lavorazioni }) {
  return (
    <div className='prodotto-header'>
      <div>
        <div className='prodotto-foto'>
          <Image
            src={prd.immagine}
            height={140}
            width={140}
            className='prodotto-foto'
          />
        </div>
        <h2>{prd.descrizione}</h2>
        <div>
          <small>Disponibilità</small>
        </div>
        <Link href='/prodotti'>
          <a className='btn btn-outline bg-success'>Back</a>
        </Link>

        {/* <LavorazionePage lavorazioni={lavorazioni} /> */}
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
