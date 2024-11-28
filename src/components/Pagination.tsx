import React from "react";



const Pagination = ({ totalPosts, postPerPage, setCurrentPage }: any) => {
  let pages = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postPerPage); index++) {
    pages.push(index);
  }
  return (
    <div className="flex justify-center gap-1 mt-6">
      {pages.map((page, index) => {
        return (
          <button
            className="border-2 border-gray-400 rounded-md text-gray-700 text-center w-6 h-6"
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>


        );
      })}
    </div>
  );
};

export default Pagination;

