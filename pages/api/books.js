import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  if (req.method === 'GET') {
    handleGET(res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/books
async function handleGET(res) {
  const books = await prisma.book.findMany()
  
  res.json(books)
}
