// function slideshow() {
//     let div = document.getElementById("header_slideshow");
//     let img = document.createElement("img");

//     var arr = [
//         "https://www.onnbikes.com/img/Self-ride-bike-rentals-desktop@2x.jpg",
//         "https://www.onnbikes.com/img/long-term-desktopbanner@2x.jpg",
//         "https://www.onnbikes.com/img/R2o-desktopbanner.jpg",
//     ];

//     img.src = arr[0];
//     let i = 0;
//     div.append(img);

//     setInterval(function() {
//         img.src = arr[i];
//         i++;
//         if (i == arr.length) {
//             i = 0;
//         }
//         // div.append(img);
//     }, 2000);
// }
// slideshow();

var hr = 1;

function showSignup() {
    let login = document.getElementById("login_form");
    let signup = document.getElementById("signup_form");
    let heading = document.getElementsByClassName("heading")[0];
    let loginHeading = heading.children[0];
    let signupHeading = heading.children[1];
    login.classList.toggle("hide");
    signup.classList.toggle("hide");
    loginHeading.classList.toggle("currForm");
    signupHeading.classList.toggle("currForm");
}

function dayrating() {
    function diff_hours(dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60 * 60;
        return Math.abs(Math.round(diff));
    }
    let calender = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    let d1 = JSON.parse(localStorage.getItem("startingDateObject"));
    let d2 = JSON.parse(localStorage.getItem("endingDateObject"));
    if (d2 == null) {
        d2 = {
            date: d1.date,
            month: d1.month,
            time: d1.time,
            weekDay: d1.weekDay,
            year: d1.year,
        };

        let x = calender.indexOf(d1.month) + 1;
        if (x == calender.length) {
            x = 0;
            d2.month = calender[x];
        } else {
            d2.month = calender[x];
        }
        localStorage.setItem("30daysdate", JSON.stringify(d2));
    }

    dt1 = new Date(`${d1.month} ${d1.date}, ${d1.year} ${d1.time}`);
    dt2 = new Date(`${d2.month} ${d2.date}, ${d2.year} ${d2.time}`);

    hr = diff_hours(dt1, dt2);
    if (hr % 720 == 0) {
        hr = Math.round(hr / 3);
    } else if (hr % 360 == 0) {
        hr = Math.round(hr / 5);
    } else if (hr % 240 == 0) {
        hr = Math.round(hr / 7);
    } else if (hr % 24 == 0) {
        hr = Math.round(hr / 6);
    }
    bikesobject();
}
dayrating();

const arrofLocation = [{
        city: "BENGALURU",
        location: "Silk Board SRCM",
        timing: "7 AM - 9 PM",
        reference: "Scrum Heartfulness Meditation Centre",
        address: "28, Hosur Road, Madiwala, Balaji Nagar, BTM Layout 1, Central Silk Board Colony, Stage 2, BTM Layout, BENGALURU, Karnataka 560068",
    },
    {
        city: "BENGALURU",
        location: "Yelahanka",
        timing: "7 AM - 8 PM",
        reference: "Green Trends Salon",
        address: "200/1, KV SR Layout, Kattigenahalli, Bagalur Main Road, Next to Reliance Fresh, BENGALURU - 560063",
    },
    {
        city: "BENGALURU",
        location: "Electronic City",
        timing: "7 AM - 8 PM",
        reference: "Next to paradise Biryani",
        address: "#634/472, Doddathogur, Velankani Gate, Electronic City Phase 1, Electronics City Phase,BENGALURU 560100",
    },
    {
        city: "BENGALURU",
        location: "Kundalahalli",
        timing: "7 AM - 8 PM",
        reference: "Kundalahalli gate signal",
        address: "Munni Reddy Complex, Varthur Main Road, Opposite Nadhini Wines, Silver Springs Layout, Kundalahalli, BENGALURU - 560066",
    },
    {
        city: "BENGALURU",
        location: "Koramangala",
        timing: "9 AM - 8 PM",
        reference: "Opp Big Bazaar, Next to Raja",
        address: "No 150/1 and 2, Hosur Main Road, Opposite Big Bazaar, Next to Raja Honda, Koramangala, BENGALURU - 560095",
    },
    {
        city: "HYDERABAD",
        location: "Madhapur",
        timing: "9 AM - 7 PM",
        reference: "Below Vijaya Lakshmi supermark",
        address: "Plot No.539, Ayyappa Society, 100ft Road, Madhapur, Hyderabad",
    },
    {
        city: "HYDERABAD",
        location: "RAIDURGAM POLICE COMMISSIONARATE",
        timing: "9 AM - 7 PM",
        reference: "OYO 3607 Apartment",
        address: "OYO 3607 Apartment Gachibowli under Stilt parking. Plot No 33 & 34, Udaya Elite, Beside Care Hospital lane, Besides Cyberabad Police commissionerate,Gachibowli, Hyderabad, Telangana 500032",
    },
    {
        city: "HYDERABAD",
        location: "Gachibowli",
        timing: "9 AM - 7 PM",
        reference: "Opp. to Maruti True Value",
        address: "OYO 3607 Apartment Gachibowli under Stilt parking. Plot No 33 & 34, Udaya Elite, Beside Care Hospital lane, Besides Cyberabad Police commissionerate,Gachibowli, Hyderabad, Telangana 500032",
    },
    {
        city: "HYDERABAD",
        location: "Secunderabad",
        timing: "9 AM - 7 PM",
        reference: "Opposite to Yashoda Hospital",
        address: "Opposite to Yeshoda Hospital Parking Alexander Rd, Kummari Guda, Shivaji Nagar, Secunderabad, Telangana 500003.",
    },
    {
        city: "HYDERABAD",
        location: "Dilsukhnagar",
        timing: "9 AM - 7 PM",
        reference: "Beside Income Tax Office",
        address: "16-2-741/29 & 37, Anushka Towers, Bank colony, New malakpet, Dilsukhnagar. LandMark:- Beside DTDC Courier & Oasis Reproductive Hospital.",
    },
    {
        city: "HYDERABAD",
        location: "Ameerpet",
        timing: "9 AM - 7 PM",
        reference: "Aditya Trade center",
        address: "Swati Manor, Beside Aditya Trade center, Kumar Basti, Ameerpet, Hyderabad, Telangana 500082",
    },
    {
        city: "HYDERABAD",
        location: "Chanda Nagar",
        timing: "9 AM - 7 PM",
        reference: "Fitness Secret Gym",
        address: "Akshita Spaces, Second Floor, Plot # 194p, Rajendar Reddy Nagar Colony, Ameenpur Road, Chanda Nagar, Hyd -500050.",
    },
    {
        city: "JAIPUR",
        location: "New Aatish Market Metro station",
        timing: "8 AM - 5 PM",
        reference: "Parking of New Aatish Market",
        address: "New Aatish Market Metro station, Gurjar ki Thadi Underpass, Sultan Nagar, Shanthi Nagar,Near Metro Station, Mansarovar, Jaipur, Rajasthan 302020",
    },
    {
        city: "JAIPUR",
        location: "GT-Gaurav Tower",
        timing: "8 AM - 5 PM",
        reference: "Gaurav Tower",
        address: "Gold Souk Grand Mall (Near Hotel Lalit, Basement 2 Parking), Jaipur, Rajasthan 302001",
    },
    {
        city: "JAIPUR",
        location: "Gold Souk Grand Mall",
        timing: "8 AM - 5 PM",
        reference: "Near Jawahar Circle",
        address: "Gold Souk Grand Mall (Near Hotel Lalit, Basement 2 Parking), Jaipur, Rajasthan 302001",
    },
    {
        city: "JAIPUR",
        location: "C Scheme",
        timing: "8 AM - 5 PM",
        reference: "Man Upasana",
        address: "Man Upasana C-44 Sardar Patel Marg Panch Batti, C Scheme, Ashok Nagar Jaipur, Rajasthan 302001",
    },
    {
        city: "JAIPUR",
        location: "Mansarovar- Shipra Path",
        timing: "8 AM - 5 PM",
        reference: "Opposite Reil house, Mansarova",
        address: "34/17, Shipra path,Opposite Reil house, Mansarovar, Jaipur-302020",
    },
    {
        city: "GURUGRAM",
        location: "Bike Surgeon",
        timing: "9 AM - 9 PM",
        reference: "Gurucharan palace, district court road, Near Rajiv Chowk",
        address: "51/19, Bhim nagar, New Railway Rd, Gurugram, HR-122001",
    },
    {
        city: "MYSURU",
        location: "Jaganmohan Palace",
        timing: "9 AM - 9 PM",
        reference: "Near Mysore Palace",
        address: "425 - 426, Deshika Road, Opp. Jaganmohan Palace, Subbarayanakere, Chamrajpura, Mysuru, Karnataka 570024",
    },
    {
        city: "UDAIPUR",
        location: "Udaipole",
        timing: "8 AM - 5 PM",
        reference: "Near Hotel Shree Narayana",
        address: "Shop NO-6, Arihant Plaza ,Opposite ICICI Bank Udaipole ,Udaipur-313001",
    },
    {
        city: "AHMEDABAD",
        location: "Vijay Cross Road",
        timing: "9 AM - 7 PM",
        reference: "Visitor Parking of the complex",
        address: "The Link, Nr. Vijay Cross Road, Navrangpura, Ahmedabad 380009",
    },
];

