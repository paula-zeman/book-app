import Form from './Form';
import CardList from './CardList';
import GenreList from './GenreList';
import Filter from './Filter';
import React, {useState} from 'react';
import '../Stylesheets/MidPart.scss'

function MidPart () {

  const [bookList, setBookList] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newYear, setNewYear] = useState('');
  const [newGenre, setNewGenre] = useState('');
  const [genreList, setGenreList] = useState([]);

  const updateTitle = event => {setNewTitle(event.target.value)};
  const updateAuthor = event => {setNewAuthor(event.target.value)};
  const updateYear = event => {setNewYear(event.target.value)};
  const updateGenre = event => {setNewGenre(event.target.value)};

  const updateCards = (event) => {
    event.preventDefault()
    if ((newTitle !== '') && (newAuthor !== '')) {
    setBookList(prevBookList => {
      return [{
        key: bookList.length + 1,
        title: newTitle,
        author: newAuthor,
        year: newYear,
        genre: newGenre
      }, ...prevBookList]
    })
    } else {
      alert('Title and author are required!')
      return false
    }

    if (!(genreList.includes(newGenre))) {
    setGenreList(prevGenreList => {
      return [newGenre, ...prevGenreList]
    })
    }

    setNewTitle('');
    setNewAuthor('');
    setNewYear('');
    setNewGenre('');
    // filterGenre(bookList);
  }

  const newValue = {
    title: newTitle,
    author: newAuthor,
    year: newYear,
    genre: newGenre
  }

  return (
    <main className="main-micro">
      <div className='sub-header-macro'>
      <GenreList genreList={genreList}/>
      <Filter />
      </div>
      <div className='form-macro'>
      <Form handleFormSubmit={updateCards} handleTitle={updateTitle} handleAuthor={updateAuthor}
        handleYear={updateYear} handleGenre={updateGenre} clearInputValue={newValue}>
      </Form>
      </div>
      <div className='card-macro'>
      <CardList bookListArray={bookList}></CardList>
      </div>
    </main>
  )
}

export default MidPart;
