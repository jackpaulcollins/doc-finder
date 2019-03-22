import $ from 'jquery';


export class ApiCall{
  newDataCall(){
    return new Promise(function(resolve,reject){
    let request = new XMLHttpRequest();
    const location = 'location=37.773%2C-122.413%2C100&user_location=45.5122%2C122.6587';
    let url = 'https://api.betterdoctor.com/2016-03-01/doctors?' + location + '&skip=0&limit=10&user_key=' + process.env.exports.apiKey
    request.onload = function(){
      if (this.status == 200){
        resolve(request.response);
      } else{
        reject(Error(request.statusText));
      }
    };
      request.open("GET", url, true);
      request.send();
    });
  }
}
