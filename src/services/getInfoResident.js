import axios from "axios";

export const getInfoResident = async (url) => {
  try {
    return (await axios.get(url)).data;
  } catch (error) {
    console.error(error);
  }
};
