export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  genre_ids: number[];
};

export const MovieBox = ({ movie }: { movie: Movie }) => {
  return (
    <article className="movie-box">
      <img
        className="flex-auto"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Poster"
      />
      <p className="basis-12">{movie.title}</p>
      <div>4.6 Action Movie</div>
    </article>
  );
};
