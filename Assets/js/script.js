
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var swdate = $('#currentDay')
var svmsg = $('.svmsg')
var nine = $('#hour-9')
var test = $('.hi')
var btn = $('button')
var date = dayjs().date()
var day = dayjs().hour()
var newday = new Date()
var mnth = months[newday.getMonth()];
var count = 0;
swdate.append(mnth + ' ' + date);



for (x = 8; x < 17; x++) {
  var num = x + 1;
  var str = 'hour-';
  var wish = 'testing';
  var nmstr = num.toString();
  var com2 = wish + nmstr;
  var com = str + nmstr;
  count = count + 1;
  if (num < day) {
    test.append('<div class = "row time-block past ' + com2 + '" ' + 'id = "' + com + '" >')
  } else if (num > day) {
    test.append('<div class = "row time-block future ' + com2 + '" ' + 'id = "' + com + '">')
  } else if (num === day) {
    test.append('<div class = "row time-block present ' + com2 + '" ' + 'id = "' + com + '">')
  }
  var tweb = $('.' + com2);
  if (num > 12) {
    var nwnm = num - 12;
    tweb.append('<div class = " col-2 col-md-1 hour text-center py-3">' + nwnm + "PM" + '</div>');
  } else {
    tweb.append('<div class = " col-2 col-md-1 hour text-center py-3">' + nmstr + "AM" + '</div>');
  }

  tweb.append('<textarea class = "col-8 col-md-10 description"' + 'rows = "3">');
  var amndtxt = localStorage.getItem(com)
  var set = $('#' + com + ' ' + 'textarea')
  set.val(amndtxt)
  tweb.append('<button class = "btn saveBtn col-2 col-md-1 ending"' + 'aria-label = "save">');
}

var num = x + 1;
var tweb2 = $('.ending');
tweb2.append('<i class= "fas fa-save"' + 'aria-hidden = "true">');
var test2 = $('.hi').find('button')

function savfnctin(e) {
  var des = $('#' + e.target.parentElement.id + ' ' + 'textarea')
  var text = des.val();
  var hly = localStorage.setItem(e.target.parentElement.id, text)
  svmsg.append('<p>' + 'saved to localstorage' + '</p>')

}



console.log(count)
test2.on('click', savfnctin)
