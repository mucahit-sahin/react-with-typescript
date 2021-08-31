import { TvSerie } from "../types/tv";

interface TvItemProps {
  tv: TvSerie;
}

const TvItem = ({ tv }: TvItemProps) => {
  const { poster_path, vote_average, id, name, first_air_date } = tv;
  return (
    <a href={"/tvserie?id=" + id} key={id}>
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
        <span className="text-center mt-2">{name}</span>
        <div className="flex flex-1 w-full flex-row">
          <span className="flex items-start bg-yellow-500 rounded p-2 dark:text-black">
            {vote_average}
          </span>
          <span className="ml-auto flex items-center">{first_air_date}</span>
        </div>
      </div>
    </a>
  );
};

export default TvItem;
