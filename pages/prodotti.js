import Layout from '@/components/Layout'

export default function ProdottiPage() {
  return (
    <Layout title='Prodotti'>
      <div>
        <div className='row text-center g-0'>
          <div className='col-xl-3 col-lg-4 col-md-3 col-sm-4 col-4 bg-white'>
            <div className='h6 text-center text-dark'>CATEGORIE</div>
          </div>
          <div className='col-xl-9 col-lg-8 col-md-9 col-sm-8 col-8 bg-light'>
            <div className='h6 text-center text-success'>PRODOTTI</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
