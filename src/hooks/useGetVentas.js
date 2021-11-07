import { useState, useEffect } from "react";
import axios from "axios";

const useGetVentas = (API) => {
  const [ventas, setVentas] = useState([]);

  useEffect(async () => {
    const response = await axios.get(API);
    setVentas(response.data);
  }, []);
  console.log(ventas);

  return ventas;
};

export default useGetVentas;
