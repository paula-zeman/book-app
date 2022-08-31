import '../Stylesheets/CardList.scss';
// import React, {useState} from 'react';
import Card from './Card';

function CardList(props) {

  const updateBook = (updatedBook) => {
    props.bookListArray.find((book) => {
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

  const deleteBook = (clickedBookKey) => {
    props.onDeleteBook(clickedBookKey)
  }

  return (
    <div className="card-list">
      {props.bookListArray.map(book => {
        return (
          <Card key={book.key} singleBook={book} onUpdate={updateBook} onDelete={deleteBook}/>
        )}
      )}
    </div>
  );
}

export default CardList;
