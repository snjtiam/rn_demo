const {BASE_URL, WEATHER_API_KEY} = require('../components/Constant_Api_Link')


class WeatherApis_jyoti {
     async getTopCities({count}) {
    try {
      const data = await fetch(
        `${BASE_URL}locations/v1/topcities/${count}?apikey=${WEATHER_API_KEY}`,
        {
          method: 'GET',
        },
      );
    //   const data = await response.json();
    //   console.log('THIS IS RESPONSE', data.length);

    console.log('RESPONSE', data);
    } catch (error) {
      console.log('ERROR', error);
    }
  }
}

export default new WeatherApis_jyoti();