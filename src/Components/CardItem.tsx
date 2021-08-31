import React from "react";
import { Movie } from "../types/movies";

interface CardItemProps {
  movie: Movie;
}

const CardItem = ({ movie }: CardItemProps) => {
  const { poster_path, title, vote_average, release_date, id } = movie;
  return (
    <a href={"/movie?id=" + id} key={id}>
      <div className="flex flex-col w-full dark:text-supernova-500">
        <div className="">
          <img
            className="w-full"
            src={
              poster_path
                ? "https://image.tmdb.org/t/p/w500" + poster_path
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU"
            }
            alt="poster"
          />
        </div>
        <span className="text-center mt-2 ">{title}</span>
        <div className="flex flex-1 w-full flex-row">
          <span className="flex items-start bg-yellow-500 rounded p-2 dark:text-white">
            {vote_average}
          </span>
          <span className="ml-auto flex items-center">{release_date}</span>
        </div>
      </div>
    </a>
  );
};

export default CardItem;
