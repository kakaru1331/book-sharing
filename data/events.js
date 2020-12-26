import books from './books'

const events = [
  {
    eventID: 1,
    bookID: 1
  },
  {
    eventID: 2,
    bookID: 2
  },
  {
    eventID: 3,
    bookID: 3
  },
  {
    eventID: 4,
    bookID: 4
  },
  {
    eventID: 5,
    bookID: 5
  },
  {
    eventID: 6,
    bookID: 6
  },
  {
    eventID: 7,
    bookID: 7
  },
  {
    eventID: 8,
    bookID: 8
  },
  {
    eventID: 9,
    bookID: 9
  },
  {
    eventID: 10,
    bookID: 10
  },
  {
    eventID: 11,
    bookID: 11
  },
  {
    eventID: 12,
    bookID: 12
  },
  {
    eventID: 13,
    bookID: 13
  },
  {
    eventID: 14,
    bookID: 14
  },
  {
    eventID: 15,
    bookID: 15
  },
  {
    eventID: 16,
    bookID: 16
  },
  {
    eventID: 17,
    bookID: 17
  },
  {
    eventID: 18,
    bookID: 18
  },
  {
    eventID: 19,
    bookID: 19
  },
  {
    eventID: 20,
    bookID: 20
  },
  {
    eventID: 21,
    bookID: 21
  },
  {
    eventID: 22,
    bookID: 22
  },
  {
    eventID: 23,
    bookID: 23
  },
  {
    eventID: 24,
    bookID: 24
  },
].map((event) => {
  const book = books.find((book) => event.bookID === book.bookID)
  
  return { 
    ...event,
    ...book
  }
})

export default events
