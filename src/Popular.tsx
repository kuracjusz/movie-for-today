import { useEffect, useState } from "react";
import { Movie, MovieBox } from "./components/MovieBox";
import { gethMovies } from "./utils/getMovies";
import { BoxLoader } from "./components/BoxLoader";

export const Popular = ({ page, search }: { page: number; search: string }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setMovies(await gethMovies({ page, search }));
      setLoading(false);
    })();
  }, [page, search]);

  console.log(movies);

  return (
    <section>
      <h2 className="h2 mb-9">Popular</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <BoxLoader key={index} />
            ))
          : movies.map((movie) => <MovieBox key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
};
