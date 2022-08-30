import React, {useState} from 'react';
import Form from './Form';

function Card(props) {

  const [showEdit, setShowEdit] = useState(false);

  const deleteBook = (book) => {
    props.onDelete(book)
  }

  const showEditWindowForBook = () => {
    setShowEdit(true);
  }


  const updateBook = (event, newBook) => {
    event.preventDefault();
    props.onUpdate(newBook)
    setShowEdit(false)
    // update the bookList with new info
    // close edit window
  };


  return(

    <div className="single-card" key={props.singleBook.key}>
              <p><b>{props.singleBook.key}</b></p>
              <p className='title'>{props.singleBook.title}</p>
              <p className='author'>{props.singleBook.author}</p>
            <p>{props.singleBook.year}, {props.singleBook.genre}</p>
            <button onClick={showEditWindowForBook}>Editieren</button>
            {showEdit && <Form handleFormSubmit={updateBook}/> }
            <button onClick={deleteBook(props.singleBook)}>Löschen</button>
          </div>
  )
}

export default Card;
