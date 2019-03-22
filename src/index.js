import './styles.scss';
import $ from 'jquery';
import './backend.js';
import {ApiCall} from './backend.js'
import { parseData } from './backend.js'
import { parseString } from './backend.js'

$(document).ready(function(){
  $("#submit").submit(function(){
    event.preventDefault();
    const userSearch = $("#user-input").val();
    let newQuery = new ApiCall();
    let promise = newQuery.newDataCall();
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
