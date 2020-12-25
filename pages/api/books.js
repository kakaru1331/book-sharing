import books from '../../data/books'

export default function getBooks(req, res) {
  res.json(books)
}