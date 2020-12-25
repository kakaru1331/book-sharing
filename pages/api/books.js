import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default async function getBooks(req, res) {
  const db = await open({
    filename: path.join(publicRuntimeConfig.PROJECT_ROOT, '/db/book-sharing.db'),
    driver: sqlite3.Database
  })

  const books = await db.all(`select * from book`)

  res.json(books)
}