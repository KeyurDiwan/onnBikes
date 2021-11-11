let obj = JSON.parse(localStorage.getItem("finalBookedBike"));

let startdate = JSON.parse(localStorage.getItem("startingDateObject"));

let finalprice = JSON.parse(localStorage.getItem("onnbike_price"));

let enddate = JSON.parse(localStorage.getItem("endingDateObject"));
if (enddate == null) {
  enddate = JSON.parse(localStorage.getItem("30daysdate"));
}

// Extracting Manufactirer details from Local Storage
let bikemanufacturer = document.getElementById("bikemanufacturer");
bikemanufacturer.innerHTML = obj[0].manufacturer;

// Extracting model details from Local Storage
let bikemodel = document.getElementById("bikemodel");
bikemodel.innerHTML = obj[0].model;

// Calculating price with insurance
let changeprice = document.querySelectorAll("#changeprice");
let n = changeprice.length;
for (let i = 0; i < n; i++) {
  changeprice[i].innerHTML = `${finalprice + 19}`;
}

// Extracting Start date from Local Storage
let date1 = document.getElementById("startdate");
date1.innerHTML = startdate.date;
let month1 = document.getElementById("startmonth");
var y = "" + startdate.year;
var x = y.slice(2);
month1.innerHTML = `${startdate.month} ${x}`;
let weekday1 = document.getElementById("startweekday");
weekday1.innerHTML = startdate.weekDay;
let time1 = document.getElementById("starttime");
time1.innerHTML = startdate.time;

// Extracting End date from Local Storage
let date2 = document.getElementById("enddate");
date2.innerHTML = enddate.date;
let month2 = document.getElementById("endmonth");
var y = "" + enddate.year;
var x = y.slice(2);
month2.innerHTML = `${enddate.month} ${x}`;
let weekday2 = document.getElementById("endweekday");
weekday1.innerHTML = enddate.weekDay;
let time2 = document.getElementById("endtime");
time2.innerHTML = enddate.time;

// Calculating Tariff of the price
let tariff = document.getElementById("tariff");
tariff.innerHTML = `${finalprice}`;

// Extracting Kilometers from local Storage
let kilometers = document.getElementById("kilometer");
kilometers.innerHTML = `${obj[0].free}`;

// Extracting Excess from local Storage
let excess = document.getElementById("excess");
excess.innerHTML = `${obj[0].excess}`;

function paymentAccept(para) {
  let upi_address = document.getElementById(para).value;
  if (validateMail(upi_address)) {
    localStorage.setItem("paymentDone", "DONE");
    window.location.href = "./Project Folder/project_oonbikes/home.html";
  } else {
    alert("Please give correct upi address");
  }
}

//Validatiing UPI string (It should be in like ex: abc@upi[some Alphabets@upi])
function validateMail(str) {
  let regex = /[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/;
  return regex.test(str);
}
