import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppState } from "../store";
import { getPersonDetails } from "../store/actions/personAction";

const PersonDetails = () => {
  const dispatch = useDispatch();
  const id = new URLSearchParams(useLocation().search).get("id");

  useEffect(() => {
    id && dispatch(getPersonDetails(id));
  }, [dispatch, id]);

  const { personDetails, loading } = useSelector(
    (state: AppState) => state.persons
  );

  return (
    <div className="flex flex-row container mx-auto w-full mt-5 ">
      {loading ? (
        <span>Loading</span>
      ) : (
        <>
          <div className="flex w-1/3 p-2">
            <img
              className="rounded"
              src={
                `https://image.tmdb.org/t/p/w500` + personDetails?.profile_path
              }
              alt="person"
            />
          </div>
          <div className="flex w-2/3 flex-col p-2">
            <span className="text-3xl mb-4">{personDetails?.name}</span>
            <div className="flex flex-col mb-2">
              <span className="text-xl  mb-1">Biography</span>
              <p className="text-base">{personDetails?.biography}</p>
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
          </div>
        </>
      )}
    </div>
  );
};

export default PersonDetails;
