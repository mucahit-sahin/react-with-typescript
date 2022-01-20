import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { AppState } from "../store";
import {
  getPersonCredits,
  getPersonDetails,
} from "../store/actions/personAction";

const PersonDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = new URLSearchParams(useLocation().search).get("id");

  useEffect(() => {
    id && dispatch(getPersonDetails(id));
    id && dispatch(getPersonCredits(id));
  }, [dispatch, id]);

  const { personDetails, personCredits, loading } = useSelector(
    (state: AppState) => state.persons
  );

  return (
    <div className="flex flex-col container mx-auto max-w-7xl w-full mt-5 sm:flex-row dark:text-supernova-500">
      {loading ? (
        <span>Loading</span>
      ) : (
        <>
          <div className="flex p-2 justify-center sm:w-1/3 ">
            <img
              className="rounded sm:h-96 "
              src={
                `https://image.tmdb.org/t/p/w300` + personDetails?.profile_path
              }
              alt="person"
            />
          </div>
          <div className="my-5 flex flex-col flex-1 p-2 sm:w-2/3 ">
            <span className="text-3xl mb-4 dark:text-supernova-500">
              {personDetails?.name}
            </span>
            <div className="flex flex-col mb-2">
              <span className="text-xl  mb-1">Biography</span>
              <p className="text-base dark:text-supernova-500">
                {personDetails?.biography}
              </p>
            </div>
            <div className="flex flex-row">
              <span className="flex flex-1">
                {personDetails?.known_for_department}
              </span>
              <span className="flex flex-1">
                {personDetails?.place_of_birth}
              </span>
              <span className="flex flex-1 justify-end">
                {personDetails?.birthday}
              </span>
            </div>
            {personCredits?.cast.length !== 0 && (
              <div className="flex flex-col dark:bg-black">
                <span className="text-lg">Cast</span>
                <div className="flex flex-col p-2  bg-gray-100 rounded dark:bg-black">
                  {personCredits?.cast.map((movie) => (
                    <div
                      className="flex flex-row items-center border-b hover:bg-gray-200 dark:hover:bg-gray-800"
                      onClick={() => history.push("/movie?id=" + movie.id)}
                    >
                      <div className="flex flex-1 p-1">
                        <img
                          className="h-20"
                          src={
                            "https://image.tmdb.org/t/p/w200" +
                            movie.poster_path
                          }
                          alt="cast"
                        />
                      </div>
                      <span className="flex flex-1">{movie.title}</span>
                      <span className="flex flex-1">{movie.character} </span>
                      <span className="flex flex-1">{movie.release_date}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PersonDetails;
