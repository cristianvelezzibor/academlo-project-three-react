import PropTypes from "prop-types";
import "./Location.css";

const Location = ({ locationInformation }) => {
  return (
    <>
      <div className="dvLocation">
        <div className="dvLocationInfo">
          <div>
            <strong>
              <p>Name</p>
              <p>{locationInformation.name}</p>
            </strong>
          </div>
          <div>
            <strong>
              <p>Type</p>
              <p>{locationInformation.type}</p>
            </strong>
          </div>
          <div>
            <strong>
              <p>Dimension</p>
              <p>{locationInformation.dimension}</p>
            </strong>
          </div>
          <div>
            <strong>
              <p>Population</p>
              <p>{locationInformation.residents.length}</p>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
};

Location.propTypes = {
  locationInformation: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dimension: PropTypes.string.isRequired,
    residents: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Location;