localStorage.setItem("rideslocations", JSON.stringify(arrofLocation));

function bikesobject() {
    const arrOfBikes = [{
            name: "Royal Enfield 350 Thunderbird",
            free: 11 * hr,
            excess: 3,
            price: 35 * hr,
            manufacturer: "Royal Enfield",
            model: "350 Thunderbird",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Thunderbird-350.jpg",
        },
        {
            name: "Bajaj Pulsar 180",
            free: 9 * hr,
            excess: 2,
            price: 19 * hr,
            manufacturer: "Bajaj",
            model: "Pulsar",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Pulsar-180.jpg",
        },
        {
            name: "Bajaj Pulsar NS 160",
            free: 3 * hr,
            excess: 2,
            price: 6 * hr,
            manufacturer: "Bajaj",
            model: "Pulsar",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Pulsar-NS-160.jpg",
        },

        {
            name: "Bajaj Pulsar NS 200",
            free: 3 * hr,
            excess: 2,
            price: 6 * hr,
            manufacturer: "Bajaj",
            model: "Pulsar",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Pulsar-NS-200.jpg",
        },
        {
            name: "Bajaj Pulsar 135 LS",
            free: 3 * hr,
            excess: 2,
            price: 6 * hr,
            manufacturer: "Bajaj",
            model: "Pulsar",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Pulsar-135-LS.jpg",
        },

        {
            name: "Bajaj CT 100",
            free: 10 * hr,
            excess: 2,
            price: 8 * hr,
            manufacturer: "Bajaj",
            model: "CT 100",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/CT100.jpg",
        },
        {
            name: "Bajaj Dominar 400 ABS",
            free: 13 * hr,
            excess: 4,
            price: 42 * hr,
            manufacturer: "Bajaj",
            model: "Dominar 400 ABS",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Dominar-400.jpg",
        },
        {
            name: "KTM Duke 250",
            free: 11 * hr,
            excess: 4,
            price: 46 * hr,
            manufacturer: "KTM",
            model: "Duke 250",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Duke-250.jpg",
        },
        {
            name: "Yamaha FZ",
            free: 12 * hr,
            excess: 2,
            price: 23 * hr,
            manufacturer: "Yamaha",
            model: "FZ",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/FZ-v2.jpg'",
        },
        {
            name: "Honda Navi",
            free: 9 * hr,
            excess: 2,
            price: 8 * hr,
            manufacturer: "Honda",
            model: "Navi",
            type: "Scooter",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Navi.jpg",
        },
        {
            name: "Honda DREAM NEO",
            free: 9 * hr,
            excess: 2,
            price: 8 * hr,
            manufacturer: "Honda",
            model: "Dream Neo",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Dream-Neo.jpg",
        },
        {
            name: "Honda Hornet",
            free: 12 * hr,
            excess: 2,
            price: 25 * hr,
            manufacturer: "Honda",
            model: "Hornet",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Hornet.jpg",
        },
        {
            name: "Honda Activa",
            free: 9 * hr,
            excess: 2,
            price: 10 * hr,
            manufacturer: "Honda",
            model: "Activa",
            type: "Scooter",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Activa.jpg",
        },
        {
            name: "Honda Dio",
            free: 9 * hr,
            excess: 2,
            price: 12 * hr,
            manufacturer: "Honda",
            model: "Dio",
            type: "Scooter",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Dio.jpg",
        },
        {
            name: "Honda Livo",
            free: 9 * hr,
            excess: 2,
            price: 12 * hr,
            manufacturer: "Honda",
            model: "Livo",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Livo.jpg",
        },
        {
            name: "Bajaj Pulsar 150",
            free: 8 * hr,
            excess: 2,
            price: 17 * hr,
            manufacturer: "Bajaj",
            model: "Pulsar",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Pulsar-150.jpg",
        },
        {
            name: "Bajaj Avenger 220 Cruise",
            free: 12 * hr,
            excess: 2.5,
            price: 23 * hr,
            manufacturer: "Bajaj",
            model: "Avenger 220 Cruise",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Avenger-220-Cruise.jpg",
        },
        {
            name: "Bajaj Avenger 220 Street",
            free: 12 * hr,
            excess: 2.5,
            price: 23 * hr,
            manufacturer: "Bajaj",
            model: "Avenger 220 Street",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Avenger-220-Street.jpg",
        },
        {
            name: "Royal Enfield 350 Classic",
            free: 11 * hr,
            excess: 3,
            price: 33 * hr,
            manufacturer: "Royal Enfield",
            model: "350 Classic",
            type: "Motorcycle",
            imgLink: "https://get.onn.app/wp-content/uploads/2020/05/Classic-350.jpg",
        },
    ];
    localStorage.setItem("bikes", JSON.stringify(arrOfBikes));
}

