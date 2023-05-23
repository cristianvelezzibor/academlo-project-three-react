import { useState } from "react";
import "./InputSearch.css";

const InputSearch = ({ onSubmit }) => {
  const [textSearch, setTextSearch] = useState("");
  const [errorTextSearch, setErrorTextSearch] = useState("");
  const [valueSelect, setValueSelect] = useState("id");

  const onSelectChange = (e) => {
    setValueSelect(e.target.value);
    setTextSearch("");
    setErrorTextSearch("");
  };

  const onChangeSearch = (e) => {
    const valueLocation = e.target.value;
    if (valueSelect == "id") {
      //!/^\d$/.test(valueLocation)
      if (valueLocation && isNaN(valueLocation)) {
        setErrorTextSearch("El texto ingresado debe ser solo números.");
      } else if (valueLocation && valueLocation < 1 && valueLocation > 126) {
        setErrorTextSearch("El número ingresado debe estar entre 1 y 126.");
      } else {
        setErrorTextSearch("");
        setTextSearch(valueLocation);
      }
    } else {
      setErrorTextSearch("");
      setTextSearch(valueLocation);
    }
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (errorTextSearch) return;
    onSubmit(textSearch, valueSelect);
  };

  return (
    <>
      <div className="dvInputSearch">
        <form className="inputSearch" onSubmit={onSubmitHandle}>
          <div>
            <p>Search for:</p>
            <select onChange={onSelectChange}>
              <option value="id">Identification</option>
              <option value="name">Name</option>
            </select>
          </div>
          <div>
            <p>Please enter an id:</p>
            <input type="text" value={textSearch} onChange={onChangeSearch} />
            <p style={{ color: "red" }} role="alert">
              {errorTextSearch}
            </p>
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default InputSearch;
