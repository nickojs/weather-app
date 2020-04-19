const axios = require('axios');

const validateCity = async (_, { req }) => {
  try {
    const { city, state } = req.body;
    const parsedCity = city.toUpperCase();
    const parsedState = state.toUpperCase();
    
    const stateList = await axios({
      method: 'get',
      url: 'localidades/estados',
      baseURL: 'https://servicodados.ibge.gov.br/api/v1'
    });
    const stateListData = await stateList.data;

    const currentState   = stateListData.filter(uf => uf.sigla === parsedState);
    const currentStateId = currentState[0].id;

    const citiesByState = await axios({
      method: 'get',
      url:`localidades/estados/${currentStateId}/municipios`,
      baseURL: 'https://servicodados.ibge.gov.br/api/v1'
    });
    const citiesByStateData = citiesByState.data.map(
      city => city.nome.toUpperCase()
    );

    const locateCity = citiesByStateData.find(c => c === parsedCity);
    if(!locateCity) 
      return Promise.reject(`Cidade '${city}' não encontrada no estado ${state}`);

  } catch (error) {
    throw new Error(error);
  }

}

module.exports = validateCity;
