import React from 'react';

const Pagination = (props) => {
  let ar = [];
  for (let i = 1; i <= props.tpage; i++) {
    ar.push(i);
  }
  const handleNext = () => {
    props.setPage((prev) => prev + 1);
  }
  const handlePrev = () => {
    props.setPage((prev) => prev - 1);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center pagination-margin">
        <li className={`page-item ${props.currpage === 1 ? 'disabled' : ''}`}> {/* Add 'disabled' class conditionally */}
          <a className="page-link" href="!#" onClick={handlePrev}>
            Prev
          </a>
        </li>
        {
          ar.map((ele, id) => (
            <li className={`page-item ${ele === props.currpage ? 'active' : ''}`} key={id}>
              <a
                className={`page-link ${ele === props.currpage ? 'active' : ''}`}
                href="!#"
                onClick={() => props.paginate(ele)}
              >
                {ele}
              </a>
            </li>
          ))
        }
        <li className="page-item">
          <a className="page-link" href="!#" onClick={handleNext}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
