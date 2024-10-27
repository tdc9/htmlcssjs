// Dates also includes time.
//Most useful cases of dates that are used

var currentDT = new Date();
console.log(currentDT);

var currentTimeUnix= currentDT.getTime();
console.log(currentTimeUnix);

var full = currentDT.getFullYear();
var date = currentDT.getDate();
var day = currentDT.getDay();
var months = currentDT.getMonth();
var string= currentDT.toDateString();

console.log(full)
console.log(date)
console.log(day)
console.log(months)
console.log(string)


// 0,1,2,3,4,5,6
// S,M,T,W,TH,FRI,SAT   
var ms = currentDT.getMilliseconds();
var timezone= currentDT.getTimezoneOffset();
var sec= currentDT.getSeconds();
var utc = currentDT.getUTCDate();

console.log(ms)
console.log(timezone)
console.log(sec)
console.log(utc)




var someDateTime = 1414386751;
var converted = new Date(someDateTime);
console.log(converted)


var random= '12/12/2022';
var convertedrandom= new Date(random);
console.log(convertedrandom.getTime());