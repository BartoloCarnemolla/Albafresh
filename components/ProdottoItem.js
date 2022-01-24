import Link from 'next/link'
import Image from 'next/image'

export default function ProdottoItem({ prd }) {
  return (
    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-center'>
      <div className='card categoria-card'>
        <Image
          src={prd.immagine ? prd.immagine : '/images/default.png'}
          // src={'/images/default.png'} evt.image.formats.thumbnail.url
          className='card-img-top categoria-card-img'
          width={100}
          height={100}
        />
        <div className='card-body categoria-card-body'>
          <Link href={`/prodotti/${prd.slug}`}>
            <a className='card-title categoria-card-title h4'>
              {prd.descrizione}
            </a>
          </Link>
          {/* <h4 className='card-title categoria-card-title'></h4> */}
        </div>
      </div>
    </div>
  )
}