function bikes() {
    let arr = JSON.parse(localStorage.getItem("bikes"));
    let parent = document.querySelector(".bike-showcase");
    parent.innerHTML = "";
    arr.forEach((e) => {
        let parent = document.querySelector(".bike-showcase");
        let noclassdiv = document.createElement("div");
        let bikeimgdiv = document.createElement("div");
        let freenexcessdiv = document.createElement("div");
        let pricenbooknowdiv = document.createElement("div");
        let image = document.createElement("img");
        let pname = document.createElement("p");
        let pkilometer = document.createElement("p");
        let pexcess = document.createElement("p");
        let pprice = document.createElement("p");
        let btn = document.createElement("button");
        image.src = e.imgLink;
        bikeimgdiv.append(image);
        bikeimgdiv.setAttribute("class", "bike-img-cont");
        pname.innerHTML = e.name;
        pname.setAttribute("class", "bike-name");
        pkilometer.innerHTML = `Free ${e.free} Kms`;
        pkilometer.setAttribute("class", "free-kilometers");
        pexcess.innerHTML = `Excess ₹${e.excess}/km`;
        pexcess.setAttribute("class", "excess");
        freenexcessdiv.setAttribute("class", "free-N-excess");
        freenexcessdiv.append(pkilometer, pexcess);
        pprice.innerHTML = `₹${e.price}`;
        pprice.setAttribute("class", "price");
        btn.innerHTML = "BOOK NOW";
        btn.onclick = function() {
            fav(e);
        };
        pricenbooknowdiv.setAttribute("class", "price-N-bookNow");
        pricenbooknowdiv.append(pprice, btn);
        noclassdiv.append(bikeimgdiv, pname, freenexcessdiv, pricenbooknowdiv);
        parent.append(noclassdiv);
    });
}
bikes();

function fav(e) {
    const currLoggedIn = JSON.parse(localStorage.getItem("currLoggedIn"));
    if (currLoggedIn.length < 1) {
        showLoginSignupPopup();
    } else {
        showSelectPickupOverlay();
        let selectedbike = {
            name: e.name,
            free: e.free,
            excess: e.excess,
            price: e.price,
            manufacturer: e.manufacturer,
            model: e.model,
            type: e.type,
            imgLink: e.imgLink,
        };

        let bookedbike = localStorage.getItem("selectedbike");

        if (bookedbike == null) {
            bookedbike = [];
        } else {
            localStorage.removeItem("selectedbike");
            bookedbike = [];
        }
        bookedbike.push(selectedbike);
        localStorage.setItem("selectedbike", JSON.stringify(selectedbike));

        pickup(e);
    }
}

function showSelectPickupOverlay() {
    let selectPickupOverlay = document.querySelector(".selectPickupOverlay");
    selectPickupOverlay.classList.remove("hide");
}

function pickup() {
    let arr = JSON.parse(localStorage.getItem("rideslocations"));

    let parent = document.getElementById("expand");
    let currentlocation = document.getElementById("currentlocation").innerText;
    parent.innerHTML = "";

    arr.forEach((e) => {
        if (currentlocation == e.city) {
            let parent = document.getElementById("expand");
            let div = document.createElement("div");
            let plocation = document.createElement("p");
            let ptiming = document.createElement("p");
            let preference = document.createElement("p");
            plocation.innerHTML = e.location;
            ptiming.innerHTML = `START TIMING: ${e.timing}`;
            preference.innerHTML = e.reference;
            let bottomOfLocationsDiv = document.createElement("div");
            let p = document.createElement("p");
            p.innerHTML = "5 Available";
            bottomOfLocationsDiv.classList.add("bike_available");
            let arrowIcon = document.createElement("i");
            arrowIcon.classList.add("fas", "fa-arrow-right");
            bottomOfLocationsDiv.append(p, arrowIcon);

            div.onclick = function() {
                decidedlocation(e);
            };
            plocation.classList.add("plocation");
            ptiming.classList.add("ptiming");
            preference.classList.add("preference");
            div.append(plocation, ptiming, preference, bottomOfLocationsDiv);
            div.setAttribute("class", "new");
            div.style.cursor = "pointer";
            parent.append(div);
        }
    });
}

