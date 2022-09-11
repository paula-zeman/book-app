import '../Stylesheets/GenreList.scss';

function GenreList({genreList}) {

  const uniqueGenreArray = []
  genreList.forEach(genre => {
    !uniqueGenreArray.includes(genre) && uniqueGenreArray.push(genre)
    }
  )
  return (
  <div className="genre-micro">
    {uniqueGenreArray.map(genre => {
      return (
        <div className="genre-card">{genre}</div>
        )
    })}
  </div>
  );
}

export default GenreList;
