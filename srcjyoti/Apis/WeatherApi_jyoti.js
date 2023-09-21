
const {BASE_URL, WEATHER_API_KEY} = require('../components/Constant_Api_Link')


class WeatherApis_jyoti{
  // 1st class-------------------------------------------------
  async TopCityList ({count}){
    try{
      const response = await fetch(
        `${BASE_URL}locations/v1/topcities/${count}?apikey=${WEATHER_API_KEY}`,{ method : 'GET'},);
      
        const data = await response.json();
        console.log('CORRECT', data);
        console.log('THIS IS RESPONSE------------------------------->', data.length);
        return data;
    }catch(error){
        console.log('WRONG', error);
      }

  }
  //2nd class--------------------------------------------------

  async TopCityListThen ({count}){
    
       fetch(
        `${BASE_URL}locations/v1/topcities/${count}?apikey=${WEATHER_API_KEY}`,{ method : 'GET'},
        )
          .then( response=> response.json())
          .then(response=>{
              console.log('CORRECT',  response);
              console.log('THIS IS RESPONSE-----------------------------------', response.length);
            })
            .catch(err=>{
              console.log('fault',err)
            })
      
          }
  }
  

export default new WeatherApis_jyoti();










///async await
// try and catch
