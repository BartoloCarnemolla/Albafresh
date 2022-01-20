import Layout from '@/components/Layout'

export default function ProdottiPage() {
  return (
    <Layout title='Prodotti'>
      <div>
        <div className='row text-center g-0'>
          <div className='col-xl-3 col-lg-4 col-md-3 col-sm-4 col-4 sidebar'>
            <h2>Categorie</h2>
          </div>
          <div className='col-xl-9 col-lg-8 col-md-9 col-sm-8 col-8 contenuto'>
            <h2>Prodotti</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}
