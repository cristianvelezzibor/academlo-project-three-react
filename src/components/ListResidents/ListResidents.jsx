import PropTypes from "prop-types";
import { useState } from "react";
import ResidentCard from "../ResidentCard/ResidentCard";
import { usePagination } from "../../hooks/usePagination";
import "./ListResidents.css";

const ListResidents = ({ lsResidents = [] }) => {
  const [quantityPagination, setQuantityPagination] = useState(5);
  const { currentPage, listTemp, pages, changePageTo } = usePagination(
    lsResidents,
    quantityPagination
  );
  return (
    <>
      <div>
        {!listTemp.length && (
          <p id="lblLocation">There is no residents in this location</p>
        )}
        {Boolean(listTemp.length) && (
          <ul className="ulListResidents">
            {listTemp.map((urlResident) => (
              <li key={urlResident}>
                <ResidentCard url={urlResident} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="dvPagination">
        <select
          value={quantityPagination}
          onChange={(e) => setQuantityPagination(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <button onClick={() => changePageTo(currentPage - 1)}>Back</button>
        {pages.map((i) => (
          <button
            key={i}
            onClick={() => changePageTo(i)}
            style={{
              background: currentPage == i ? "#062226" : undefined,
              color: currentPage == i ? "red" : undefined,
            }}
          >
            {i}
          </button>
        ))}
        <button onClick={() => changePageTo(currentPage + 1)}>Next</button>
      </div>
    </>
  );
};

ListResidents.propTypes = {
  lsResidents: PropTypes.array.isRequired,
};

export default ListResidents;
