import Form from './Form';
import CardList from './CardList';
import GenreList from './GenreList';
import Filter from './Filter';
import React, { useState } from 'react';
import '../Stylesheets/MidPart.scss'

function MidPart() {

  const [bookList, setBookList] = useState([]);

  const [genreList, setGenreList] = useState([]);
  const [formVisibility, setFormVisibility] = useState(false);

  const updateCards = (event, newBook) => {
    event.preventDefault()
    setBookList(prevBookList => {
      return [{
        ...newBook,
        key: bookList.length + 1,
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

  const deleteBookMethod = (key) => {
    console.log(key)
      const newList = bookList.filter((book) => book.key !== key)
      setBookList(newList)
      const newGenreList = newList.map((book) => book.genre)
      console.log(newGenreList)
      setGenreList(newGenreList)
  }

  return (
    <main className="main-micro">
      <div className='sub-header-macro'>
        <GenreList genreList={genreList} />
        <Filter />
      </div>
      <div className='form-macro'>
        <button onClick={() => setFormVisibility(!formVisibility)}>Add Book?</button>
        {formVisibility && <Form handleFormSubmit={updateCards} />}
      </div>
      <div className='card-macro'>
        <CardList bookListArray={bookList} onDeleteBook={deleteBookMethod}></CardList>
      </div>
    </main>
  )
}

export default MidPart;
