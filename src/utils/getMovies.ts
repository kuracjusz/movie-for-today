export const gethMovies = async ({
  page,
  search,
}: {
  page: number;
  search: string;
}) => {
  return (
    await (
      await fetch(
        search
          ? `${import.meta.env.VITE_API_URL}/search/movie?page=${page}&query=${search}`
          : `${import.meta.env.VITE_API_URL}/discover/movie?page=${page}`,
        {
          headers: {
            authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        },
      )
    ).json()
  ).results;
};
