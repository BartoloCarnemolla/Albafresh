import Layout from '../components/Layout'

export default function ProdottiPage() {
  return (
    <Layout title='Prodotti'>
      <div>
        <div className='row text-center g-0 list-categorie'>
          <div className='col-xl-3 col-lg-4 col-md-3 col-sm-4 col-4 sidebar'>
            <h2>Categorie</h2>
            <div className='row text-center g-2 m-2'>
              <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-center'>
                <div className='card categoria-card'>
                  <img
                    src='/images/cherry.jpeg'
                    alt='ciliegino'
                    className='card-img-top categoria-card-img'
                  />
                  <div className='card-body'>
                    <h4 className='card-title categoria-card-title'>
                      Ciliegino
                    </h4>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-center'>
                {' '}
                <div className='card categoria-card'>
                  <img
                    src='/images/melanzane.jpeg'
                    alt='melanzane'
                    className='card-img-top categoria-card-img'
                  />
                  <div className='card-body'>
                    <h4 className='card-title categoria-card-title'>
                      Melanzane
                    </h4>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-center'>
                <div className='card categoria-card'>
                  <img
                    src='/images/zucchini.jpeg'
                    alt='zucchine'
                    className='card-img-top categoria-card-img'
                  />
                  <div className='card-body'>
                    <h4 className='card-title categoria-card-title'>
                      Zucchine
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-9 col-lg-8 col-md-9 col-sm-8 col-8 contenuto'>
            <h2>Prodotti</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}
