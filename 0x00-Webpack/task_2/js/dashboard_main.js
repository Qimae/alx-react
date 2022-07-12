import $ from "jquery";
import _ from "lodash";
import '../css/main.css';

let counter = 0;
$('body').append("<div id='logo'></div>");
$('body').append("<p>Holberton Dashboard</p>");
$('body').append("<p>Dashboard Data for the students</p>");
$('body').append("<button>Click here to get started</button>");
$('body').append("<p id='count'></p>");
$('body').append("<p>Copyright - Holberton School</p>");

function updateCounter() {
    counter++;
    $('#count').html(`${counter} clicks on the button`);
}

$("button").on('click', _.debounce(updateCounter, 500));