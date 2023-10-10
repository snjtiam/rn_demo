import axios from 'axios';

const {BASE_URL, WEATHER_API_KEY} = require('../constants/Api');

class WeatherApis {
  async getCurrentWeather(locationKey) {
    try {
      const response = await fetch(`${BASE_URL}currentconditions/v1/${locationKey}?apikey=${WEATHER_API_KEY}`);

      return response.json();
    } catch (error) {
      console.log('ERRR', error);
    }
  }
  async getCurrentLocation(locationKey) {
    try {
      const response = await fetch(`${BASE_URL}locations/v1/${locationKey}?apikey=${WEATHER_API_KEY}`);

      return response.json() ;
    } catch (error) {
      console.log('ERRR', error);
    }
  }

  async getCurrentConditionforTopcities({num}) {
    try {
      const response = await fetch(`${BASE_URL}currentconditions/v1/topcities/${num}?apikey=${WEATHER_API_KEY}`, {method: 'GET'});

      return response.json() ;
    } catch (error) {
      console.log('ERRR', error);
    }
  }

  //**************************************************************************

  async getGPSWeather({lat, lon}) {
    try {
      const encodeCoordinates = encodeURI(`${lat},${lon}`); //${latitude},${longitude}
      const response = await fetch(`${BASE_URL}locations/v1/cities/geoposition/search?apikey=${WEATHER_API_KEY}&q=${encodeCoordinates}`);
      const geocodingData = await response.json();
      return geocodingData;
      
    } catch (error) {
      console.log('ERR', error);
    }
  }

  getDetailedLWeatherInfo = async ({local, AdministrativeArea, county}) => {
    try {
      return null;
    } catch (error) {}
  };
}



export default new WeatherApis();
