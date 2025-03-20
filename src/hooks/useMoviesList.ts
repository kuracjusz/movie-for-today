import { useEffect, useState } from "react";
import { Movie } from "../components/MovieBox";
import { getMovies } from "../utils/getMovies";
import { getTrendingMovies, updateSearchCount } from "../appwrite";
import { Models } from "appwrite";

export const useMoviesList = ({
  page,
  searchRequest,
}: {
  page: number;
  searchRequest: string;
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<Models.Document[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setMovies((await getMovies({ page, search: searchRequest })).results);
      setTrendingMovies(await getTrendingMovies());
      if (searchRequest && movies.length > 0) {
        await updateSearchCount(searchRequest, movies[0]);
      }
      setLoading(false);
    })();
  }, [page, searchRequest]);

  return { movies, loading, trendingMovies };
};
