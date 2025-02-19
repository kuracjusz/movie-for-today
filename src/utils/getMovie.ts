export const getMovie = async (id: string) => {
  return (
    await (
      await fetch(`${import.meta.env.VITE_API_URL}/find/${id}`, {
        headers: {
          authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      })
    ).json()
  ).results;
};
