import { Genre, Movie, MovieBox } from "../components/MovieBox";
import { BoxLoader } from "../components/BoxLoader";

export const Popular = ({
  movies,
  genres,
  onClick,
  loading,
}: {
  movies: Movie[];
  genres: Genre[];
  onClick(open: number): void;
  loading: boolean;
}) => {
  return (
    <section>
      <h2 className="h2 mb-9">Popular</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <BoxLoader key={index} />
            ))
          : movies.map((movie) => (
              <MovieBox
                key={movie.id}
                movie={movie}
                genres={genres}
                onClick={onClick}
              />
            ))}
      </div>
    </section>
  );
};
