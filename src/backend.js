import $ from 'jquery';


export class ApiCall{
  newDataCall(symptom){
    return new Promise(function(resolve,reject){
    let request = new XMLHttpRequest();
    const location = 'OR';
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=${location}&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
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

export class GoogleApiCall{
  newDataCall(location){
    return new Promise(function(resolve,reject){
    let request = new XMLHttpRequest();
    const location = 'OR';
    let url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.locationApi}`
    request.onload = function(){
      if (this.status == 200){
        resolve(request.response);
      } else{
        reject(Error(request.statusText));
      }
    };
      request.open("POST", url, true);
      request.send();
    });
  }
}



export function parseData(input){
  const data = input.data;
  const output = [];
  data.forEach(function(obj){
    output.push(obj.practices[0].name,obj.practices[0].phones[0].number,obj.practices[0].visit_address.street,obj.practices[0].visit_address.city,obj.practices[0].visit_address.state,`Accepting new patients: ${obj.practices[0].accepts_new_patients}`)
    if(obj.practices[0].website){
      output.push(`<a href='${obj.practices[0].website}'>${obj.practices[0].website}</a>` )
    }
  })
  console.log(output)
  return output
}

export function parseString(string){
  let output = [];
  for (let i=0;i<string.length;i++){
    output.push(string[i] + '<br>');
  }
  return output
}
