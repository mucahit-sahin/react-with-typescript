import React from "react";
import { Movie } from "../types/movies";

interface CardItemProps {
  movie: Movie;
}

const CardItem = ({ movie }: CardItemProps) => {
  const { poster_path, title, vote_average, release_date } = movie;
  return (
    <div className="flex flex-col w-full">
      <div className="">
        <img
          className="w-full"
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          alt="poster"
        />
      </div>
      <span className="text-center mt-2">{title}</span>
      <div className="flex flex-1 w-full flex-row">
        <span className="flex items-start bg-yellow-500 rounded p-2">
          {vote_average}
        </span>
        <span className="ml-auto flex items-center">{release_date}</span>
      </div>
    </div>
  );
};

export default CardItem;