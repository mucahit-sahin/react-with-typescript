import { Person } from "../types/persons";

interface PersonItemProps {
  person: Person;
}

const PersonItem = ({ person }: PersonItemProps) => {
  const { profile_path, name, known_for_department, popularity, id } = person;
  return (
    <a href={"/person?id=" + id} key={id} className="flex flex-col w-full">
      <div className="flex">
        <img
          className="w-full"
          src={
            profile_path
              ? "https://image.tmdb.org/t/p/w500" + profile_path
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU"
          }
          alt="poster"
        />
      </div>
      <span className="text-center mt-2">{name}</span>
      <div className="flex flex-1 w-full flex-row">
        <span className="flex items-start bg-yellow-500 rounded p-2">
          {popularity}
        </span>
        <span className="ml-auto flex items-center">
          {known_for_department}
        </span>
      </div>
    </a>
  );
};

export default PersonItem;
