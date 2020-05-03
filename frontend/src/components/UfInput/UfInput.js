import React from 'react';
import * as S from './styles';
import Loader from '../UI/Loader';

const UfInput = ({
  uflist, value, setUf, loading
}) => {
  const fallbackManualInput = (
    <S.Input
      type="text"
      name="state"
      placeholder="Insira a UF"
      value={value}
      onChange={setUf}
    />
  );

  const selectList = (
    <select name="state" onChange={setUf} value={value}>
      <option value="">Selecione...</option>
      {uflist.map((uf) => (
        <option key={uf} value={uf}>{uf}</option>
      ))}
    </select>
  );

  let component = <Loader status={loading} />;

  if (!loading) {
    component = selectList;
  }

  if (uflist.length === 0 && !loading) {
    component = fallbackManualInput;
  }

  return component;
};

export default UfInput;
