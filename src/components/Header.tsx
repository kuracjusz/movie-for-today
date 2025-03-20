import { Search } from "./Search";

export const Header = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (s: string) => void;
}) => {
  return (
    <header className="mx-auto flex w-[640px] flex-col items-center justify-center py-[3rem]">
      <img src="./logo.svg" alt="logo" />
      <img
        className="mt-[4rem] h-[270px] w-[480px] object-cover"
        src="./hero-img.png"
        alt="logo"
      />
      <h1 className="h1 mt-4 text-center">
        Find <span className="text-gradient">Movies</span> You'll Love Without
        the Hassle
      </h1>
      <Search search={search} setSearch={setSearch} />
    </header>
  );
};