function decidedlocation(e) {
    let decidedlocation = JSON.parse(localStorage.getItem("selectedbike"));
    decidedlocation.city = e.city;
    decidedlocation.location = e.location;
    decidedlocation.timing = e.timing;
    decidedlocation.reference = e.reference;
    decidedlocation.address = e.address;

    let finallocation = localStorage.getItem("finalBookedBike");

    if (finallocation == null) {
        finallocation = [];
    } else {
        localStorage.removeItem("finalBookedBike");
        finallocation = [];
    }
    finallocation.push(decidedlocation, decidedlocation.address);

    localStorage.setItem("finalBookedBike", JSON.stringify(finallocation));
    window.open("../HTML_FILE/checkout.html", "_parent");
}

function manufacturer() {
    let abc = document.getElementById("vehicle");
    var checkboxes = abc.querySelectorAll("input");
    let j = 0;
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        if (checkboxes[i].checked == true) {
            j++;
        }
    }
    if (j == 1) {
        vehicle();
        return;
    }
    let model = document.getElementById("model");
    var checkboxes = model.querySelectorAll("input");
    let y = 0;
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        if (checkboxes[i].checked == true) y++;
    }
    if (y != 0) {
        return;
    }
    let manufacturer = document.getElementById("manufacturer");
    var checkboxes = manufacturer.querySelectorAll("input");
    let x = 0;
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        if (checkboxes[i].checked == true) x++;
    }
    if (x > 0) {
        let parent = document.querySelector(".bike-showcase");
        parent.innerHTML = "";
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            if (checkboxes[i].checked == true) {
                let arr = JSON.parse(localStorage.getItem("bikes"));
                arr.forEach((e) => {
                    if (checkboxes[i].name === e.manufacturer) {
                        let parent = document.querySelector(".bike-showcase");
                        let noclassdiv = document.createElement("div");
                        let bikeimgdiv = document.createElement("div");
                        let freenexcessdiv = document.createElement("div");
                        let pricenbooknowdiv = document.createElement("div");
                        let image = document.createElement("img");
                        let pname = document.createElement("p");
                        let pkilometer = document.createElement("p");
                        let pexcess = document.createElement("p");
                        let pprice = document.createElement("p");
                        let btn = document.createElement("button");
                        image.src = e.imgLink;
                        bikeimgdiv.append(image);
                        bikeimgdiv.setAttribute("class", "bike-img-cont");
                        pname.innerHTML = e.name;
                        pname.setAttribute("class", "bike-name");
                        pkilometer.innerHTML = `Free ${e.free} Kms`;
                        pkilometer.setAttribute("class", "free-kilometers");
                        pexcess.innerHTML = `Excess ₹${e.excess}/km`;
                        pexcess.setAttribute("class", "excess");
                        freenexcessdiv.setAttribute("class", "free-N-excess");
                        freenexcessdiv.append(pkilometer, pexcess);
                        pprice.innerHTML = `₹${e.price}`;
                        pprice.setAttribute("class", "price");
                        btn.innerHTML = "BOOK NOW";
                        btn.onclick = function() {
                            fav(e);
                        };
                        pricenbooknowdiv.setAttribute("class", "price-N-bookNow");
                        pricenbooknowdiv.append(pprice, btn);
                        noclassdiv.append(
                            bikeimgdiv,
                            pname,
                            freenexcessdiv,
                            pricenbooknowdiv
                        );
                        parent.append(noclassdiv);
                    }
                });
            }
        }
    } else {
        bikes();
    }
}

function vehicle(id) {
    let model = document.getElementById("model");
    var checkboxes = model.querySelectorAll("input");
    let y = 0;
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        if (checkboxes[i].checked == true) y++;
    }
    if (y != 0) {
        return;
    }
    let parent = document.querySelector(".bike-showcase");
    parent.innerHTML = "";
    let vehicletype = document.getElementById(id);
    let vehicle = document.getElementById("vehicle");
    var checkboxes = vehicle.querySelectorAll("input");
    let x = 0;
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        if (checkboxes[i].checked == true) {
            x++;
            var category = checkboxes[i].name;
        }
    }
    if (x == 1) {
        let vehicle = document.getElementById("manufacturer");
        var checkboxes = vehicle.querySelectorAll("input");
        let parent = document.querySelector(".bike-showcase");
        parent.innerHTML = "";
        let x = 0;
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            if (checkboxes[i].checked == true) {
                x++;
            }
        }

        if (x == 0) {
            let arr = JSON.parse(localStorage.getItem("bikes"));
            let parent = document.querySelector(".bike-showcase");
            arr.forEach((e) => {
                if (e.type === category) {
                    let parent = document.querySelector(".bike-showcase");
                    let noclassdiv = document.createElement("div");
                    let bikeimgdiv = document.createElement("div");
                    let freenexcessdiv = document.createElement("div");
                    let pricenbooknowdiv = document.createElement("div");
                    let image = document.createElement("img");
                    let pname = document.createElement("p");
                    let pkilometer = document.createElement("p");
                    let pexcess = document.createElement("p");
                    let pprice = document.createElement("p");
                    let btn = document.createElement("button");
                    image.src = e.imgLink;
                    bikeimgdiv.append(image);
                    bikeimgdiv.setAttribute("class", "bike-img-cont");
                    pname.innerHTML = e.name;
                    pname.setAttribute("class", "bike-name");
                    pkilometer.innerHTML = `Free ${e.free} Kms`;
                    pkilometer.setAttribute("class", "free-kilometers");
                    pexcess.innerHTML = `Excess ₹${e.excess}/km`;
                    pexcess.setAttribute("class", "excess");
                    freenexcessdiv.setAttribute("class", "free-N-excess");
                    freenexcessdiv.append(pkilometer, pexcess);
                    pprice.innerHTML = `₹${e.price}`;
                    pprice.setAttribute("class", "price");
                    btn.innerHTML = "BOOK NOW";
                    btn.onclick = function() {
                        fav(e);
                    };
                    pricenbooknowdiv.setAttribute("class", "price-N-bookNow");
                    pricenbooknowdiv.append(pprice, btn);
                    noclassdiv.append(
                        bikeimgdiv,
                        pname,
                        freenexcessdiv,
                        pricenbooknowdiv
                    );
                    parent.append(noclassdiv);
                }
            });
            return;
        }
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            if (checkboxes[i].checked == true) {
                let arr = JSON.parse(localStorage.getItem("bikes"));
                arr.forEach((e) => {
                    if (checkboxes[i].name === e.manufacturer && e.type === category) {
                        let parent = document.querySelector(".bike-showcase");
                        let noclassdiv = document.createElement("div");
                        let bikeimgdiv = document.createElement("div");
                        let freenexcessdiv = document.createElement("div");
                        let pricenbooknowdiv = document.createElement("div");
                        let image = document.createElement("img");
                        let pname = document.createElement("p");
                        let pkilometer = document.createElement("p");
                        let pexcess = document.createElement("p");
                        let pprice = document.createElement("p");
                        let btn = document.createElement("button");
                        image.src = e.imgLink;
                        bikeimgdiv.append(image);
                        bikeimgdiv.setAttribute("class", "bike-img-cont");
                        pname.innerHTML = e.name;
                        pname.setAttribute("class", "bike-name");
                        pkilometer.innerHTML = `Free ${e.free} Kms`;
                        pkilometer.setAttribute("class", "free-kilometers");
                        pexcess.innerHTML = `Excess ₹${e.excess}/km`;
                        pexcess.setAttribute("class", "excess");
                        freenexcessdiv.setAttribute("class", "free-N-excess");
                        freenexcessdiv.append(pkilometer, pexcess);
                        pprice.innerHTML = `₹${e.price}`;
                        pprice.setAttribute("class", "price");
                        btn.innerHTML = "BOOK NOW";
                        btn.onclick = function() {
                            fav(e);
                        };
                        pricenbooknowdiv.setAttribute("class", "price-N-bookNow");
                        pricenbooknowdiv.append(pprice, btn);
                        noclassdiv.append(
                            bikeimgdiv,
                            pname,
                            freenexcessdiv,
                            pricenbooknowdiv
                        );
                        parent.append(noclassdiv);
                    }
                });
            }
        }
    } else {
        manufacturer();
    }
}

