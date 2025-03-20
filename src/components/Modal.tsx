import { Fragment } from "react";
import { Genre, Movie } from "./MovieBox";
import { findGenre } from "../utils/findGenre";

const movieInformation = {
  Title: "Movie",
  Generes: ["Action", "Adventure", "Fantasy"],
  Overview:
    "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes: a survival game that has a whopping 45.6 billion-won prize at stake.",
  ReleaseDate: "2022-03-24",
  Countries: ["United States of America", "Australia"],
  Status: "Released",
  Language: ["English", "Spanish"],
  Budget: "200000000",
  Revenue: "0",
  Tagline:
    "The world's greatest heroes will finally receive the attention they deserve!",
  ProductionCompanies: ["DC Films", "Warner Bros. Pictures"],
};

const ModalRow = ({
  title,
  description,
  whiteDescription,
}: {
  title: string;
  description?: string | (string | undefined)[];
  whiteDescription?: boolean;
}) => {
  return (
    <div className="flex items-start gap-2">
      <span className="text-text-200 flex-1 text-lg">{title}</span>
      <span
        className={`text-text-300 flex flex-5 gap-2 self-center ${whiteDescription ? "leading-7 text-white" : ""}`}
      >
        {typeof description === "object"
          ? description.map((element, index) => (
              <Fragment key={element}>
                <span>{element}</span>
                {index < description.length - 1 && <span>•</span>}
              </Fragment>
            ))
          : description}
      </span>
    </div>
  );
};

export const Modal = ({
  setOpen,
  movie,
  genres,
}: {
  setOpen(open: boolean): void;
  movie?: Movie;
  genres: Genre[];
}) => {
  const genreName = movie ? findGenre(movie?.genre_ids, genres) : undefined;

  if (!movie) return;

  return (
    <>
      <div
        className="bg-dark-200 fixed top-0 left-0 flex h-screen w-screen cursor-pointer items-center opacity-80"
        onClick={() => setOpen(false)}
      />
      <dialog className="bg-dark-200 fixed top-1/2 right-20 left-20 flex w-fit -translate-y-1/2 transform flex-col justify-center justify-self-center rounded-xl p-12 shadow-(--modal-shadow) 2xl:max-w-[75%]">
        <h2 className="mb-4 text-4xl font-bold">{movie.title}</h2>
        <h3 className="text-text-200 mb-7 text-lg">
          2025 <span>•</span> PG-13 <span>•</span> 2h 43m
        </h3>
        <div className="flex flex-col gap-5">
          <div className="mb-2 flex flex-col gap-6 lg:flex-row">
            <div className="bg-text-200 flex-1 rounded-lg">
              <img
                className="h-full object-cover"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            </div>
            <div className="bg-text-200 flex-3 rounded-lg">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              />
            </div>
          </div>
          <div className="flex gap-26">
            <div className="flex flex-col gap-5">
              <ModalRow
                title="Generes"
                description={genreName?.map((genre) => genre?.name)}
              />
              <ModalRow
                title="Overview"
                description={movie.overview}
                whiteDescription
              />
              <ModalRow title="Release date" description={movie.release_date} />
              {/* <ModalRow
                title="Countries"
                description={movieInformation.Countries}
              /> */}
              <ModalRow title="Status" description={movieInformation.Status} />
              <ModalRow
                title="Language"
                description={movie.original_language}
              />
              {/* <ModalRow title="Budget" description={movieInformation.Budget} /> */}
              {/* <ModalRow
                title="Revenue"
                description={movieInformation.Revenue}
              /> */}
              {/* <ModalRow
                title="Tagline"
                description={movieInformation.Tagline}
              /> */}
              {/* <ModalRow
                title="Production Companies"
                description={movie.ProductionCompanies}
              /> */}
            </div>
            <a className="bg-gradient flex cursor-pointer items-center gap-1 self-start rounded-lg px-5 py-2.5 font-semibold whitespace-nowrap text-[#121212]">
              <span>Visit Homepage</span>
              <span className="w-[22px] rotate-180">
                <img src="./arrow-right-tiny-black.svg" />
              </span>
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
};
