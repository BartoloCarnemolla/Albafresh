import styles from '@/styles/Showcase.module.css'

export default function Showcase() {
  return (
    <div className={styles.showcase}>
      <h1 className='mb-2'>Benvenuto in Catalogo</h1>
      <span className='bg-warning text-dark p-2 rounded h5'>
        Qui puoi consultare l'elenco dei nostri prodotti
      </span>
    </div>
  )
}
