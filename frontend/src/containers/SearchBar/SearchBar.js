import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as searchActions from '../../store/actions/search';
import SelectUf from '../../components/SelectUf/SelectUf';
import * as S from './styles';
import * as request from '../../helpers/fetch-data';

const Searchbar = ({ sendWeather, toggleLoading }) => {
  const [errors, setErrors] = useState(null);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [estados, setEstados] = useState([]);
  const [location, setLocation] = useState({
    city: '',
    state: '',
    country: 'br'
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchActions.loadUfList());
  }, []);

  useEffect(() => {
    async function populateEstados() {
      try {
        const ufList = await request.fetchUf();
        setEstados(ufList);
      } catch (err) {
        setErrors({ error: 'Falha ao buscar UFs' });
        setEstados(null);
      }
    }
    populateEstados();
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
    toggleLoading();
    try {
      const weather = await request.fetchWeather(location);
      sendWeather(weather);
    } catch (error) {
      setErrors(error.response.data);
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
