import axios from 'axios';

const {BASE_URL, WEATHER_API_KEY} = require('../constants/Api');

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
      console.log('THIS IS RESPONSE', data.length);

      return data;
    } catch (error) {
      console.log('ERROR', error);
    }
  }
  async getLocationWeatherDetail(locationCode) {
    console.log('CODE', locationCode);
    try {
      const response = await fetch(
        `${BASE_URL}forecasts/v1/daily/1day/${locationCode}?apikey=${WEATHER_API_KEY}`,
      );
      const data = await response.json();

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

  async getTopCitiesAxios({count}) {
    const response = await axios({
      method: 'get',
      url: `${BASE_URL}locations/v1/topcities/${count}?apikey=${WEATHER_API_KEY}`,
    });

    return response;
  }
}

export default new WeatherApis();
