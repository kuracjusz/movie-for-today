import { useEffect, useState } from "react";

const gethMovies = async ({
  page,
  search,
}: {
  page: number;
  search: string;
}) => {
  return (
    await (
      await fetch(
        `${import.meta.env.VITE_API_URL}/discover/movie?page=${page}&s=${search}`,
        {
          headers: {
            authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        },
      )
    ).json()
  ).results;
};

type Movie = {
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
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Poster"
      />
      <p>{movie.title}</p>
      <div>4.6 Action Movie</div>
    </article>
  );
};

export const Popular = ({ page, search }: { page: number; search: string }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    (async () => setMovies(await gethMovies({ page, search })))();
  }, [page, search]);

  console.log(movies);

  return (
    <section>
      <h2 className="h2 mb-9">Popular</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
          <MovieBox key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};
