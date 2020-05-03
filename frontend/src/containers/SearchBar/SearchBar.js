import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UfInput from '../../components/UfInput/UfInput';
import ErrorMessage from '../../components/UI/ErrorMessage';
import * as S from './styles';
import * as searchActions from '../../store/actions/search';

const Searchbar = () => {
  const dispatch = useDispatch();
  const [toggleBtn, setToggleBtn] = useState(true);
  const {
    error, ufList, location, loadingUfList
  } = useSelector((state) => state);

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

  return (
    <S.SearchBarContainer>
      <input
        type="text"
        name="city"
        placeholder="Cidade"
        value={location.city}
        onChange={(e) => updateLocation(e, 'city')}
      />
      <UfInput
        uflist={ufList}
        value={location.state}
        setUf={(e) => updateLocation(e, 'state')}
        loading={loadingUfList}
      />
      <S.Button
        disabled={toggleBtn}
        onClick={fetchWeather}
      >
        Pesquisar
      </S.Button>
      <S.Break />
      <ErrorMessage error={error} />
    </S.SearchBarContainer>
  );
};

export default Searchbar;
