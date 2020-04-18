import React from 'react';
import * as S from './styles.js';

const Searchbar = props => {

  return(
    <S.SearchBarContainer>
      <S.Input type="text" name="city" placeholder="Cidade" />
      <select name="state">
        <option value="teste">Teste</option>
      </select>
      <S.Button>Pesquisar</S.Button>
    </S.SearchBarContainer>
  );
}

export default Searchbar;