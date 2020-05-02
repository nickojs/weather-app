import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectUf from '../../components/SelectUf/SelectUf';
import * as S from './styles';
import * as request from '../../helpers/fetch-data';
import * as searchActions from '../../store/actions/search';

const Searchbar = ({ sendWeather, toggleLoading }) => {
  const error = useSelector((state) => state.error);
  const ufListData = useSelector((state) => state.ufList);
  const location = useSelector((state) => state.location);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchActions.loadUfList());
  }, []);

  const updateLocation = (e, field) => {
    const data = { [field]: e.target.value };
    dispatch(searchActions.updateLocation(data));
  };

  const sendLocation = async () => {
    toggleLoading();
    try {
      const weather = await request.fetchWeather(location);
      sendWeather(weather);
    } catch (error) {
      // setErrors(error.response.data);
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
  if (ufListData.length === 0) {
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

  let toggleBtn = true;
  if (location.city !== '' && location.state !== '') toggleBtn = !toggleBtn;

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
        disabled={toggleBtn}
        onClick={sendLocation}
      >
        Pesquisar
      </S.Button>

      <S.Break />

      {error
        ? <S.ErrorMessage>{error.error}</S.ErrorMessage>
        : null}
    </S.SearchBarContainer>
  );
};

export default Searchbar;
