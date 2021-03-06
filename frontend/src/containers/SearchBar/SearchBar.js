import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UfInput from '../../components/UfInput/UfInput';
import ErrorMessage from '../../components/UI/ErrorMessage';
import * as S from './styles';
import * as actions from '../../store/actions';

const Searchbar = () => {
  const dispatch = useDispatch();
  const [toggleBtn, setToggleBtn] = useState(true);
  const {
    error, ufList, location, loading
  } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(actions.loadUfList());
  }, []);

  useEffect(() => {
    setToggleBtn(true);
    if (location.city !== '' && location.state !== '') setToggleBtn(false);
  }, [location]);

  const updateLocation = (e, field) => {
    const data = { [field]: e.target.value };
    dispatch(actions.updateLocation(data));
  };

  const fetchWeather = () => {
    dispatch(actions.fetchWeatherHandler(location));
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
        loading={loading}
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
