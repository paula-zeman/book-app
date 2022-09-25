import '../Stylesheets/GenreList.scss';

export type GenreListProps = {
  genreList: string[]
}

export const GenreList = (props: GenreListProps) => {

  const uniqueGenre: string[] = []
  props.genreList.forEach(genre => {
    !uniqueGenre.includes(genre) && uniqueGenre.push(genre)
    }
  )
  return (
    <div className="genre-micro">
      {uniqueGenre.map(genre => {
        return (
          <div className="genre-card">{genre}</div>
          )
      })}
    </div>
  );
}
