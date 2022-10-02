import { useState } from 'react'
import { Form } from './Form'
import { Book } from './Types'
import React from 'react'
import '../Stylesheets/Card.scss'

export type CardProps = {
  singleBook: Book
  onUpdate: (newBook: Book, bookKey: number) => void
  onDelete: (key: number) => void
}

export const Card = (props: CardProps) => {

  const [showEdit, setShowEdit] = useState(false)

  const showEditWindowForBook = () => {
    setShowEdit(true);
  }

  const updateBook = (event: React.FormEvent<HTMLFormElement>, newBook: Book) => {
    event.preventDefault();
    let bookKey = props.singleBook.key
    props.onUpdate(newBook, bookKey)
    setShowEdit(false)
  };

  return(
    <div className="single-card" key={props.singleBook.key}>
      <p className='title'>{props.singleBook.title}</p>
      <p className='author'>{props.singleBook.author}</p>
      <p className='genre-and-year'>{props.singleBook.year}, {props.singleBook.genre}</p>
      <div className='card-buttons'>
        <button id="edit" onClick={showEditWindowForBook}>Editieren</button>
        {showEdit && <Form handleFormSubmit={updateBook} /> }
        <button id="delete" onClick={()=> props.onDelete(props.singleBook.key)}>Löschen</button>
      </div>
    </div>
  )
}
