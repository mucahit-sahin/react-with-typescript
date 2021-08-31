import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { AppState } from "../store";
import { getTvCredit, getTvDetails } from "../store/actions/tvAction";

const TvSerieDetails = () => {
  const dispatch = useDispatch();

  const id = new URLSearchParams(useLocation().search).get("id");

  useEffect(() => {
    id && dispatch(getTvDetails(id));
    id && dispatch(getTvCredit(id));
  }, [dispatch, id]);

  const { tvDetails, tvCredits, loading } = useSelector(
    (state: AppState) => state.tv
  );
  return (
    <div className="flex flex-col">
      {loading ? (
        <span>Loading</span>
      ) : (
        <>
          <div
            className="container mx-auto  flex flex-col min-h-screen "
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${tvDetails?.backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col  w-full bg-supernova-300 bg-opacity-60 dark:bg-black dark:bg-opacity-50 min-h-screen sm:flex-row px-10">
              <div className="mt-10 flex justify-center sm:w-1/3 sm:block ">
                <img
                  className="rounded w-auto h-80 sm:h-auto "
                  src={`https://image.tmdb.org/t/p/w500${tvDetails?.poster_path}`}
                  alt="poster"
                />
              </div>
              <div className="my-5 flex flex-col flex-1 sm:w-2/3 sm:mx-10 ">
                <span className="text-left text-lg md:text-xl lg:text-2xl xl:text-4xl font-extrabold">
                  {tvDetails?.name}
                </span>
                <span className="text-left text-sm font-semibold md:text-lg lg:text-xl xl:text-2xl  my-5">
                  {tvDetails?.overview}
                </span>
                <div className="flex items-center flex-row">
                  <div className="flex-1 flex flex-col items-center sm:justify-center">
                    <span className="mr-3 font-bold">Vote Average</span>
                    <span className="mr-3 w-12 h-12 bg-supernova-500 rounded-xl bg-opacity-50 text-sm text-center flex items-center justify-center md:text-right">
                      {tvDetails?.vote_average}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col items-center sm:justify-center">
                    <span className="mr-3 font-bold">Vote Count</span>
                    <span className="mr-3 p-1 w-12 h-12  bg-supernova-500 rounded-xl bg-opacity-50 text-sm text-center flex items-center justify-center">
                      {tvDetails?.vote_count}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col items-center sm:justify-center">
                    <span className="mr-3 font-bold">Popularity</span>
                    <span className="mr-3 p-1 h-12 bg-supernova-500 rounded-xl bg-opacity-50 text-sm text-center flex items-center justify-center">
                      {tvDetails?.popularity}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-2 ">
                  <span className="hidden sm:mr-3">Spoken Langues</span>
                  {tvDetails?.spoken_languages.map((lang) => (
                    <span
                      key={lang.iso_639_1}
                      className="bg-supernova-500 mr-3 p-2 rounded-xl bg-opacity-50"
                    >
                      {lang.english_name}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center mt-2 ">
                  <span className="hidden sm:mr-3">Genres</span>
                  {tvDetails?.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="w-full text-center bg-supernova-500 mr-3 mb-1 p-2 rounded-xl bg-opacity-50 sm:flex-1"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col mt-3">
                  <span className="text-2xl">Cast</span>
                  <div className="flex flex-row">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={0}
                      freeMode={true}
                      navigation={true}
                      className="w-full"
                    >
                      {tvCredits?.cast.map((person) => (
                        <SwiperSlide>
                          <a
                            href={"/person?id=" + person.id}
                            className="p-2 flex flex-col items-center justify-center "
                          >
                            <img
                              className="rounded w-full"
                              src={
                                person.profile_path
                                  ? `https://image.tmdb.org/t/p/w154${person.profile_path}`
                                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU"
                              }
                              alt={person.id + "person"}
                            />
                            <div className="hidden md:flex rounded flex-col flex-1 w-full bg-supernova-500 bg-opacity-50">
                              <span className="text-center text-lg">
                                {person.name}
                              </span>
                              <span className="text-center text-lg">
                                {person.character}
                              </span>
                            </div>
                          </a>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TvSerieDetails;
