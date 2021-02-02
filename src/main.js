import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from './journal.js';
import { entry1 } from './journal.js';


$(document).ready(function(){
  $("button#submit").submit(function(event) {
    event.preventDefault();
    let date = $("input#date").val();
    let title = $("input#title").val(); 
    let body = $("textarea#paragraph").val()
    console.log(body);
    console.log(title);
    let bodyArray = entry.bodyArray();
    entry1 = new Entry(title,date,body);
    // $("#teaser").
  });
});



