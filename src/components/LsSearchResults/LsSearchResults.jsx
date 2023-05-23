import PropTypes from "prop-types";
import "./LsSearchResults.css";

const LsSearchResults = ({ listResults, onClickSelectList }) => {
  return (
    <div className="dvSearchResults">
      {listResults && (
        <ul onClick={onClickSelectList}>
          {listResults.map((x) => (
            <li key={x.id} data-name={x.name} data-id={x.id}>
              {x.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

LsSearchResults.propTypes = {
  listResults: PropTypes.array.isRequired,
  onClickSelectList: PropTypes.func.isRequired,
};

export default LsSearchResults;
