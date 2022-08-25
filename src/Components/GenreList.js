import '../Stylesheets/GenreList.scss';

function GenreList(props) {

  return (
  <div className="genre-micro">
    {props.genreList.map(genre => {
      return (
        <div className="genre-card">{genre}</div>
        )
    })}
  </div>
  );
}

export default GenreList;
