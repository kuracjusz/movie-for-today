import { GET } from "./get";

export const getMovie = async (id: string) => {
  return (
    await (await GET(`${import.meta.env.VITE_API_URL}/find/${id}`)).json()
  ).results;
};
