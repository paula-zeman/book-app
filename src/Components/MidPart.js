import Form from './Form';
import CardList from './CardList';
import React, {useState} from 'react';

function MidPart () {

  const [bookList, setBookList] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newYear, setNewYear] = useState('');
  const [newGenre, setNewGenre] = useState('');

  const updateTitle = (event) => {setNewTitle(event.target.value)};
  const updateAuthor = (event) => {setNewAuthor(event.target.value)};
  const updateYear = (event) => {setNewYear(event.target.value)};
  const updateGenre = (event)=> {setNewGenre(event.target.value)};


  const updateCards = (event) => {
    event.preventDefault()
    setBookList(prevBookList => {
      return [{
        key: bookList.length,
        title: newTitle,
        author: newAuthor,
        year: newYear,
        genre: newGenre
      }, ...prevBookList]
    });
  }

  return (
    <main className="card-micro">
      <Form handleFormSubmit={updateCards} handleTitle={updateTitle} handleAuthor={updateAuthor}
        handleYear={updateYear} handleGenre={updateGenre}>
      </Form>
      <div className='card-macro'>
      <CardList bookListArray={bookList}></CardList>
      </div>
    </main>
  )
}

export default MidPart;
