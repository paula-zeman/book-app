import '../Stylesheets/Form.scss'
import {useState} from 'react'
import { Book } from './Types'
import React from 'react'

export type FormProps = {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>, newBook: Book) => void
}

export const Form = (props: FormProps) => {

  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newYear, setNewYear] = useState('')
  const [newGenre, setNewGenre] = useState('')

  const updateTitle = (event: React.ChangeEvent<HTMLInputElement>) => {setNewTitle(event.target.value)}
  const updateAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {setNewAuthor(event.target.value)}
  const updateYear = (event: React.ChangeEvent<HTMLInputElement>) => {setNewYear(event.target.value)}
  const updateGenre = (event: React.ChangeEvent<HTMLInputElement>) => {setNewGenre(event.target.value)}



  const handleInternalSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const newBook = {
      key: 0,
      title: newTitle,
      author: newAuthor,
      year: newYear,
      genre: newGenre,
    };
    props.handleFormSubmit(event, newBook)

    setNewTitle('')
    setNewAuthor('')
    setNewYear('')
    setNewGenre('')
  }
  return (
      <div className="form-with-button">

        <form onSubmit={handleInternalSubmit} action="" className="form-micro">
              <input onChange={updateTitle} className="form-micro__title" type="text" name="title" id="title" placeholder="Title" value={newTitle} required/>
              <input onChange={updateAuthor} className="form-micro__author" type="text" name="author" id="author" placeholder="Author" value={newAuthor} required/>
              <input onChange={updateYear} className="form-micro__year" type="text" name="year" id="year" placeholder="Year" value={newYear} required/>
              <input onChange={updateGenre} className="form-micro__genre" type="text" name="genre" id="genre" placeholder="Genre" value={newGenre} required/>
              <button className="form-micro__button" type="submit">+</button>
          </form>
      </div>
  );
}
