const axios = require('./axios');

// decides which api to call based on args quantity
const getWeather = async (...args) => { 
  let params;

  if (args.length === 3)
    params = '?q=' + args.map(a => a).join(',');
  
  if (args.length === 2)
    params = `?lat=${args[0]}&lon=${args[1]}`
  
  const weatherByCity = await axios.get(
    `${params}&appid=${process.env.API_KEY}&lang=pt_br`
  );
  
  return weatherByCity.data;
};

module.exports = getWeather;
