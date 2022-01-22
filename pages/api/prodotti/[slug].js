const { prodotti } = require('./prodotti.json')

export default (req, res) => {
  const prd = prodotti.filter((pr) => pr.slug === req.query.slug)
  if (req.method === 'GET') {
    res.status(200).json(prd)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
