import Layout from '@/components/Layout'
import LavorazioneItem from '@/components/LavorazioneItem'
import { API_URL } from '@/config/index'

export default function LavorazionePage({ lavorazioni }) {
  return (
    <div className='container'>
      <div className='row gap-4'>
        {/* <div className='col-xl-6 col-lg-8 col-md-6 col-sm-8 col-8'> */}
        {/* Da file json */}
        {lavorazioni.map((lav) => (
          <LavorazioneItem key={lav.id} lav={lav} />
        ))}
        {/* End from json */}
      </div>
    </div>
    // </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/lavorazioni`)
  const lavorazioni = await res.json()

  return {
    props: { lavorazioni: lavorazioni },
    revalidate: 1,
  }
}
