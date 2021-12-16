window.addEventListener("scroll", navigationChanging);

function navigationChanging() {
    let navigationBar = document.getElementsByClassName("navigation_bar")[0];
    navigationBar.classList.toggle("scrollingNavigation", window.scrollY > 0);
    let hamburgerMenu = document.getElementsByClassName("hamburgerMenu")[0];
    hamburgerMenu.classList.toggle("scrollHamburger", window.scrollY > 0);
}

function showLoginSignupPopup() {
    let loginDiv = document.getElementsByClassName("loginPopupOverlay")[0];
    loginDiv.classList.toggle("hide");
    loginDiv.classList.add("active");
    document.body.style.overflow = "hidden";
}

function showWelcomeContent() {
    document.getElementsByClassName("welcomeNav")[0].classList.toggle("active");
}

function showMyAccount() {
    let accountDiv = document.getElementsByClassName("myAccountOverlay")[0];
    accountDiv.classList.remove("hide");
    document.body.style.overflow = "hidden";
}

function logoutUser() {
    let arr = [];
    localStorage.setItem("currLoggedIn", JSON.stringify(arr));
    document.getElementsByClassName("welcomeNav")[0].classList.add("hide");
    document.getElementsByClassName("welcomeNav")[0].classList.remove("active");
    document.getElementsByClassName("signupNav")[0].classList.remove("hide");
}
var final_data = JSON.parse(localStorage.getItem("finalBookedBike"));
//console.log(final_data);
var companyName = document.getElementById("company_name");
companyName.innerHTML = final_data[0].manufacturer;

var modelName = document.getElementById("model-name");
modelName.innerHTML = final_data[0].model;

var bikePic = document.getElementById("bike-pic");
var bikePic1 = document.createElement("img");
bikePic1.src = `${final_data[0].imgLink}`;
bikePic.appendChild(bikePic1);
//console.log(final_data[0].imgLink);

var adresslName = document.getElementById("abc2");
adresslName.innerHTML = final_data[0].address;

var excess = document.getElementById("excess");
excess.innerHTML = `Excess ₹ ${final_data[0].excess}/km`;

var freelKM = document.getElementById("freeKm");
freelKM.innerHTML = `${final_data[0].free}Kms free`;

var price_without_discount = document.getElementById("price_without_discount");
price_without_discount.innerHTML = `₹${final_data[0].price}`;

var start = JSON.parse(localStorage.getItem("startingDateObject"));
var end = JSON.parse(localStorage.getItem("endingDateObject"));
if (end == null) {
    end = JSON.parse(localStorage.getItem("30daysdate"));
}

//console.log(start);
//console.log(end);

var month_day = document.getElementById("month_day");
month_day.innerHTML = start.date;

var monthYear = document.getElementById("monthYear");
monthYear.innerHTML = `${start.month} 21`;

var day = document.getElementById("day");
day.innerHTML = start.weekDay;

var timehrs = document.getElementById("timehrs");
timehrs.innerHTML = start.time;

var monthday1 = document.getElementById("month_day1");
monthday1.innerHTML = end.date;

var monthYear1 = document.getElementById("monthYear1");
monthYear1.innerHTML = `${end.month} 21`;

var day1 = document.getElementById("day1");
day1.innerHTML = end.weekDay;

var timehrs1 = document.getElementById("timehrs1");
timehrs1.innerHTML = end.time;

var promo_code = document.getElementById("inp");
var promo_code_discounted_amount = document.getElementById("promo-code-price1");
var promo_code_btn = document.getElementById("promocodetick");

var net_money = Number(final_data[0].price);

promo_code_btn.addEventListener("click", promo);
var promo_code_flag = false;
var count = 0;

function promo() {
    if (promo_code.value == "MASAI30" && count < 1) {
        promo_code_discounted_amount.style.fontSize = "14.5px";
        promo_code_btn.src = "IMG_FILE/checked.png";
        promo_code_discounted_amount.style.color = "red";
        promo_code_discounted_amount.innerHTML = `-₹${net_money * 0.3}`;

        net_money = final_data[0].price;
        promo_code_flag = true;
        count++;
    } else {
        promo_code_btn.src = "IMG_FILE/remove.png";
        promo_code_discounted_amount.innerHTML = ``;
    }
}

var discount_inner_image = document.createElement("img");
discount_inner_image.src = "IMG_FILE/insurance.svg";

var discount_image = document.getElementById("insureTheRide-btn");
var discount_price = document.getElementById("insureTheRide_price");

discount_image.addEventListener("click", adder);
var add = 0;
var promo_code_flag1 = false;

var payment_color = document.getElementById("checkbox");
var totalAmounttFinalPrice = document.getElementById("totalAmounttFinalPrice");
totalAmounttFinalPrice.innerHTML = `₹${net_money}`;
var payment_total_color = document.getElementById("payment-total");
payment_color.addEventListener("click", test);
var c = 0;
function adder() {
    add++;
    if (add % 2 != 0 && c < 1) {
        discount_inner_image.style.display = "block";
        discount_image.style.border = "transparent";
        discount_image.appendChild(discount_inner_image);
        discount_price.style.fontSize = "15px";
        discount_price.style.color = "green";
        discount_price.innerHTML = `+₹${19}`;

        // net_money = net_money - net_money * 0.3;
        net_money = net_money + 19;
        totalAmounttFinalPrice.innerHTML = `₹${net_money}`;
        c++
        promo_code_flag1 = true;
    } else {
        discount_inner_image.style.display = "none";
        discount_image.style.border = "0.3px solid grey";
        discount_price.innerHTML = `₹${0}`;
    }
}

var add2 = 0;

function test() {
    add2++;
    if (add2 % 2 != 0) {
        if (promo_code_flag == true) {
            promo_code_flag = false;
            // net_money = net_money - net_money * 0.3;
            if (promo_code_flag1 == true) {
                promo_code_flag1 = false;
                net_money = net_money + 19;
            } else {
                net_money = net_money;
            }
        } else {
            net_money = net_money;
            if (promo_code_flag1 == true) {
                promo_code_flag1 = false;
                net_money = net_money + 19;
            } else {
                net_money = net_money;
            }
        }

        payment_total_color.style.background = "rgb(29,45,81)";
        payment_total_color.style.opacity = "100";
        payment_total_color.innerHTML = `PAYMENT ₹${net_money}`;
        totalAmounttFinalPrice.innerHTML = `₹${net_money}`;
        // console.log(net_money);
        payment_total_color.addEventListener("click", paymentPage);
        localStorage.setItem("onnbike_price", net_money);

        function paymentPage() {
            window.open("payment.html", "_parent");
        }
    } else if (add2 == 0) {
        payment_total_color.style.background = "rgb(210,211,212)";
        payment_total_color.style.opacity = "0.6";
    } else {
        payment_total_color.style.background = "rgb(210,211,212)";
        payment_total_color.style.opacity = "0.6";
        payment_total_color.style.cursor = "not-allowed";
    }

    console.log(add2);
}