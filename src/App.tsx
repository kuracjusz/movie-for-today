import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Popular } from "./sections/Popular";
import { useDebounce } from "./hooks/useDebounce";
import { Modal } from "./components/Modal";
import { useMoviesList } from "./hooks/useMoviesList";
import { useGenres } from "./hooks/useGenres";
import { Trending } from "./sections/Trending";

function App() {
  const [search, setSearch] = useState(
    new URLSearchParams(location.search).get("s") || "",
  );
  const [page, setPage] = useState(
    Number(new URLSearchParams(location.search).get("page")) || 1,
  );
  const searchRequest = useDebounce(search);
  const [open, setOpen] = useState(false);

  const { movies, loading, trendingMovies } = useMoviesList({
    page,
    searchRequest,
  });
  const [movieId, setMovieId] = useState(0);
  const movie = movies.find((movie) => movie.id === movieId);
  const { genres } = useGenres();

  const onClick = (id: number) => {
    setOpen(true);
    setMovieId(id);
  };

  return (
    <main className="image bg-top bg-no-repeat px-20 pb-14">
      <Header search={search} setSearch={setSearch} />
      <div className="mt-10">
        <Trending movies={trendingMovies} />
      </div>
      <div className="mt-10">
        <Popular
          movies={movies}
          genres={genres}
          onClick={onClick}
          loading={loading}
        />
      </div>
      <img src="./1.svg" />
      <div className="mt-9 flex items-center justify-between text-2xl">
        <button
          className={`bg-dark-200 ${page === 1 && "invisible"} cursor-pointer rounded-lg p-4`}
          onClick={() => {
            history.pushState(
              {},
              "",
              `?page=${page - 1}${search ? `&s=${search}` : ""}`,
            );
            setPage(page - 1);
          }}
        >
          <img src="./arrow-right-tiny.svg" />
        </button>
        <span className="text-2xl">
          <span className="font-bold">{page}</span>
          <span className="text-[#9CA4AB]"> / 50</span>
        </span>
        <button
          className="bg-dark-200 cursor-pointer rounded-lg p-4"
          onClick={() => {
            history.pushState(
              {},
              "",
              `?page=${page + 1}${search ? `&s=${search}` : ""}`,
            );
            setPage(page + 1);
          }}
        >
          <div>
            <img
              className="text-text-300 rotate-180"
              src="./arrow-right-tiny.svg"
            />
          </div>
        </button>
      </div>
      {open ? <Modal setOpen={setOpen} movie={movie} genres={genres} /> : null}
    </main>
  );
}

export default App;
