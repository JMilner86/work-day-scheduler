// Timestamp
let timeDay = moment().format('MMMM Do YYYY hh:mm');
$('#currentDay').append(timeDay);

// Set the time blocks colors
const getTime = () => {
   let time = parseInt(moment().format('HH'));
   $('.time-block').each(function(){
       let hour = parseInt($(this).attr('id'));
      if (hour < time) {
    $(this).find('textarea').addClass('past')
}

else if (time == hour) {
    $(this).find('textarea').addClass('present')
}

else {
    $(this).find('textarea').addClass('future')
} 
   })

};
// Checks every second to see what time it is by running getTime every 30 minutes
setInterval(
 getTime(),   
 1800000);
// save to local storage
const saveInput = () => {
    localStorage.setItem('9', $('#9').find('textarea').val());
    localStorage.setItem('10', $('#10').find('textarea').val());
    localStorage.setItem('11', $('#11').find('textarea').val());
    localStorage.setItem('12', $('#12').find('textarea').val());
    localStorage.setItem('13', $('#13').find('textarea').val());
    localStorage.setItem('14', $('#14').find('textarea').val());
    localStorage.setItem('15', $('#15').find('textarea').val());
    localStorage.setItem('16', $('#16').find('textarea').val());
    localStorage.setItem('17', $('#17').find('textarea').val());
    loadInput();
};
// pull from local storage
const loadInput = () => {
   $('#9').find('textarea').val(localStorage.getItem('9'));
   $('#10').find('textarea').val(localStorage.getItem('10'));
   $('#11').find('textarea').val(localStorage.getItem('11'));
   $('#12').find('textarea').val(localStorage.getItem('12'));
   $('#13').find('textarea').val(localStorage.getItem('13'));
   $('#14').find('textarea').val(localStorage.getItem('14'));
   $('#15').find('textarea').val(localStorage.getItem('15'));
   $('#16').find('textarea').val(localStorage.getItem('16'));
   $('#17').find('textarea').val(localStorage.getItem('17'));
}
// run functions and add event listeners
$('.saveBtn').on('click', saveInput);
loadInput();

