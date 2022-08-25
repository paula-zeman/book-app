import '../Stylesheets/CardList.scss';
import React, {useState} from 'react';
import Form from './Form';

function CardList(props) {
  const [showEdit, setShowEdit] = useState(false);
  const updateBook = (event, newBook) => {
    event.preventDefault();
    props.onUpdateBook(newBook)
    setShowEdit(false)
    // update the bookList with new info
    // close edit window
  };


  const deleteBook = (book) => {
    props.onDeleteBook(book)
  }

  const showEditWindowForBook = () => {
    setShowEdit(true);
    };

  return (
    <div className="card-list">
      {props.bookListArray.map(book => {
        return (
          <div className="single-card" key={book.key}>
              <p><b>{book.key}</b></p>
              <p className='title'>{book.title}</p>
              <p className='author'>{book.author}</p>
            <p>{book.year}, {book.genre}</p>
            <button onClick={showEditWindowForBook}>Editieren</button>
            {showEdit && <Form handleFormSubmit={updateBook} defaultValues={book} /> }
            <button onClick={deleteBook(book)}>Löschen</button>
          </div>
        )}
      )}
        </div>
  );
}

export default CardList;
