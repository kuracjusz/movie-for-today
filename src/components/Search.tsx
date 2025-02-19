export const Search = ({ setSearch }: { setSearch: (s: string) => void }) => {
  const page = new URLSearchParams(location.search).get("page");

  return (
    <div className="mt-8 flex w-full gap-3 rounded-lg bg-[#0F0D23] p-5 shadow-(--input-shadow)">
      <img src="./search.svg" alt="Search" />
      <input
        className="w-full placeholder:text-[--color-text-200] focus-visible:outline-none"
        placeholder="Search through 300+ movies online"
        onChange={(e) => {
          setSearch(e.target.value);
          history.pushState(
            {},
            "",
            `?page=${page}${e.target.value ? `&s=${e.target.value}` : ""}`,
          );
        }}
        value={new URLSearchParams(location.search).get("s") || ""}
      />
    </div>
  );
};
