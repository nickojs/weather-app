import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectUf from '../../components/SelectUf/SelectUf';
import ErrorMessage from '../../components/UI/ErrorMessage';
import * as S from './styles';
import * as searchActions from '../../store/actions/search';

const Searchbar = () => {
  const dispatch = useDispatch();
  const [toggleBtn, setToggleBtn] = useState(true);
  const { error, ufList, location } = useSelector((state) => state);

  useEffect(() => {
    dispatch(searchActions.loadUfList());
  }, []);

  useEffect(() => {
    setToggleBtn(true);
    if (location.city !== '' && location.state !== '') setToggleBtn(false);
  }, [location]);

  const updateLocation = (e, field) => {
    const data = { [field]: e.target.value };
    dispatch(searchActions.updateLocation(data));
  };

  const fetchWeather = () => {
    dispatch(searchActions.fetchWeatherHandler(location));
    setToggleBtn((prevState) => !prevState);
  };

  let ufListC = (
    <SelectUf
      uflist={ufList}
      value={location.state}
      setEstado={(e) => updateLocation(e, 'state')}
    />
  );
  if (ufList.length === 0) {
    ufListC = (
      <S.Input
        type="text"
        name="state"
        placeholder="UF"
        value={location.state}
        onChange={(e) => updateLocation(e, 'state')}
      />
    );
  }

  let errorC = null;
  if (error) {
    errorC = <ErrorMessage>{error.error}</ErrorMessage>;
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
      {ufListC}
      <S.Button
        disabled={toggleBtn}
        onClick={fetchWeather}
      >
        Pesquisar
      </S.Button>
      <S.Break />
      {errorC}
    </S.SearchBarContainer>
  );
};

export default Searchbar;
