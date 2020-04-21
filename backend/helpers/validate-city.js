const axios = require('./axios-ibge');

const validateCity = async (_, { req }) => {
  try {
    // "parses" the data to uppercase to avoid false positives
    const { city, state } = req.body;
    const parsedCity = city.toUpperCase();
    const parsedState = state.toUpperCase();

    // fetches a list of all brazilian states
    const stateList = await axios.get('localidades/estados');
    const stateListData = await stateList.data;

    // search for current state on fetched list
    const currentState = stateListData.filter(
      (uf) => uf.sigla === parsedState
    );

    if (currentState.length === 0) {
      return Promise.reject(new Error(`Estado ${state} é invalido`));
    }

    const currentStateId = currentState[0].id;

    // fetches a list of cities based on selected state
    const citiesByState = await axios.get(
      `localidades/estados/${currentStateId}/municipios`
    );
    const citiesByStateData = citiesByState.data.map(
      (each) => each.nome.toUpperCase()
    );

    // verifies if current city exists on this state, using previous list
    const locateCity = citiesByStateData.find((c) => c === parsedCity);
    if (!locateCity) {
      return Promise.reject(
        new Error(`Cidade '${city}' não encontrada no estado ${state}`)
      );
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = validateCity;
