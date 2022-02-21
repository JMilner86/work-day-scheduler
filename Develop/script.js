// Timestamp
let timeDay = moment().format('MMMM Do YYYY hh:mm');
$('#currentDay').append(timeDay);

// moment().format("MM ddd, YYYY hh:mm:ss a")
// Put the current time into a function
// Dynamically declare the time-blocks?
// Maybe put the time blocks into an array?
// Add event listener on page load
// $('.container').append()
// 0:div.hour childnodes text data


const getTime = (timeBlock) => {
    let timeList = parseInt($(timeBlock).find('.hour').text().trim());
    let currentTime = moment().format("hh:mm");
    console.log(timeList)
};

setInterval(function() {
    $(".time-block").each(function(index, el) {
      getTime(el);
    });
}, 1000);

if (timeList < currentTime) {
    $('.time-block row').addClass('past')
}