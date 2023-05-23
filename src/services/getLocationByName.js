import axios from "axios";

const urlBase = "https://rickandmortyapi.com/api";
export const getLocationByName = async (name) => {
  try {
    return (await axios.get(`${urlBase}/location/?name=${name}`)).data.results;
  } catch (error) {
    console.error(error);
  }
};
