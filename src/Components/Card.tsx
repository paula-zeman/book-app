import { useState } from 'react';
import { Form } from './Form';

export const Card = ({singleBook, onUpdate, onDelete}) => {

  const [showEdit, setShowEdit] = useState(false);

  const showEditWindowForBook = () => {
    setShowEdit(true);
  }


  const updateBook = (event, newBook) => {
    event.preventDefault();
    onUpdate(newBook)
    setShowEdit(false)
  };


  return(

    <div className="single-card" key={singleBook.key}>
      <p><b>{singleBook.key}</b></p>
      <p className='title'>{singleBook.title}</p>
      <p className='author'>{singleBook.author}</p>
      <p>{singleBook.year}, {singleBook.genre}</p>
      <button onClick={showEditWindowForBook}>Editieren</button>
      {showEdit && <Form handleFormSubmit={updateBook}/> }
      <button onClick={()=> onDelete(singleBook.key)}>Löschen</button>
    </div>
  )
}