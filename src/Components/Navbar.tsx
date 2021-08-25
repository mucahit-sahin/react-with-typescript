import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  let { pathname } = useLocation();
  const history = useHistory();

  if (pathname === "/person") pathname = "/persons";
  if (pathname === "/movie") pathname = "/";
  return (
    <nav className="bg-supernova-500 ">
      <div className="container mx-auto px-3 py-2 flex flex-row ">
        <div className="flex-1  transition duration-500 ease-in-out md:hidden">
          <ul>
            <li>
              <a href="/">Movies</a>
            </li>
            <li>
              <a href="/persons">Actor/Actress</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-1 items-center">
          <ul className="hidden md:block flex-row">
            <a href="/" className="mr-4 text-gray-800 hover:text-gray-700">
              Movies
            </a>
            <a href="/persons" className="mr-4 hover:text-gray-700">
              Actor/Actress
            </a>
          </ul>
        </div>
        <div className="flex-1 ">
          <input
            type="search"
            name="search"
            placeholder={
              "Search " + (pathname === "/persons" ? "Person" : "Movie")
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow w-full px-4 py-2 rounded-l-full rounded-r-full text-sm focus:outline-none"
            onKeyDown={(e) =>
              e.key === "Enter" &&
              history.push((pathname ? pathname : "/") + "?search=" + search)
            }
          />
        </div>
        <div className="flex-1 flex items-center justify-end">
          <a
            href="https://github.com/mucahit-sahin"
            className="rounded-full text-white focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="hidden">View github</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="text-xl transition-colors duration-200"
              viewBox="0 0 1792 1792"
            >
              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
