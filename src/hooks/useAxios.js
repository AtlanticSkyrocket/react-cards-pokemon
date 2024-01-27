import { useState} from 'react';
import axios from 'axios';
import {v1 as uuid} from "uuid";

function useAxios(url) {
  const [cards, setCards] = useState([]);

  const addCard = async (urlParameters = null) => {
    if (urlParameters)
      url = url + urlParameters;
    try {
      const response = await axios.get(
        url
      );
      setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    } catch (error) {
      console.log(error);
    }
  };
  return [cards, addCard];
}

export default useAxios;