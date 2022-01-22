import Link from 'next/link'
import Image from 'next/image'

export default function ProdottoItem({ prd }) {
  return (
    <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12 text-center'>
      <div className='card categoria-card'>
        <img
          src={prd.immagine}
          alt='zucchine'
          className='card-img-top categoria-card-img'
        />
        <div className='card-body'>
          <h4 className='card-title categoria-card-title'>{prd.descrizione}</h4>
        </div>
      </div>
    </div>
  )
}
