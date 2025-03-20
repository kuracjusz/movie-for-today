import { GET } from "./get";

export const getGenres = async () => {
  return GET(`${import.meta.env.VITE_API_URL}/genre/movie/list`);
};
