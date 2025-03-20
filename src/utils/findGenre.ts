export const findGenre = (
  ids: number[],
  genres: { id: number; name: string }[],
) => {
  return ids.map((id) => genres.find((genre) => genre.id === id));
};
