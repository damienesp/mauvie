import { Link } from "react-router-dom";

const Pagination = ({ page, totalPage }) => {
  const currentURL = window.location.pathname;

  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {page === undefined ? (
        ""
      ) : (
        <div className="pagination">
          {page === 1 || page === 0 ? null : (
            <div className="prev">
              <Link to={currentURL + `?page=${page - 1}`}>
                <button className="pagination-button" onClick={handleOnClick}>
                  Page {page - 1}
                </button>
              </Link>
            </div>
          )}

          {page === totalPage ? null : (
            <div className="next">
              <Link to={currentURL + `?page=${page + 1}`}>
                <button className="pagination-button" onClick={handleOnClick}>
                  Page {page + 1}
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Pagination;
