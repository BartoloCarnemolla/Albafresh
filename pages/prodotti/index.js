import Layout from '@/components/Layout'
import ProdottoItem from '@/components/ProdottoItem'
import { API_URL } from '@/config/index'

export default function CatalogoPage({ prodotti }) {
  return (
    <Layout title='Prodotti'>
      <div>
        <div className='row text-center list-categorie'>
          <div className='col-xl-3 col-lg-4 col-md-3 col-sm-4 col-4 sidebar'>
            <h2>Prodotti</h2>
            <div className='row text-center'>
              {/* Da file json  */}
              {prodotti.map((prd) => (
                <ProdottoItem key={prd.id} prd={prd} />
              ))}
              {/* End from json */}
            </div>
          </div>
          <div className='col-xl-9 col-lg-8 col-md-9 col-sm-8 col-8 contenuto'>
            <h2>Lavorazioni</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/prodotti`)
  const prodotti = await res.json()

  return {
    props: { prodotti: prodotti },
    revalidate: 1,
  }
}
