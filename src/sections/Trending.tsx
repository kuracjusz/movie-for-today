import { Models } from "appwrite";

export const Trending = ({
  movies,
}: {
  movies: Models.Document[] | undefined;
}) => {
  return (
    <section className="trending">
      <h2 className="h2 mb-9">Trending</h2>

      <ul>
        {movies
          ?.sort((a, b) => b.count - a.count)
          .map((movie, index) => (
            <li key={index}>
              <p>{index + 1}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
