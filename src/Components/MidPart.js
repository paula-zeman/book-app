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
  // const updateTitle = event => {setNewTitle(event.target.value)};
  // const updateAuthor = event => {setNewAuthor(event.target.value)};
  // const updateYear = event => {setNewYear(event.target.value)};
  // const updateGenre = event => {setNewGenre(event.target.value)};

  const updateCards = (event, newBook) => {
    event.preventDefault()
    console.log(newBook)
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
    }
  }

  const defaultValues = {
    title: 'Titeltest',
    author: 'TestAutor',
    year: 'Testjahr',
    genre: 'Testgenre'
  }

  const updateBook = (updatedBook) => {
    bookList.find((book) => {
      if (book.key === updatedBook.key) {
        book.title = updatedBook.title
        book.author = updatedBook.author
        book.year = updatedBook.year
        book.genre = updatedBook.genre
        return (
          book
        )
      } else {
        return null
      }
    })
  }

  const deleteBook = (clickedBook) => {
    // setBookList((prevBookList => {
    //   const newBookList = prevBookList.filter(book => {
    //     return book.key !== clickedBook
    //   }
    //   )
    //   return newBookList
    // }))
  }

  return (
    <main className="main-micro">
      <div className='sub-header-macro'>
        <GenreList genreList={genreList} />
        <Filter />
      </div>
      <div className='form-macro'>
        <button onClick={() => setFormVisibility(!formVisibility)}>Add Book?</button>
        {formVisibility && <Form handleFormSubmit={updateCards} defaultValues={defaultValues} />}
      </div>
      <div className='card-macro'>
        <CardList bookListArray={bookList} onUpdateBook={updateBook} onDeleteBook={deleteBook}></CardList>
      </div>
    </main>
  )
}

export default MidPart;
