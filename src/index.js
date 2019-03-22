import './styles.scss';
import $ from 'jquery'
import './backend.js'

$(document).ready(function(){
  $("#submit").submit(function(){
    event.preventDefault();
    const userSearch = $("#user-input").val();
    console.log(userSearch);
  });
});
