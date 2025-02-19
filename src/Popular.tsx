import { Movie, MovieBox } from "./components/MovieBox";
import { BoxLoader } from "./components/BoxLoader";

export const Popular = ({
  movies,
  onClick,
  loading,
}: {
  movies: Movie[];
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
              <MovieBox key={movie.id} movie={movie} onClick={onClick} />
            ))}
      </div>
    </section>
  );
};
