function logoutUser() {
    let arr = [];
    localStorage.setItem("currLoggedIn", JSON.stringify(arr));
    document.getElementsByClassName("welcomeNav")[0].classList.add("hide");
    document.getElementsByClassName("welcomeNav")[0].classList.remove("active");
    document.getElementsByClassName("signupNav")[0].classList.remove("hide");
}

function showWelcomeContent() {
    document.getElementsByClassName("welcomeNav")[0].classList.toggle("active");
}
function showMyAccount() {
    let accountDiv = document.getElementsByClassName("myAccount")[0];
    accountDiv.classList.remove("hide");
}

function pricing_div(){

    var cont = document.getElementById("pricing");

    var title = document.createElement("p");
    title.innerText="PRICING"
    title.style="margin-left:10px;margin-top:10px;font-weight:100;font-size:20px"

    var text = document.createElement("p");
    text.innerText="Tariff (Inclusive of all taxes)"
    text.style="margin-left:10px;font-weight:100 float:left"

    var est_amount = document.createElement("p");
    est_amount.innerText="₹"+"10000"
    est_amount.style="float:right;margin-top:-35px;margin-right:10px"

    var promo = document.createElement("button");
    promo.innerText="PROMOCODE"
    promo.id="promo"

    var image = document.createElement("img");
    image.src="https://w7.pngwing.com/pngs/660/1015/png-transparent-check-mark-computer-icons-green-tick-miscellaneous-angle-logo.png"
    image.id="check_logo"

    var div = document.createElement("div");
    var image2 = document.createElement("img");
    image2.src="https://www.freeiconspng.com/thumbs/check-tick-icon/orange-check-tick-icon-14.png";
    image2.id="image2"
    div.append(image2);

    var txt = document.createElement("p");
    txt.innerText="insure my ride"
    txt.id="txt"

    var txt2 = document.createElement("p");
    txt2.innerText="Covers the rider, pillion and the vehicle T&C apply"
    txt2.id="txt2"

    var insure = document.createElement("p");
    insure.innerText="₹"+"10000"
    insure.id="insure"

    var total_amount = document.createElement("p");
    total_amount.innerText="Total Amount"
    total_amount.id="total"

    var total_price = document.createElement("p");
    total_price.innerText="₹"+"10000"
    total_price.id="total_price"

    var cross= document.createElement("img");
    cross.src="https://cdn.w600.comps.canstockphoto.com/flat-red-cross-wrong-incorrect-picture_csp48195277.jpg";
    cross.id="cross"

    var exclude=document.createElement("p");
    exclude.innerText="Excludes Fuel"
    exclude.id="exclude"

    var tick = document.createElement("img");
    tick.src="https://image.similarpng.com/very-thumbnail/2021/05/Checkmark-green-tick-isolated-on-transparent-background-PNG.png"
    tick.id="tick"

    var includes = document.createElement("p");
    includes.innerText="Includes all taxes"
    includes.id="includes"

    cont.append(title,text,est_amount,promo,image,div,txt,txt2,insure,total_amount,total_price,cross,exclude,tick,includes)

  

}
pricing_div()

function right() {
    
    var cont = document.getElementById("right");

    var button = document.createElement("button");

    button.innerText="PAYMENT "+"₹"+"10000"
    button.id="button"

    cont.append(button);

}
right();

function left() {
    
    var cont = document.getElementById("left");

    var pickup = document.createElement("h3");

    pickup.innerText="PICKUP & RETURN LOCATION"

    pickup.id="pickup"

    var address = document.createElement("p");

    address.innerText="Mini Gulshan colony, Opposite lead grammer school, Shaikpet, Golconda, Hyderabad 500008";

    address.id="address"

    var late = document.createElement("p");

    late.innerText="Late return first two hours of delay   ₹100"
    
    late.id="late"

    var delay = document.createElement("p");

    delay.innerText="₹12 per hour after first two hours of delay"

    delay.id="delay"

    cont.append(pickup,address,late,delay);
}
left()