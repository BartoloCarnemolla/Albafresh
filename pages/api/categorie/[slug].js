const { categorie } = require('./categorie.json')

export default (req, res) => {
  const cat = categorie.filter((ct) => ct.slug === req.query.slug)
  if (req.method === 'GET') {
    res.status(200).json(cat)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
