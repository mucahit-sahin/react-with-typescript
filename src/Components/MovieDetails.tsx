import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FaImdb } from "react-icons/fa";
import { AppState } from "../store";
import { getMovieDetails } from "../store/actions/movieAction";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const id = new URLSearchParams(useLocation().search).get("id");

  useEffect(() => {
    id && dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  const { movieDetail, loading } = useSelector(
    (state: AppState) => state.movies
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
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col  w-full bg-supernova-300 bg-opacity-60 min-h-screen sm:flex-row px-10">
              <div className="mt-10">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`}
                  alt="poster"
                />
              </div>
              <div className=" my-5 flex flex-col sm:mx-10">
                <span className="text-left text-lg md:text-xl lg:text-2xl xl:text-4xl ">
                  {movieDetail?.title}
                </span>
                <span className="text-left text-sm md:text-lg lg:text-xl xl:text-2xl  my-5">
                  {movieDetail?.overview}
                </span>
                <div className="flex items-center flex-row">
                  <div className="flex-1 flex flex-col items-center sm:justify-center">
                    <span className="mr-3">Vote Average</span>
                    <span className="mr-3 w-12 h-12 bg-supernova-500 text-sm text-center flex items-center justify-center md:text-right">
                      {movieDetail?.vote_average}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col items-center sm:justify-center">
                    <span className="mr-3">Vote Count</span>
                    <span className="mr-3 p-1 w-12 h-12  bg-supernova-500 text-sm text-center flex items-center justify-center">
                      {movieDetail?.vote_count}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col items-center sm:justify-center">
                    <span className="mr-3">Popularity</span>
                    <span className="mr-3 p-1 h-12 bg-supernova-500 text-sm text-center flex items-center justify-center">
                      {movieDetail?.popularity}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row mt-2 ">
                  <a
                    href={"https://www.imdb.com/title/" + movieDetail?.imdb_id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-supernova-500 "
                  >
                    <FaImdb />
                  </a>
                  <span className="ml-auto text-lg">
                    {movieDetail?.release_date}
                  </span>
                </div>
                <div className="flex flex-row items-center mt-2 ">
                  <span className="mr-3">Spoken Langues</span>
                  {movieDetail?.spoken_languages.map((lang) => (
                    <span
                      key={lang.iso_639_1}
                      className="bg-supernova-500 mr-3 p-2"
                    >
                      {lang.english_name}
                    </span>
                  ))}
                </div>
                <div className="flex flex-row items-center mt-2 ">
                  <span className="mr-3">Genres</span>
                  {movieDetail?.genres.map((genre) => (
                    <span key={genre.id} className="bg-supernova-500 mr-3 p-2">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
