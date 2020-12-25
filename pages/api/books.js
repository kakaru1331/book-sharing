import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function getBooks(req, res) {
  const db = await open({
    filename:'./db/book-sharing.db',
    driver: sqlite3.Database
  })

  const books = await db.all(`select * from book`)

  res.json(books)
}