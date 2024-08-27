// import React from "react";
// import { observer } from "mobx-react-lite";
// import userStore from "../Stores/UserStore";

// const Pagination = observer(() => {
//   const handlePrev = () => {
//     if (userStore.currentPage > 1) {
//       userStore.setPage(userStore.currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (userStore.currentPage < userStore.totalPages) {
//       userStore.setPage(userStore.currentPage + 1);
//     }
//   };

//   return (
//     <div className="pagination">
//       <button onClick={handlePrev} disabled={userStore.currentPage === 1}>
//         Prev
//       </button>
//       <button
//         onClick={handleNext}
//         disabled={userStore.currentPage === userStore.totalPages}
//       >
//         Next
//       </button>
//     </div>
//   );
// });

// export default Pagination;

import React from "react";
import { observer } from "mobx-react-lite";
import userStore from "../Stores/UserStore";

const Pagination = observer(() => {
  const totalPages = userStore.totalPages;
  const currentPage = userStore.currentPage;

  const handlePageChange = (pageNumber) => {
    userStore.setPage(pageNumber);
  };

  return (
    <div className="pagination-container">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`pagination-button ${
            currentPage === index + 1 ? "active" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
});

export default Pagination;
