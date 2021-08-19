import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppState } from "../store";
import { getPopularMovies, searchMovie } from "../store/actions/movieAction";
import CardItem from "./CardItem";
import Pagination from "./Pagination";

const Items = () => {
  const dispatch = useDispatch();
  const pageNumber = new URLSearchParams(useLocation().search).get("page");
  const search = new URLSearchParams(useLocation().search).get("search");

  useEffect(() => {
    if (search) {
      dispatch(searchMovie(pageNumber, search));
    } else {
      dispatch(getPopularMovies(pageNumber));
    }
  }, [dispatch, pageNumber, search]);

  const { data, loading } = useSelector((state: AppState) => state.movies);
  console.log(data);
  return (
    <div className="flex flex-col">
      <div className="container mx-auto my-2">
        <span className="text-4xl">
          {search ? '"' + search + '"' : "Popular Movies"}
        </span>
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {loading ? (
          <div>
            <span>Yükleniyor</span>
          </div>
        ) : data.total_results ? (
          data.results?.map((movie) => <CardItem movie={movie} />)
        ) : (
          <div>
            <span>Yükleniyor</span>
          </div>
        )}
      </div>
      {data.total_pages && data.total_results && (
        <Pagination
          total_pages={data.total_pages}
          total_results={data.total_results}
          pageNumber={pageNumber || "1"}
          search={search}
        />
      )}
    </div>
  );
};

export default Items;
