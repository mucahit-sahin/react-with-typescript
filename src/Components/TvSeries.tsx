import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppState } from "../store";
import { getPopularTvSeries, searchTvSeries } from "../store/actions/tvAction";
import Pagination from "./Pagination";
import TvItem from "./TvItem";

const TvSeries = () => {
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  const pageNumber = new URLSearchParams(useLocation().search).get("page");
  const search = new URLSearchParams(useLocation().search).get("search");

  useEffect(() => {
    if (search) dispatch(searchTvSeries(pageNumber, search));
    else dispatch(getPopularTvSeries(pageNumber));
  }, [dispatch, pageNumber, search]);
  const { data, loading } = useSelector((state: AppState) => state.tv);

  return (
    <div className="flex flex-col">
      <div className="container mx-auto my-2">
        <span className="text-4xl">Popular TV Series</span>
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {loading ? (
          <div>
            <span>Loading</span>
          </div>
        ) : data.total_results ? (
          data.results?.map((tv) => <TvItem tv={tv} />)
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
          pathname={pathname}
        />
      )}
    </div>
  );
};

export default TvSeries;