function model() {
    let model = document.getElementById("model");
    var checkboxes = model.querySelectorAll("input");
    let x = 0;
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        if (checkboxes[i].checked == true) x++;
    }
    if (x > 0) {
        let parent = document.querySelector(".bike-showcase");
        parent.innerHTML = "";
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            if (checkboxes[i].checked == true) {
                let arr = JSON.parse(localStorage.getItem("bikes"));
                arr.forEach((e) => {
                    if (checkboxes[i].name === e.model) {
                        let parent = document.querySelector(".bike-showcase");
                        let noclassdiv = document.createElement("div");
                        let bikeimgdiv = document.createElement("div");
                        let freenexcessdiv = document.createElement("div");
                        let pricenbooknowdiv = document.createElement("div");
                        let image = document.createElement("img");
                        let pname = document.createElement("p");
                        let pkilometer = document.createElement("p");
                        let pexcess = document.createElement("p");
                        let pprice = document.createElement("p");
                        let btn = document.createElement("button");
                        image.src = e.imgLink;
                        bikeimgdiv.append(image);
                        bikeimgdiv.setAttribute("class", "bike-img-cont");
                        pname.innerHTML = e.name;
                        pname.setAttribute("class", "bike-name");
                        pkilometer.innerHTML = `Free ${e.free} Kms`;
                        pkilometer.setAttribute("class", "free-kilometers");
                        pexcess.innerHTML = `Excess ₹${e.excess}/km`;
                        pexcess.setAttribute("class", "excess");
                        freenexcessdiv.setAttribute("class", "free-N-excess");
                        freenexcessdiv.append(pkilometer, pexcess);
                        pprice.innerHTML = `₹${e.price}`;
                        pprice.setAttribute("class", "price");
                        btn.innerHTML = "BOOK NOW";
                        btn.onclick = function() {
                            fav(e);
                        };
                        pricenbooknowdiv.setAttribute("class", "price-N-bookNow");
                        pricenbooknowdiv.append(pprice, btn);
                        noclassdiv.append(
                            bikeimgdiv,
                            pname,
                            freenexcessdiv,
                            pricenbooknowdiv
                        );
                        parent.append(noclassdiv);
                    }
                });
            }
        }
    } else {
        vehicle();
    }
}

function clearall() {
    var checkboxes = document.querySelectorAll("input");

    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = false;
    }
    bikes();
}

function showCollapseContentFilter() {
    document
        .getElementsByClassName("filter-bar")[0]
        .classList.toggle("showFilter");
}

function showMobileNavBar() {
    let navBar = document.getElementsByClassName("mobileNavBar")[0];
    navBar.classList.toggle("active");
}

function changeCollapseBtnValue(collapse_btn_type, value) {
    let collapse_btn = document.getElementsByClassName(collapse_btn_type)[0];
    collapse_btn.innerHTML = value;
    collapse_btn.classList.remove("active");
    if (value == "30 DAYS BOOKING") {
        document.getElementsByClassName("endDateSelector")[0].style.display =
            "none";
    } else {
        document.getElementsByClassName("endDateSelector")[0].style.display =
            "block";
    }
    localStorage.removeItem("endingDateObject");
}

function removePopUp(name) {
    let popUpCont = document.getElementsByClassName(name)[0];
    popUpCont.classList.add("hide");
    if (popUpCont.classList.contains("active"))
        popUpCont.classList.remove("active");
    document.body.style.overflow = "visible";
}

function showSelectCity() {
    let selectCityCont = document.getElementsByClassName("selectCity-overlay")[0];
    console.log(selectCityCont);
    selectCityCont.classList.toggle("hide");
    selectCityCont.classList.add("active");
    document.body.style.overflow = "hidden";
}

function addEventToCityArea() {
    let cityArea = document.querySelectorAll(".cityArea .cityCont");
    cityArea.forEach((cityCont) => {
        cityCont.addEventListener("click", function() {
            changeRideNowCityValue(this);
        });
    });
}
addEventToCityArea();

function changeRideNowCityValue(elem) {
    let city = elem.children[0].children[1].innerHTML;
    document.getElementsByClassName("rideNow-city-name")[0].innerHTML = city;
    removePopUp("selectCity-overlay");
}

