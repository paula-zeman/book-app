import { Form } from './Form'
import { CardList } from './CardList'
import { GenreList } from './GenreList'
import { useState } from 'react'
import '../Stylesheets/MidPart.scss'
import { Book } from './Types'
import React from 'react'

export const MidPart = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [genreList, setGenreList] = useState<string[]>([]);
  const [formVisibility, setFormVisibility] = useState(false)

  const updateCards = (event: React.FormEvent<HTMLFormElement>, newBook: Book) => {
    event.preventDefault()
    setBookList(prevBookList => {
      return [{
        ...newBook,
        key: bookList.length + 1
      }, ...prevBookList]
    })

    if (!(genreList.includes(newBook.genre))) {
      setGenreList(prevGenreList => {
        return [newBook.genre, ...prevGenreList]
      })
    } else {
      return null
    }
  }

  const deleteBookMethod = (key: number) => {
    console.log(key)
      const newList = bookList.filter((book) => book.key !== key)
      setBookList(newList)
      const newGenreList = newList.map((book) => book.genre)
      console.log(newGenreList)
      setGenreList(newGenreList)
  }

  return (
    <main className="main-micro">
      <div className='genre-list-macro'>
        <GenreList genreList={genreList} />
      </div>
      <div className='form-macro'>
        <button onClick={() => setFormVisibility(!formVisibility)}>Add Book?</button>
        {formVisibility && <Form handleFormSubmit={updateCards}/>}
      </div>
      <div className='card-list-macro'>
        <CardList bookList={bookList} onDeleteBook={deleteBookMethod}></CardList>
      </div>
    </main>
  )
}
