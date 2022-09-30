import { useState } from 'react';
import { Form } from './Form';
import { Book } from './Types'

export type CardProps = {
  singleBook: Book
  onUpdate: (newBook: Book) => void
  onDelete: (key: number) => void
}

export const Card = (props: CardProps) => {

  const [showEdit, setShowEdit] = useState(false);

  const showEditWindowForBook = () => {
    setShowEdit(true);
  }

  const updateBook = (event: React.FormEvent<HTMLFormElement>, newBook: Book) => {
    event.preventDefault();
    props.onUpdate(newBook)
    setShowEdit(false)
  };

  return(
    <div className="single-card" key={props.singleBook.key}>
      <p><b>{props.singleBook.key}</b></p>
      <p className='title'>{props.singleBook.title}</p>
      <p className='author'>{props.singleBook.author}</p>
      <p>{props.singleBook.year}, {props.singleBook.genre}</p>
      <button onClick={showEditWindowForBook}>Editieren</button>
      {showEdit && <Form handleFormSubmit={updateBook}/> }
      <button onClick={()=> props.onDelete(props.singleBook.key)}>Löschen</button>
    </div>
  )
}
