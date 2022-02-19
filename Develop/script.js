// Timestamp
let timeDay = moment().format('MMMM Do YYYY hh:mm');

$('#currentDay').append(timeDay);



let currentTime = moment().format("hh:mm");

let timeDisplay = $('.hour');


console.log(timeDisplay);


// If the time is equal to the time displayed show red
if (currentTime >= timeDisplay) {
   $('.time-block row').css('.present');
}
// If time is past show gray
else if (currentTime <= timeDisplay) {
    $('.time-block row').css('.past');
}
// If time is yet to come show green
else {
    $('.list-group-item').css('.future');
}



// moment().format("MM ddd, YYYY hh:mm:ss a")

// $('.container').append()