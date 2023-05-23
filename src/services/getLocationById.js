import axios from "axios";

const urlBase = "https://rickandmortyapi.com/api";
export const getLocationById = async (idLocation) => {
  try {
    return (await axios.get(`${urlBase}/location/${idLocation}`)).data;
  } catch (error) {
    console.error(error);
  }
};
