import { useEffect, useState } from "react";
import { getLocationById } from "./services/getLocationById";
import { getLocationByName } from "./services/getLocationByName";
import { getNumberRandom } from "./utils/getNumberRandom";
import Location from "./components/Location/Location";
import Loader from "./components/Loader/Loader";
import "./App.css";
import ListResidents from "./components/ListResidents/ListResidents";
import InputSearch from "./components/InputSearch/InputSearch";
import imgBanner from "./assets/img/imgBanner.png";
import LsSearchResults from "./components/LsSearchResults/LsSearchResults";

function App() {
  const [locationData, setLocationData] = useState(null);
  const [locationDataArray, setLocationDataArray] = useState([]);

  const loadLocation = async (id) => {
    const locationInfo = await getLocationById(id);
    setLocationData(locationInfo);
  };

  const onSubmitSearch = async (valueSearch, searchFor) => {
    let locationInfo;
    setLocationDataArray([]);
    if (!valueSearch) {
      locationInfo = await getLocationById(getNumberRandom(1, 126));
    } else {
      if (searchFor == "name") {
        locationInfo = await getLocationByName(valueSearch);
        if (locationInfo && locationInfo.length == 1) {
          setLocationData(locationInfo[0]);
        } else setLocationDataArray(locationInfo);
        return;
      } else {
        locationInfo = await getLocationById(valueSearch);
      }
    }
    setLocationData(locationInfo);
  };

  const returnNameSelected = (e) =>
    onSubmitSearch(e.target.getAttribute("data-id"), "id");

  useEffect(() => {
    loadLocation(getNumberRandom(1, 126));
  }, []);

  return (
    <>
      <div className="banner">
        <img src={imgBanner} alt="banner" />
      </div>
      <InputSearch onSubmit={onSubmitSearch} />
      <LsSearchResults
        listResults={locationDataArray}
        onClickSelectList={returnNameSelected}
      />
      {locationData ? (
        <Location locationInformation={locationData} />
      ) : (
        <Loader />
      )}
      <h2 className="residentsClass">Residents</h2>
      {locationData ? (
        <ListResidents lsResidents={locationData.residents} />
      ) : (
        <p>Loading residents</p>
      )}
    </>
  );
}

export default App;
