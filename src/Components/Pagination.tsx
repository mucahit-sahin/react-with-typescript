import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

interface PaginationTypes {
  total_pages: number;
  total_results: number;
  pageNumber: string;
  search: string | null;
  pathname?: string;
}
const Pagination = ({
  total_pages,
  total_results,
  pageNumber,
  search,
  pathname,
}: PaginationTypes) => {
  return (
    <div className="flex flex-1 items-center justify-center my-2">
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <a
            href="/"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="/"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">{total_pages}</span> of{" "}
              <span className="font-medium">{total_results}</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href={
                  (pathname ? pathname : "/") +
                  (parseInt(pageNumber) === 1
                    ? "?page=" +
                      pageNumber +
                      (search ? "&&search=" + search : "")
                    : "?page=" +
                      (parseInt(pageNumber) - 1) +
                      (search ? "&&search=" + search : ""))
                }
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <AiFillCaretLeft />
              </a>
              <a
                href={
                  (pathname ? pathname : "/") +
                  "?page=" +
                  pageNumber +
                  (search ? "&&search=" + search : "")
                }
                aria-current="page"
                className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {pageNumber}
              </a>
              <a
                href={
                  (pathname ? pathname : "/") +
                  "?page=" +
                  (parseInt(pageNumber) + 1) +
                  (search ? "&&search=" + search : "")
                }
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {parseInt(pageNumber) + 1}
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href={
                  (pathname ? pathname : "/") +
                  "?page=" +
                  (total_pages - 1) +
                  (search ? "&&search=" + search : "")
                }
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {total_pages - 1}
              </a>
              <a
                href={
                  (pathname ? pathname : "/") +
                  "?page=" +
                  total_pages +
                  (search ? "&&search=" + search : "")
                }
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {total_pages}
              </a>
              <a
                href={
                  (pathname ? pathname : "/") +
                  (parseInt(pageNumber) === total_pages
                    ? "?page=" +
                      pageNumber +
                      (search ? "&&search=" + search : "")
                    : "?page=" +
                      (parseInt(pageNumber) + 1) +
                      (search ? "&&search=" + search : ""))
                }
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <AiFillCaretRight />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
