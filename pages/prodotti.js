import Layout from '@/components/Layout'

export default function ProdottiPage() {
  return (
    <Layout title='Prodotti'>
      <div>
        <div className='row text-center g-2'>
          <div className='col-md bg-secondary'>
            <h3>Sidebar</h3>
          </div>
          <div className='col-md bg-warning'>
            <h3>Content</h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}
