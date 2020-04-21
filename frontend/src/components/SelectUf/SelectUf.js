import React from 'react';

const SelectUf = ({ uflist, value, setEstado }) => {
  const options = uflist.map((uf) => (
    <option key={uf} value={uf}>{uf}</option>
  ));

  return (
    <select name="state" onChange={setEstado} value={value}>
      <option value="">Selecione...</option>
      {options}
    </select>
  );
};

export default SelectUf;