function showCalender(para) {
    let calender = document.querySelector(`.${para} > .calender`);
    let calender_timing = document.querySelector(`.${para} > .calender_timing`);
    if (!calender_timing.classList.contains("hide")) {
        calender_timing.classList.add("hide");
    }
    calender.classList.toggle("hide");
    missionCalender(para);
}

function showSignup() {
    let login = document.getElementById("login_form");
    let signup = document.getElementById("signup_form");
    let heading = document.getElementsByClassName("heading")[0];
    let loginHeading = heading.children[0];
    let signupHeading = heading.children[1];
    login.classList.toggle("hide");
    signup.classList.toggle("hide");
    loginHeading.classList.toggle("currForm");
    signupHeading.classList.toggle("currForm");
}

function showLoginSignupPopup() {
    let loginDiv = document.getElementsByClassName("loginPopupOverlay")[0];
    loginDiv.classList.toggle("hide");
    document.body.style.overflow = "hidden";
}

function showContactPopup() {
    let contactPopup = document.getElementsByClassName(
        "contactUsForm-helpPopup-cont"
    )[0];
    contactPopup.classList.toggle("active");
}

function showrideNowCollapse() {
    localStorage.removeItem("endingDateObject");
    let btn = document.getElementsByClassName("collapse-btn-rideNow")[0];
    btn.classList.toggle("active");
}

function signupUser(e) {
    e.preventDefault();
    const form = document.getElementById("signup_form");
    let first_name = form.first_name.value;
    let last_name = form.last_name.value;
    let email = form.email.value;
    let mobile = form.mobile.value;
    let password = form.password.value;
    let bool = true;
    Array.from(form).forEach((input) => {
        if (
            input.value == "" &&
            input.name != "last_name" &&
            input.tagName != "BUTTON"
        ) {
            bool = false;
            document.querySelector(`#${input.id} ~ .required_field`).style.display =
                "block";
        }
    });
    if (bool) {
        createUserAccount(first_name, last_name, email, mobile, password);
        form.first_name.value = "";
        form.last_name.value = "";
        form.email.value = "";
        form.mobile.value = "";
        form.password.value = "";
    }
}

function addInputEvent() {
    const inputs = document.querySelectorAll(".input-event");
    inputs.forEach((input) => {
        input.addEventListener("input", function() {
            validateInput(this);
        });
    });
}
addInputEvent();

function validateInput(elem) {
    if (elem.name != "last_name")
        document.querySelector(`#${elem.id} ~ .required_field`).style.display =
        "none";
    if (elem.name === "email") {
        let elemId = elem.id;
        let warningMessage = document.querySelector(`#${elemId} ~ .warning`);
        if (validateMail(elem.value) || elem.value == "")
            warningMessage.style.display = "none";
        else warningMessage.style.display = "block";
    } else if (elem.name === "password") {
        let elemId = elem.id;
        let warningMessage = document.querySelector(`#${elemId} ~ .warning`);
        if (validatePassword(elem.value) || elem.value == "")
            warningMessage.style.display = "none";
        else warningMessage.style.display = "block";
    } else if (elem.name === "mobile") {
        let elemId = elem.id;
        let warningMessage = document.querySelector(`#${elemId} ~ .warning`);
        if (validateMobile(elem.value) || elem.value == "")
            warningMessage.style.display = "none";
        else warningMessage.style.display = "block";
    } else if (elem.name == "first_name" || elem.name == "last_name") {
        let elemId = elem.id;
        let warningMessage = document.querySelector(`#${elemId} ~ .warning`);
        if (validateName(elem.value) || elem.value == "")
            warningMessage.style.display = "none";
        else warningMessage.style.display = "block";
    }
}

function validateMail(str) {
    let regex =
        /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,10})(.[A-Za-z]{2,10})$/;
    return regex.test(str);
}

function validateMobile(str) {
    let regex = /^[0-9]{10}$/;
    return regex.test(str);
}

function validatePassword(str) {
    return str.length > 5 ? true : false;
}

function validateName(str) {
    str = str.trim();
    let regex = /^[a-zA-Z]+$/;
    if (!regex.test(str)) return false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            return false;
        }
    }
    return true;
}

let otp;
let newUser;

function createUserAccount(first_name, last_name, email, mobile, password) {
    newUser = new User(first_name, last_name, email, mobile, password);
    let users = localStorage.getItem("users");
    if (users == null) {
        users = [];
    } else {
        users = JSON.parse(users);
    }
    let bool = true;
    users.forEach((user) => {
        if (user.email == newUser.email || user.mobile == newUser.mobile) {
            bool = false;
        }
    });
    if (bool) {
        let otpSec = document.querySelector(".otpSec");
        otpSec.classList.remove("hide");
        let formSec = document.querySelector(".formSec");
        formSec.classList.add("hide");
        otp = Math.floor(Math.random() * (10000 - 1000) + 1000);
        console.log(otp);
    } else {
        alert(
            "The Email / Phone number is already registered with us. Please use forgot password, if you have problems logging in."
        );
    }
}

function User(first_name, last_name, email, mobile, password) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.mobile = mobile;
    this.password = password;
}

