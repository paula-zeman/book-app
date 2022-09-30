import '../Stylesheets/CardList.scss'
import { Card } from './Card'
import { Book } from './Types'

export type CardListProps = {
  bookList: Book[]
  onDeleteBook: (key: number) => void
}

export const CardList = (props: CardListProps) => {

  const updateBook = (updatedBook: Book, bookKey: number) => {
    props.bookList.find((book: Book) => {
      if (book.key === bookKey) {
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

  const deleteBook = (clickedBookKey: number) => {
    props.onDeleteBook(clickedBookKey)
  }

  return (
    <div className="card-list">
      {props.bookList.map(book => {
        return (
          <Card key={book.key} singleBook={book} onUpdate={updateBook} onDelete={deleteBook}/>
        )}
      )}
    </div>
  );
}
