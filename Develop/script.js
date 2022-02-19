// Timestamp
let timeDay = moment().format('MMMM Do YYYY hh:mm');

$('#currentDay').append(timeDay);

let currentTime = moment().format("hh mm");

let timeDisplay = parseInt($('.list-group-item'));

if (currentTime >= timeDisplay) {
   $('.list-group-item').css('background-color', 'red');
}
else if (currentTime <= timeDisplay) {
    $('.list-group-item').css('background-color', 'gray');
}
else {
    $('.list-group-item').css('background-color', 'green');
}



// moment().format("MM ddd, YYYY hh:mm:ss a")

// $('.container').append()