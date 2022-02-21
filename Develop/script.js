// Timestamp
let timeDay = moment().format('MMMM Do YYYY hh:mm');
$('#currentDay').append(timeDay);


let currentTime = moment().format("hh:mm");





const getTime = () => {
    let timeList = $('.hour').find('span').text().trim();
    let setTime = moment(hour, 'L').set('hour', 9);
    console.log(timeList);
}
getTime();

// Put the current time into a function
// Dynamically declare the time-blocks?
// Maybe put the time blocks into an array?
// Add event listener on page load

// moment().format("MM ddd, YYYY hh:mm:ss a")

// $('.container').append()


// 0:div.hour childnodes text data


const createBlocks = () => {
    
}