import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Popular } from "./Popular";

function App() {
  const [search, setSearch] = useState(
    new URLSearchParams(location.search).get("search") || "",
  );
  const [page, setPage] = useState(
    Number(new URLSearchParams(location.search).get("page")) || 1,
  );

  return (
    <main className="image bg-top bg-no-repeat px-20 pb-14">
      <Header setSearch={setSearch} />
      <div className="mt-10">
        <Popular page={page} search={search} />
      </div>
      <div className="mt-9 flex items-center justify-between text-2xl">
        <button
          className={`bg-dark-200 ${page === 1 && "invisible"} cursor-pointer rounded-lg p-4`}
          onClick={() => {
            history.pushState({}, "", `?page=${+page - 1}`);
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
            console.log("Next page");
            history.pushState({}, "", `?page=${+page + 1}`);
            setPage(page + 1);
          }}
        >
          <div>
            <img className="rotate-180" src="./arrow-right-tiny.svg" />
          </div>
        </button>
      </div>
    </main>
  );
}

export default App;
