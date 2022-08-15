import '../Stylesheets/CardList.css';

function Card(props) {
  return (
    <div className="card-list">
      {props.bookListArray.map(book => {
        return (
          <div className="single-card">
            <div className="left-column">
              <p>Entry Nr. </p>
              <p>Title </p>
              <p>Author </p>
              <p>Year </p>
              <p>Genre </p>
            </div>
            <div className="right-column">
              <p>{book.key}</p>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>{book.year}</p>
              <p>{book.genre}</p>
            </div>
          </div>
        )}
      )}
        </div>
  );
}

export default Card;
