import { useEffect, useState } from "react";
import { Genre } from "../components/MovieBox";
import { getGenres } from "../utils/getGenres";

export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setGenres((await getGenres()).genres);
      setLoading(false);
    })();
  }, []);

  return { genres, loading };
};
