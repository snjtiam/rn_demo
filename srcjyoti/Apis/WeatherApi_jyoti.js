const {BASE_URL, WEATHER_API_KEY} = require('../components/Constant_Api_Link');

class WeatherApis_jyoti {
  // 1st class-------------------------------------------------
  async TopCityList({count}) {
    try {
      const response = await fetch(`${BASE_URL}locations/v1/topcities/${count}?apikey=${WEATHER_API_KEY}`, {method: 'GET'});

      const data = await response.json();
      console.log('CORRECT', data);
      console.log('THIS IS RESPONSE------------------------------->', data.length);
      return data;
    } catch (error) {
      console.log('WRONG', error);
    }
  }
  //2nd class--------------------------------------------------
  async TopCityListThen({count}) {
    fetch(`${BASE_URL}locations/v1/topcities/${count}?apikey=${WEATHER_API_KEY}`, {method: 'GET'})
      .then(response => response.json())
      .then(response => {
        console.log('CORRECT', response);
        console.log('THIS IS RESPONSE-----------------------------------', response.length);
      })
      .catch(err => {
        console.log('fault', err);
      });
  }
  async TopLocationWeatherDetail(locationCode) {
    try {
      const response = await fetch(`${BASE_URL}forecasts/v1/daily/1day/${locationCode}?apikey=${WEATHER_API_KEY}`);

      const data = await response.json();
      return data;
    } catch (error) {
      console.log('WRONG', error);
    }
  }

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

export default new WeatherApis_jyoti();

///async await -- try and catch
///async fetch -- then and catch
