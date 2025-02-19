export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
  video: boolean;
  original_language: string;
};

export const MovieBox = ({
  movie,
  onClick,
}: {
  movie: Movie;
  onClick(open: number): void;
}) => {
  return (
    <article className="movie-box" onClick={() => onClick(movie.id)}>
      <img
        className="flex-auto"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Poster"
      />
      <p className="basis-12">{movie.title}</p>
      <div className="flex items-center gap-2">
        <img src="./star.svg" alt="star" /> {movie.vote_average.toPrecision(2)}
        <span>Action Movie</span>
      </div>
    </article>
  );
};
