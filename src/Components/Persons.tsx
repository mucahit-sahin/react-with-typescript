import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppState } from "../store";
import { getPopularPersons, searchPerson } from "../store/actions/personAction";
import Pagination from "./Pagination";
import PersonItem from "./PersonItem";

const Persons = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const pageNumber = new URLSearchParams(useLocation().search).get("page");
  const search = new URLSearchParams(useLocation().search).get("search");

  useEffect(() => {
    if (search) {
      dispatch(searchPerson(pageNumber, search));
    } else {
      dispatch(getPopularPersons(pageNumber));
    }
  }, [dispatch, pageNumber, search]);

  const { data } = useSelector((state: AppState) => state.persons);
  return (
    <div className="flex flex-col">
      <div className="container mx-auto my-2">
        <span className="text-4xl dark:text-supernova-500">
          {search ? '"' + search + '"' : "Popular Persons"}
        </span>
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {data.results?.map((person) => (
          <PersonItem person={person} />
        ))}
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

export default Persons;
