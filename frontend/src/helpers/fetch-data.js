import axios from 'axios';

export const fetchUf = async () => {
  const ufs = await axios({
    url: 'localidades/estados',
    baseURL: 'https://servicodados.ibge.gov.br/api/v1',
    responseType: 'json'
  });
  const ufsData = await ufs.data;
  const parsedUfs = ufsData.map((uf) => uf.sigla).sort((a, b) => a > b);
  return parsedUfs;
};

export const fetchWeather = async (location) => {
  const weatherRequest = await axios({
    url: 'http://localhost:5000/weather/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: location
  });
  // 'data' as in axios response
  const weatherResponse = await weatherRequest.data;

  // 'data' as in backend object with weather information
  return weatherResponse.data;
};


export const dealWithIt = (error) => {
  if (error.response) {
    console.log('regular error: ');
    return { ...error.response.data };
  } if (error.request) {
    console.log('no response error: ');
    return { error: error.message };
  }
  console.log('other error: ');
  return { error: error.message };
};
