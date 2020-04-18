import React from 'react';

const Searchbar = props => {

  return(
    <div>
      <input type="text" name="city" placeholder="Cidade" />
      <select name="state">
        <option value="teste">Teste</option>
      </select>
      <button>Pesquisar</button>
    </div>
  );
}

export default Searchbar;