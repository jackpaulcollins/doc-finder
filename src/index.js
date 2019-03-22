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
    const symptom = $("#user-input").val();
    const location = $("#user-location").val();
    console.log(location);
    let newLocation = new GoogleApiCall();
    let locationPromise = newLocation.newDataCall();
    locationPromise.then(function(response){
      let locationBody = JSON.parse(response);
      return locationBody.location;
      }, function(error){
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    console.log(locationPromise);
    let newQuery = new ApiCall();
    let promise = newQuery.newDataCall(symptom,locationPromise);
    promise.then(function(response){
      let body = JSON.parse(response);
      console.log(body);
      const output = parseData(body);
      const display = parseString(output);
      $(".output-field").html(display);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
