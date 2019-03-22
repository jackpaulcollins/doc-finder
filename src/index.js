import './styles.scss';
import $ from 'jquery'

$(document).ready(function(){
  $("#submit").submit(function(){
    event.preventDefault();
    const userSearch = $("#user-input").val();
    console.log(userSearch);
  });
});
