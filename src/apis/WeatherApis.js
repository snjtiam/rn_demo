const {BASE_URL, WEATHER_API_KEY} = require('../constants/constant');

class WeatherApis {
  async getTopCities({count}) {
    try {
      const response = await fetch(
        `${BASE_URL}locations/v1/topcities/${count}?apikey=${WEATHER_API_KEY}`,
        {
          method: 'GET',
        },
      );
      const data = await response.json();
      console.log('RESPONSE', data.length);

      return data;
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  async getTopCitiesThen({count}) {
    const response = await fetch(
      `${BASE_URL}locations/v1/topcities/${count}?apikey=${WEATHER_API_KEY}`,
      {
        method: 'GET',
      },
    )
      .then(response => {
        const data = response.json();
        console.log('RESPONSE', data.length);
        return data;
      })
      .catch(err => {
        console.log('ERROR', err);
      });
  }
}

export default new WeatherApis();
