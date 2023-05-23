import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getInfoResident } from "../../services/getInfoResident";
import Loader from "../Loader/Loader";
import "./ResidentCard.css";

const ResidentCard = ({ url }) => {
  const [resident, setResident] = useState(null);
  useEffect(() => {
    const loadInfoResident = async () => {
      const infoResident = await getInfoResident(url);
      setResident(infoResident);
    };
    loadInfoResident();
  }, [url]);

  return (
    <>
      {!resident ? (
        <Loader />
      ) : (
        <article className="residentCard">
          <div>
            <img src={resident.image} alt={resident.name} />
          </div>
          <h3>{resident.name}</h3>
          <hr />
          <div className="residentCardInfo">
            <div>
              <strong>
                <p className="residentCardInfoEnun">SPECIE:</p>
                <p>{resident.species}</p>
              </strong>
            </div>
            <div>
              <strong>
                <p className="residentCardInfoEnun">ORIGIN:</p>
                <p>{resident.origin.name}</p>
              </strong>
            </div>
            <div>
              <strong>
                <p className="residentCardInfoEnun">APPEARANCES:</p>
                <p>{resident.episode.length}</p>
              </strong>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

ResidentCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ResidentCard;
