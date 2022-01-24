const { lavorazioni } = require('./lavorazioni.js')

export default (req, res) => {
  const lav = lavorazioni.filter((lv) => lv.slug === req.query.slug)
  if (req.method === 'GET') {
    res.status(200).json(lav)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
