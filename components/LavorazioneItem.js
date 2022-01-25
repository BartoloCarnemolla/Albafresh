import Link from 'next/link'
import Image from 'next/image'

export default function LavorazioneItem({ lav }) {
  return (
    // <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-center'>
    <div className='card lavorazione-card'>
      <Image
        src={lav.immagine}
        className='card-img-top lavorazione-card-img'
        width={250}
        height={250}
      />

      <div className='card-body lavorazione-card-body'>
        <Link href={`/lavorazioni/${lav.slug}`}>
          <a className='card-title lavorazione-card-title h4'>
            {lav.descrizione}
          </a>
        </Link>
        {/* <h4 className='card-title categoria-card-title'></h4> */}
      </div>
    </div>
    // </div>
  )
}
