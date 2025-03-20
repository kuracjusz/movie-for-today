import { findGenre } from "../utils/findGenre";

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

export type Genre = {
  id: number;
  name: string;
};

export const MovieBox = ({
  movie,
  genres,
  onClick,
}: {
  movie: Movie;
  genres: Genre[];
  onClick(open: number): void;
}) => {
  const genreName = findGenre(movie.genre_ids, genres);

  return (
    <article className="movie-box" onClick={() => onClick(movie.id)}>
      {movie.poster_path ? (
        <img
          className="flex-auto"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="Poster"
        />
      ) : (
        <div className="flex h-full items-center justify-center">No Poster</div>
      )}
      <p className="basis-12">{movie.title}</p>
      <div className="flex items-center gap-2">
        <img src="./star.svg" alt="star" /> {movie.vote_average.toPrecision(2)}
        <span>{genreName[0]?.name}</span>
      </div>
    </article>
  );
};
