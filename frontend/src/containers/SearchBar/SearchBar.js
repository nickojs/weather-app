import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectUf from '../../components/SelectUf/SelectUf';
import * as S from './styles';
import * as searchActions from '../../store/actions/search';

const Searchbar = () => {
  const [toggleBtn, setToggleBtn] = useState(true);
  const error = useSelector((state) => state.error);
  const ufListData = useSelector((state) => state.ufList);
  const location = useSelector((state) => state.location);
  const dispatch = useDispatch();

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

  let errorElement = null;
  if (error) {
    errorElement = <S.ErrorMessage>{error.error}</S.ErrorMessage>;
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
        disabled={toggleBtn}
        onClick={fetchWeather}
      >
        Pesquisar
      </S.Button>
      <S.Break />
      {errorElement}
    </S.SearchBarContainer>
  );
};

export default Searchbar;