function userAddToLocalSto(newUser) {
    let users = localStorage.getItem("users");
    if (users == null) {
        users = [];
    } else {
        users = JSON.parse(users);
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    addToCurrLoggedIn(newUser);
}

function addToCurrLoggedIn(user) {
    let currLoggedIn = localStorage.getItem("currLoggedIn");
    if (currLoggedIn == null) {
        currLoggedIn = [];
    } else {
        currLoggedIn = JSON.parse(currLoggedIn);
    }
    currLoggedIn.push(user);
    localStorage.setItem("currLoggedIn", JSON.stringify(currLoggedIn));
    loginUser();
}

function verifyOTP() {
    let otpInput = document.querySelector(".otpSec > #otp");
    if (otpInput.value == otp) {
        otpInput.value = "";
        userAddToLocalSto(newUser);
    } else {
        alert("The OTP you entered appears to be incorrect. Please try again.");
    }
}

function keepUserLoggedIn() {
    let currLoggedIn = localStorage.getItem("currLoggedIn");
    if (currLoggedIn == null) {
        currLoggedIn = [];
    } else {
        currLoggedIn = JSON.parse(currLoggedIn);
    }
    if (currLoggedIn.length > 0) loginUser();
}
keepUserLoggedIn();

function loginUser() {
    removePopUp("loginPopupOverlay");
    document.getElementsByClassName("welcomeNav")[0].classList.remove("hide");
    document.getElementsByClassName("signupNav")[0].classList.add("hide");

    updateMyAccount();
}

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

function checkUsers(e) {
    e.preventDefault();
    let login_form = document.getElementById("login_form");
    let email = login_form.emailORPhone.value;
    let password = login_form.password.value;
    let users = localStorage.getItem("users");
    if (users == null) {
        users = [];
    } else {
        users = JSON.parse(users);
    }
    users.forEach((user) => {
        if (
            (user.email == email && user.password == password) ||
            (user.mobile == email && user.password == password)
        ) {
            login_form.emailORPhone.value = "";
            login_form.password.value = "";
            addToCurrLoggedIn(user);
            loginUser();
        }
    });
}

function updateMyAccount() {
    let currLoggedIn = localStorage.getItem("currLoggedIn");
    if (currLoggedIn == null) {
        currLoggedIn = [];
    } else {
        currLoggedIn = JSON.parse(currLoggedIn);
    }
    let userNameCont = document.querySelector(".myAccount .user-name");
    let emailIdCont = document.querySelector(".myAccount .user-mail");
    userNameCont.innerHTML = `${currLoggedIn[0].first_name} ${currLoggedIn[0].last_name}`;
    emailIdCont.innerHTML = currLoggedIn[0].email;

    let first_name_yourProfile = document.querySelector(
        ".yourProfileCont #first_name-yourProfile"
    );
    let last_name_yourProfile = document.querySelector(
        ".yourProfileCont #last_name-yourProfile"
    );
    let email_yourProfile = document.querySelector(
        ".yourProfileCont .email-yourProfile"
    );
    let mobile_yourProfile = document.querySelector(
        ".yourProfileCont .mobile-yourProfile"
    );
    first_name_yourProfile.value = currLoggedIn[0].first_name;
    last_name_yourProfile.value = currLoggedIn[0].last_name;
    email_yourProfile.innerHTML = currLoggedIn[0].email;
    mobile_yourProfile.innerHTML = currLoggedIn[0].mobile;
}

function enableInputBox(classOfParent) {
    let parentOfInput = document.querySelector(`.${classOfParent}`);
    Array.from(parentOfInput.children).forEach((elem) => {
        if (elem.tagName == "INPUT" || elem.tagName == "TEXTAREA") {
            if (elem.disabled == true) elem.disabled = false;
            else elem.disabled = true;
        }
    });
}

function changeRightOfAccount(show, hide, activeBtn, deactiveBtn) {
    show = document.getElementsByClassName(show)[0];
    hide = document.getElementsByClassName(hide)[0];
    activeBtn = document.getElementsByClassName(activeBtn)[0];
    deactiveBtn = document.getElementsByClassName(deactiveBtn)[0];
    if (show.classList.contains("hide")) {
        show.classList.remove("hide");
        activeBtn.classList.add("active");
    }
    if (!hide.classList.contains("hide")) {
        hide.classList.add("hide");
        deactiveBtn.classList.remove("active");
    }
}

let date1 = new Date();
let date2 = new Date();

function missionCalender(para) {
    let date;
    if (para === "startDateSelector") {
        date = date1;
    } else {
        date = date2;
    }
    date.setDate(1);
    let dayOfFirstDay = date.getDay();
    let month = document.querySelector(`.${para} .calender .month p`);
    let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    let prevMonthLastDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();
    let dates = document.querySelector(`.${para} .calender .dates`);
    dates.innerHTML = "";

    month.innerHTML = `${date.getFullYear()}-${giveMonth(date.getMonth())}`;

    for (
        let i = prevMonthLastDate - dayOfFirstDay + 1; i <= prevMonthLastDate; i++
    ) {
        let dateCont = document.createElement("div");
        dateCont.innerHTML = i;
        dateCont.classList.add("prevMonthDate");
        dates.append(dateCont);
    }
    for (let i = 1; i <= lastDate; i++) {
        let dateCont = document.createElement("div");
        let currDate = new Date();
        if (
            (date.getMonth() == currDate.getMonth() && i < currDate.getDate()) ||
            (date.getMonth() < currDate.getMonth() &&
                date.getFullYear() <= currDate.getFullYear())
        ) {
            dateCont.classList.add("past");
        } else {
            dateCont.classList.add("presentNFuture");
            dateCont.onclick = function() {
                addDateToLocalStorage(para, i, date);
                showTimingTab(para, i, date);
            };
        }
        dateCont.innerHTML = i;

        dates.append(dateCont);
    }
    date.setDate(lastDate);
    let restOfTheDay = date.getDay();
    for (let i = 1; i <= 7 - restOfTheDay - 1; i++) {
        let dateCont = document.createElement("div");
        dateCont.innerHTML = i;
        dateCont.classList.add("nextMonthDate");

        dates.append(dateCont);
    }
}

function giveMonth(ind) {
    let month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return month[ind];
}

function changeMonth(para, parentName) {
    if (parentName == "endDateSelector") {
        let currMonth = date2.getMonth();
        date2.setDate(1);
        if (para == "prev") {
            date2.setMonth(currMonth - 1);
        } else {
            date2.setMonth(currMonth + 1);
        }
    } else {
        let currMonth = date1.getMonth();
        date1.setDate(1);
        if (para == "prev") {
            date1.setMonth(currMonth - 1);
        } else {
            date1.setMonth(currMonth + 1);
        }
    }

    missionCalender(parentName);
}

function showTimingTab(para, i, date) {
    let calender = document.querySelector(`.${para} .calender`);
    let calender_timing = document.querySelector(`.${para} .calender_timing`);
    calender.classList.add("hide");
    calender_timing.classList.remove("hide");
    date.setDate(i);
    let wholeDate = document.querySelector(
        `.${para} .calender_timing .wholeDate p`
    );
    wholeDate.innerHTML = `${giveMonth(
    date.getMonth()
  )} ${i}, ${date.getFullYear()}`;
    let arrOfTimings = [
        `09:00 AM`,
        `10:00 AM`,
        `11:00 AM`,
        `12:00 PM`,
        `01:00 PM`,
        `02:00 PM`,
        `03:00 PM`,
        `04:00 PM`,
        `05:00 PM`,
        `06:00 PM`,
        `07:00 PM`,
    ];
    let availableTimings = document.querySelector(
        `.${para} .calender_timing .availableTimings`
    );
    availableTimings.innerHTML = "";
    let today = new Date();
    if (
        date.getDate() == today.getDate() &&
        date.getMonth() == today.getMonth() &&
        date.getFullYear() == today.getFullYear()
    ) {
        let lastTime = 19;
        let hour = date.getHours() + 1;

        while (hour <= lastTime) {
            let amORpm = "AM";
            if (hour > 12) amORpm = "PM";
            let div = document.createElement("div");
            div.innerHTML = `${
        hour % 12 < 10 ? "0" + (hour % 12) : hour % 12
      }:00 ${amORpm}`;
            div.onclick = function() {
                addTimeToLocalSto(para, div.innerHTML);
                showRideNowDateAndTime(para);
                calender_timing.classList.add("hide");
            };
            availableTimings.append(div);
            hour++;
        }
    } else {
        for (let i = 0; i < arrOfTimings.length; i++) {
            let div = document.createElement("div");
            div.innerHTML = arrOfTimings[i];
            div.onclick = function() {
                addTimeToLocalSto(para, div.innerHTML);
                showRideNowDateAndTime(para);
                calender_timing.classList.add("hide");
            };
            availableTimings.append(div);
        }
    }
}

function addDateToLocalStorage(para, i, date) {
    let weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    date.setDate(i);
    let obj = {
        date: i,
        month: giveMonth(date.getMonth()),
        year: date.getFullYear(),
        weekDay: weekDays[date.getDay()],
    };
    if (para == "startDateSelector") {
        localStorage.setItem("startingDateObject", JSON.stringify(obj));
    } else {
        localStorage.setItem("endingDateObject", JSON.stringify(obj));
    }
}

function addTimeToLocalSto(para, time) {
    if (para == "startDateSelector") {
        let startingDateObject = JSON.parse(
            localStorage.getItem("startingDateObject")
        );
        startingDateObject["time"] = time;
        localStorage.setItem(
            "startingDateObject",
            JSON.stringify(startingDateObject)
        );
    } else {
        let endingDateObject = JSON.parse(localStorage.getItem("endingDateObject"));
        endingDateObject["time"] = time;
        localStorage.setItem("endingDateObject", JSON.stringify(endingDateObject));
    }
}

function showRideNowDateAndTime(para) {
    if (para == "startDateSelector") {
        let startingDateObject = JSON.parse(
            localStorage.getItem("startingDateObject")
        );
        let spanTag = document.querySelector(`.${para} .calenderStartDate`);

        spanTag.innerHTML = `<strong class="calenderStartDate-date">${startingDateObject.date}</strong>
                            <span class="calenderStartDate-weekDay">${startingDateObject.weekDay}</span>
                            <span class="calenderStartDate-month">${startingDateObject.month} ${startingDateObject.year}</span>
                            <span class="calenderStartDate-time">${startingDateObject.time}</span>`;
        let startDateSpan = document.querySelector(".startDateSpan");
        startDateSpan.classList.add("hide");
        if (spanTag.classList.contains("hide")) spanTag.classList.remove("hide");
    } else {
        let endingDateObject = JSON.parse(localStorage.getItem("endingDateObject"));
        let spanTag = document.querySelector(`.${para} .calenderEndDate`);
        spanTag.innerHTML = `<strong class="calenderEndDate-date">${endingDateObject.date}</strong>
                            <span class="calenderEndDate-weekDay">${endingDateObject.weekDay}</span>
                            <span class="calenderEndDate-month">${endingDateObject.month} ${endingDateObject.year}</span>
                            <span class="calenderEndDate-time">${endingDateObject.time}</span>`;
        let endDateSpan = document.querySelector(".endDateSpan");
        endDateSpan.classList.add("hide");
        if (spanTag.classList.contains("hide")) spanTag.classList.remove("hide");
    }
}

function checkStartAndEndDateCont() {
    dayrating();
    bikes();

    let rideNow_city_name =
        document.getElementsByClassName("rideNow-city-name")[0];
    let choose_plan = document.querySelector(
        ".choose_plan .collapse-btn-rideNow"
    );
    let startDate = document.querySelector(
        ".startDateSelector .calenderStartDate"
    );
    let endDate = document.querySelector(".endDateSelector .calenderEndDate");

    choose_plan = choose_plan.innerHTML.trim();
    if (startDate.classList.contains("hide")) {
        alert("Please fill start date");
    } else if (
        endDate.classList.contains("hide") &&
        choose_plan == "HOURLY/DAILY"
    ) {
        alert("Please fill end date or choose 30 days plan");
    } else {
        let rideNowDetails = {
            cityName: `${rideNow_city_name.innerHTML}`,
            planName: `${choose_plan}`,
        };
        localStorage.setItem("rideNowDetails", JSON.stringify(rideNowDetails));
        fetchDataFromHomePage();
    }
}

function fetchDataFromHomePage() {
    let rideNowDetails = JSON.parse(localStorage.getItem("rideNowDetails"));
    let rideNow_city_name = document.querySelector(".rideNow-city-name");
    let planName = document.querySelector(".choose_plan .collapse-btn-rideNow");
    rideNow_city_name.innerHTML = rideNowDetails.cityName;
    planName.innerHTML = rideNowDetails.planName;
    if (rideNowDetails.planName == "30 DAYS BOOKING") {
        document.getElementsByClassName("endDateSelector")[0].style.display =
            "none";
    }
    showRideNowDateAndTime("startDateSelector");
    showRideNowDateAndTime("endDateSelector");
}
fetchDataFromHomePage();

pickup();