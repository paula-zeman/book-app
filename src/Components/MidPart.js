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

  // const defaultValues = {
  //   title: 'Titeltest',
  //   author: 'TestAutor',
  //   year: 'Testjahr',
  //   genre: 'Testgenre'
  // }



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
        <CardList bookListArray={bookList}></CardList>
      </div>
    </main>
  )
}

export default MidPart;
