import { Client, Databases, ID } from "appwrite";
import { Movie } from "./components/MovieBox";

const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID;

const client = new Client();
client.setProject(PROJECT_ID);
const database = new Databases(client);

export const setTrendingMovie = async (search: string, movie: Movie) => {
  await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
    search,
    count: 1,
    poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    movie_id: movie.id,
  });
};

export const updateSearchCount = async (search: string, movie: Movie) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID);
    console.log(result);
    if (result.documents.length === 0) {
      setTrendingMovie(search, movie);
    } else {
      const doc = result.documents.find((doc) => doc.movie_id === movie.id);
      console.log(search, movie);
      if (doc) {
        await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
          count: doc.count + 1,
        });
      } else {
        setTrendingMovie(search, movie);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID);
    return result.documents;
  } catch (error) {
    console.error(error);
  }
};
