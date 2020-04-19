import React, { useState, useEffect } from 'react';
import * as S from './styles.js';
import SelectUf from '../SelectUf/SelectUf';

const Searchbar = props => {
  const [estados, setEstados] = useState([]);
  const [location, setLocation] = useState({
    city: '',
    state: '',
    country: 'br'
  });
  useEffect(() => {
    async function fetchData() {
      const ufs = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
      const ufsData = await ufs.json();
      const parsedUfs = ufsData.map(uf => uf.sigla).sort((a, b) => a > b);
      setEstados(parsedUfs);
    }
    fetchData();
  }, []);

  const [toggleSubmit, setToggleSubmit] = useState(false);
  useEffect(() => {
    if(location.city !== '' && location.state !== '') {
      setToggleSubmit(true);
    } else {
      setToggleSubmit(false);
    }
  }, [location]);
  
  const updateLocation = (e, field) => {
    const data = { [field]: e.target.value };
    const updatedLocation = { ...location, ...data };
    setLocation(updatedLocation);
  }

  const sendLocation = async () => {
    if (location.city === null || location.state === null) {
      console.log('not fetching anything')
      return;
    }

    try {
      const weatherRequest = await fetch('http://localhost:5000/weather/', {
        method: 'POST',
        body: JSON.stringify(location),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const weatherData = await weatherRequest.json();
      console.log(weatherData);
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <S.SearchBarContainer>
      <S.Input type="text" name="city" placeholder="Cidade" 
        value={location.city}
        onChange={e => updateLocation(e, 'city')}
      />
      <SelectUf uflist={estados} 
        value={location.state}
        setEstado={e => updateLocation(e, 'state')} 
      />

      {toggleSubmit ? 
        <S.Button onClick={sendLocation}>Pesquisar</S.Button>
      :
        null
      }
      
    </S.SearchBarContainer>
  );
}

export default Searchbar;