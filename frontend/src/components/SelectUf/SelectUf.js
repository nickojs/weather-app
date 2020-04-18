import React from 'react';

const SelectUf = props => {
  const options = props.uflist.map(uf => (
    <option value={uf}>{uf}</option>
  ));

  return(
    <select name="state">
      {options}
    </select>
  );
}

export default SelectUf;
