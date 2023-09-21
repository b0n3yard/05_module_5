// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
// var num = 5;
// var str = 'hour-';
// var nmstr = num.toString();
// var com = str + nmstr;
// console.log(com)
// console.log(typeof com)
var nine = $('#hour-9')
var test = $('.hi')
// var tweb = $(".testing");
// var tweb2 = $('.ending');
// var test = $('.hi')
var day = dayjs().hour()
console.log(day)
var newday = new Date().getDate();
console.log(newday)
var count = 0;

for(x = 0; x < 24; x++){
var num = x + 1;
var str = 'hour-';
var nmstr = num.toString();
var com = str + nmstr;
count = count +1;
console.log(count)
// var test = $('.hi')
if(num < day){
test.append('<div class = "row time-block past testing"' + 'id = "'+ com+ '" >')
}else if( num > day){
  test.append('<div class = "row time-block future testing"' + 'id = "'+ com+ '" >')
}else if(num === day){
  test.append('<div class = "row time-block present testing"' + 'id = "'+ com+ '" >')
}
var tweb = $(".testing");

// tweb.append($div,'class = " col-2 col-md-1 hour text-center py-3">' + nmstr + "AM");
}

var num = x + 1;
tweb.append('<div class = " col-2 col-md-1 hour text-center py-3">' + nmstr + "AM"+'</div>');
tweb.append('<textarea class = "col-8 col-md-10 description"' + 'rows = "3">');

tweb.append('<button class = "btn saveBtn col-2 col-md-1 ending"' + 'aria-label = "save">');


var tweb2 = $('.ending');
tweb2.append('<i class= "fas fa-save"' + 'aria-hidden = "true">');


console.log(count)
// nine.removeClass('past');
// nine.addClass('future')
// .attr('id', 'hour-5');