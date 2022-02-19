// Timestamp
let timeDay = moment().format('MMMM Do YYYY hh:mm');

$('#currentDay').append(timeDay);

let currentTime = moment().format("hh");
let timeDisplay = $('.list-group-item');

if (currentTime >= timeDisplay) {
   $('.list-group-item').css('background-color', 'red')
}



// moment().format("MM ddd, YYYY hh:mm:ss a")

// $('.container').append()