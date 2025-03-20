import { Movie } from "../components/MovieBox";
import { GET } from "./get";

export const getMovies = ({
  page,
  search,
}: {
  page: number;
  search: string;
}): Promise<{ results: Movie[] }> => {
  return GET(
    search
      ? `${import.meta.env.VITE_API_URL}/search/movie?page=${page}&query=${search}`
      : `${import.meta.env.VITE_API_URL}/discover/movie?page=${page}`,
  );
};
