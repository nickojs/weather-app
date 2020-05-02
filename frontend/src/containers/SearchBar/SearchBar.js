import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectUf from '../../components/SelectUf/SelectUf';
import * as S from './styles';
import * as request from '../../helpers/fetch-data';
import * as searchActions from '../../store/actions/search';

const Searchbar = ({ sendWeather, toggleLoading }) => {
  const [errors, setErrors] = useState(null);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [location, setLocation] = useState({
    city: '',
    state: '',
    country: 'br'
  });

  const ufListData = useSelector((state) => state.ufList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchActions.loadUfList());
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

  let ufList = (
    <SelectUf
      uflist={ufListData}
      value={location.state}
      setEstado={(e) => updateLocation(e, 'state')}
    />
  );
  if (!ufList) {
    ufList = (
      <S.Input
        type="text"
        name="state"
        placeholder="UF"
        value={location.state}
        onChange={(e) => updateLocation(e, 'state')}
      />
    );
  }

  return (
    <S.SearchBarContainer>
      <S.Input
        type="text"
        name="city"
        placeholder="Cidade"
        value={location.city}
        onChange={(e) => updateLocation(e, 'city')}
      />
      {ufList}
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
