import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SelectUf from '../SelectUf/SelectUf';
import * as S from './styles';

const Searchbar = ({ sendWeather, toggleLoading }) => {
  const [errors, setErrors] = useState(null);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [estados, setEstados] = useState([]);
  const [location, setLocation] = useState({
    city: '',
    state: '',
    country: 'br'
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const ufs = await axios({
          url: 'localidades/estados',
          baseURL: 'https://servicodados.ibge.gov.br/api/v1',
          responseType: 'json'
        });
        const ufsData = await ufs.data;
        const parsedUfs = ufsData.map((uf) => uf.sigla).sort((a, b) => a > b);
        setEstados(parsedUfs);
      } catch (error) {
        setErrors({ error: 'Falha ao buscar UFs' });
        setEstados(null);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    setToggleSubmit(true);
    setErrors(null);
    if (location.city !== '' && location.state !== '') { setToggleSubmit(false); }
  }, [location]);

  const updateLocation = (e, field) => {
    const data = { [field]: e.target.value };
    const updatedLocation = { ...location, ...data };
    setLocation(updatedLocation);
  };

  const sendLocation = async () => {
    setToggleSubmit(true);
    try {
      toggleLoading();
      const weatherRequest = await axios({
        url: 'http://localhost:5000/weather/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: location
      });
      const weatherResponse = await weatherRequest.data; // 'data' as in axios response
      // hook to weatherContainer
      sendWeather(weatherResponse.data); // 'data' as in backend object
    } catch (error) {
      const message = error.response.data;
      setErrors(message);
      console.log(error);
    } finally {
      toggleLoading();
    }
  };

  return (
    <S.SearchBarContainer>
      <S.Input
        type="text"
        name="city"
        placeholder="Cidade"
        value={location.city}
        onChange={(e) => updateLocation(e, 'city')}
      />
      {estados
        ? (
          <SelectUf
            uflist={estados}
            value={location.state}
            setEstado={(e) => updateLocation(e, 'state')}
          />
        )
        : (
          <S.Input
            type="text"
            name="state"
            placeholder="UF"
            value={location.state}
            onChange={(e) => updateLocation(e, 'state')}
          />
        )}

      <S.Button
        disabled={toggleSubmit}
        onClick={sendLocation}
      >
        Pesquisar
      </S.Button>

      <S.Break />

      {errors
        ? <S.ErrorMessage>{errors.error}</S.ErrorMessage>
        : null}
    </S.SearchBarContainer>
  );
};

export default Searchbar;
