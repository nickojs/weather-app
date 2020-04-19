import React from 'react';

const SelectUf = props => {
  const options = props.uflist.map(uf => (
    <option key={uf} value={uf}>{uf}</option>
  ));

  return(
    <select name="state" onChange={props.setEstado}>
      {options}
    </select>
  );
}

export default SelectUf;
