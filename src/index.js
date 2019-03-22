import './styles.scss';
import $ from 'jquery';
import './backend.js';
import {ApiCall} from './backend.js'

$(document).ready(function(){
  $("#submit").submit(function(){
    event.preventDefault();
    const userSearch = $("#user-input").val();
    let newQuery = new ApiCall();
    let promise = newQuery.newDataCall();
    promise.then(function(response){
      let body = JSON.parse(response);
      console.log(body);
      $(".output-field").text(body);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
