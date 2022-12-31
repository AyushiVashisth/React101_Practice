function Pagination({page, handlePageChange, totalCount}) {
    return (
      <div id="pagination-section">
        <button 
          disabled={page===1}
          onClick={() => handlePageChange(-1)}>
          PREVIOUS
        </button>
        <button disabled>{page}</button>
        <button 
           onClick={() => handlePageChange(1)}
           disabled={page===Math.ceil(totalCount / 3)}>
            NEXT
         </button>
      </div>
    );
}

export default Pagination;

// Prev 1 2 3 4 5 6 7 8 9 10 NEXT


