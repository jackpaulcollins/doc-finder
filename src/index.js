import './styles.scss';
import $ from 'jquery';
import './backend.js';
import {ApiCall} from './backend.js';
import {GoogleApiCall} from './backend.js';
import { parseData } from './backend.js';
import { parseString } from './backend.js';

$(document).ready(function(){
  $("#submit").submit(function(){
    event.preventDefault();
    let newQuery = new ApiCall();
    const symptom = $("#user-input").val();
    const location = $("#user-location").val();
    let locationPromise = newQuery.locationCall(location);
    locationPromise.then(function(response){
    let locationBody = JSON.parse(response);
    let lat = locationBody.results[0].geometry.location.lat;
    let lng = locationBody.results[0].geometry.location.lng;
    let array = [lat, lng];
    let promise2 = newQuery.newDataCall(symptom, array);
    promise2.then(function(response){
      let body = JSON.parse(response);
      const output = parseData(body);
      const display = parseString(output);
      $(".output-field").html(display);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

    },function(error){
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
