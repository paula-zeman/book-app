import '../Stylesheets/CardList.scss';

function Card(props) {
  return (
    <div className="card-list">
      {props.bookListArray.map(book => {
        return (
          <div className="single-card">
              <p><b>{book.key}</b></p>
              <p className='title'>{book.title}</p>
              <p className='author'>{book.author}</p>
              <p>{book.year}, {book.genre}</p>
          </div>
        )}
      )}
        </div>
  );
}

export default Card;
