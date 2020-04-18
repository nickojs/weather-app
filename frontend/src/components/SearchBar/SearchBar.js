import React, { useState, useEffect } from 'react';
import * as S from './styles.js';
import SelectUf from '../SelectUf/SelectUf';

const Searchbar = props => {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const ufs = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
      const ufsData = await ufs.json();
      const parsedUfs = ufsData.map(uf => uf.sigla).sort((a, b) => a > b);
      setEstados(parsedUfs);
    }
    fetchData();
  }, []);

  return(
    <S.SearchBarContainer>
      <S.Input type="text" name="city" placeholder="Cidade" />
      <SelectUf uflist={estados}/>
      <S.Button>Pesquisar</S.Button>
    </S.SearchBarContainer>
  );
}

export default Searchbar;