const request = require('request');

function highlights(stk,api){


    request(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${stk}.BSE&outputsize=full&apikey=${api}`, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    const jsondata = JSON.parse(body);


    
    const weekly_time_series = jsondata["Weekly Time Series"];
    const dates = Object.keys(weekly_time_series);

    const last_date_str = dates[0];
    const first_date_str = dates[dates.length - 1];

   const last_date = new Date(last_date_str);
   const first_date = new Date(first_date_str);

   const total_duration = (last_date - first_date) / (1000 * 60 * 60 * 24);

   console.log("Last date:", last_date_str);
   console.log("First date:", first_date_str);


const total_weeks = Math.floor(total_duration / 7);
const remaining_days = total_duration % 7;

console.log(`The data is avaliable from last : ${total_weeks} weeks and ${remaining_days} days.`);


  
   
   console.log("Share Value(Weekly Analysis) : " + jsondata["Weekly Time Series"][last_date_str]["4. close"]);


    

  }

  else{
    console.log("invalid request. Check the stock name")
  }


  
  
});



}
module.exports = {highlights}