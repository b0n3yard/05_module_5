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
 var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var swdate = $('#currentDay')

var nine = $('#hour-9')
var test = $('.hi')
// var test2 = $('.hi').find('.testing9')
var btn = $('button')
var date = dayjs().date()
var day = dayjs().hour()
console.log(day)
var newday = new Date()
var mnth = months[newday.getMonth()];
console.log(newday)
var count = 0;
console.log(mnth + ' '+ date)
// console.log (mnth)
swdate.append(mnth + ' '+ date);



for(x = 8; x < 17; x++){
var num = x + 1;
var str = 'hour-';
var wish = 'testing';
var nmstr = num.toString();
var com2 = wish + nmstr;
var com = str + nmstr;
count = count +1;
console.log(count)
// var test = $('.hi')
if(num < day){
  test.append('<div class = "row time-block past '+ com2 + '" '+'id = "'+ com+ '" >')
}else if( num > day){
  test.append('<div class = "row time-block future '+ com2 + '" '+'id = "'+ com+ '">')
}else if(num === day){
  test.append('<div class = "row time-block present '+ com2 + '" '+'id = "'+ com+ '">')
}
var tweb = $('.'+com2);
if (num > 12){
  var nwnm = num - 12;
  tweb.append('<div class = " col-2 col-md-1 hour text-center py-3">' + nwnm + "PM"+'</div>');
}else{
  tweb.append('<div class = " col-2 col-md-1 hour text-center py-3">' + nmstr + "AM"+'</div>');
}

tweb.append('<textarea class = "col-8 col-md-10 description"' + 'rows = "3">');
var amndtxt = localStorage.getItem( com)
var set = $('#' + com + ' ' + 'textarea')
set.val(amndtxt)
tweb.append('<button class = "btn saveBtn col-2 col-md-1 ending"' + 'aria-label = "save">');
// tweb.append($('section'),'class = " col-2 col-md-1 hour text-center py-3">' + nmstr + "AM");
}

var num = x + 1;
var tweb2 = $('.ending');
tweb2.append('<i class= "fas fa-save"' + 'aria-hidden = "true">');
var test2 = $('.hi').find('button')

function savfnctin(e){
  
  // var textarea = test2.prev();
  // var hlp = textarea.find('.description')
  // console.log(hlp)
  // console.log(text)
  var des = $('#' + e.target.parentElement.id + ' '+ 'textarea')
  var text = des.val();
 
  console.log(text);
  // console.log(textarea)
    var hly = localStorage.setItem(e.target.parentElement.id,  text )
    console.log(e.target.parentElement.id)
    console.log(e.target.id)
    // var newtxt = 'job done';
    // des.val(newtxt);
    

}
// tweb.append('<button class = "btn saveBtn col-2 col-md-1 ending"' + 'aria-label = "save">');



console.log(count)
test2.on('click', savfnctin)
// nine.removeClass('past');
// nine.addClass('future')
// .attr('id', 'hour-5');