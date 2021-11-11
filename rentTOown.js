if (localStorage.getItem("OnnAllBikes") == null) {
    const OnnAllBikes = [{
            name: "Bajaj",
            Modal: "Avenger 220 Cruise",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Avenger-220-Cruise.jpg",
            MonthP: "₹4,499/Mth",
            MonthDur: "for 18 months",
            YearP: "₹5,999/Mth",
            YearDur: "for 12 months",
            Key: "Bikes250",
            Cruiser: "CruiserBike",
        },
        {
            name: "Bajaj",
            Modal: "Avenger 220 Street",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Avenger-220-Street.jpg",
            MonthP: "₹4,499/Mth",
            MonthDur: "for 18 months",
            YearP: "₹5,499/Mth",
            YearDur: "for 12 months",
            Key: "Bikes250",
            Cruiser: "CruiserBike",
        },
        {
            name: "Bajaj",
            Modal: "CT100",
            img: "https://get.onn.app/wp-content/uploads/2020/05/CT100.jpg",
            MonthP: "₹2,299/Mth",
            MonthDur: "for 18 months",
            YearP: "₹2,799/Mth",
            YearDur: "for 12 months",
            Key: "OnnBike150",
        },
        {
            name: "Bajaj",
            Modal: "Pulsar 135 LS",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Pulsar-135-LS.jpg",
            MonthP: "₹2,999/Mth",
            MonthDur: "for 18 months",
            YearP: "₹3,299/Mth",
            YearDur: "for 12 months",
            Key: "OnnBike150",
            Comfort: "ComfortBike",
        },
        {
            name: "Bajaj",
            Modal: "Pulsar 150",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Pulsar-150.jpg",
            MonthP: "₹4,699/Mth",
            MonthDur: "for 18 months",
            YearP: "₹3,799/Mth",
            YearDur: "for 12 months",
            Key: "OnnBike150",
            Comfort: "ComfortBike",
        },
        {
            name: "Bajaj",
            Modal: "Pulsar 180",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Pulsar-180.jpg",
            MonthP: "₹3,959/Mth",
            MonthDur: "for 18 months",
            YearP: "₹2,994/Mth",
            YearDur: "for 12 months",
            Key: "Bikes250",
            Comfort: "ComfortBike",
        },
        {
            name: "Bajaj",
            Modal: "Dominar 400",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Dominar-400.jpg",
            MonthP: "₹4,999/Mth",
            MonthDur: "for 18 months",
            YearP: "₹6,999/Mth",
            YearDur: "for 12 months",
            Key: "Bikes500",
            Comfort: "ComfortBike",
            Cruiser: "CruiserBike",
            Sport: "SportBike",
        },
        {
            name: "Bajaj",
            Modal: "Pulsar NS 160",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Pulsar-NS-160.jpg",
            MonthP: "₹3,499/Mth",
            MonthDur: "for 18 months",
            YearP: "₹5,199/Mth",
            YearDur: "for 12 months",
            Key: "Bikes250",
            Sport: "SportBike",
        },
        {
            name: "Bajaj",
            Modal: "Pulsar NS 200",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Pulsar-NS-200.jpg",
            MonthP: "₹2,959/Mth",
            MonthDur: "for 18 months",
            YearP: "₹3,999/Mth",
            YearDur: "for 12 months",
            Key: "Bikes250",
            Sport: "SportBike",
        },
        {
            name: "Honda",
            Modal: "Activa",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Activa.jpg",
            MonthP: "₹1,999/Mth",
            MonthDur: "for 18 months",
            YearP: "₹2,999/Mth",
            YearDur: "for 12 months",
            Key: "OnnBike150",
            Comfort: "ComfortBike",
            Gearless: "GearlessBike",
            Scooter: "ScooterBike",
        },
        {
            name: "Honda",
            Modal: "CD110",
            img: "https://get.onn.app/wp-content/uploads/2020/05/CD110.jpg",
            MonthP: "₹3,949/Mth",
            MonthDur: "for 18 months",
            YearP: "₹5,099/Mth",
            YearDur: "for 12 months",
            Key: "OnnBike150",
        },
        {
            name: "Honda",
            Modal: "Cliq",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Cliq.jpg",
            MonthP: "₹4,999/Mth",
            MonthDur: "for 18 months",
            YearP: "₹6,999/Mth",
            YearDur: "for 12 months",
            Key: "OnnBike150",
            Comfort: "ComfortBike",
            Gearless: "GearlessBike",
            Scooter: "ScooterBike",
        },
        {
            name: "Honda",
            Modal: "Dio",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Dio.jpg",
            MonthP: "₹4,009/Mth",
            MonthDur: "for 18 months",
            YearP: "₹7,999/Mth",
            YearDur: "for 12 months",
            Key: "OnnBike150",
            Comfort: "ComfortBike",
            Gearless: "GearlessBike",
            Scooter: "ScooterBike",
        },
        {
            name: "Honda",
            Modal: "Dream Neo",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Dream-Neo.jpg",
            MonthP: "₹2,989/Mth",
            MonthDur: "for 18 months",
            YearP: "₹4,779/Mth",
            YearDur: "for 12 months",
            Key: "OnnBike150",
        },
        {
            name: "Honda",
            Modal: "Hornet",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Hornet.jpg",
            MonthP: "₹5,999/Mth",
            MonthDur: "for 18 months",
            YearP: "₹8,999/Mth",
            YearDur: "for 12 months",
            Key: "OnnBike150",
            Comfort: "ComfortBike",
        },
        {
            name: "Honda",
            Modal: "Livo",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Livo.jpg",
            MonthP: "₹1,009/Mth",
            MonthDur: "for 18 months",
            YearP: "₹3,965/Mth",
            YearDur: "for 12 months",
            Key: "OnnBike150",
        },
        {
            name: "Honda",
            Modal: "Navi",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Navi.jpg",
            MonthP: "₹5,999/Mth",
            MonthDur: "for 18 months",
            YearP: "₹5,999/Mth",
            YearDur: "for 12 months",
            Key: "OnnBike150",
        },
        {
            name: "KTM",
            Modal: "Duke 250",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Duke-250.jpg",
            MonthP: "₹6,999/Mth",
            MonthDur: "for 18 months",
            YearP: "₹8,999/Mth",
            YearDur: "for 12 months",
            Key: "Bikes250",
            Key2: "Bikes500",
            Sport: "SportBike",
        },
        {
            name: "Royal Enfield",
            Modal: "Classic 350",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Classic-350.jpg",
            MonthP: "₹8,999/Mth",
            MonthDur: "for 18 months",
            YearP: "₹9,999/Mth",
            YearDur: "for 12 months",
            Key: "Royal3500",
            Comfort: "ComfortBike",
        },
        {
            name: "Royal Enfield",
            Modal: "Himalayan",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Himalayan.jpg",
            MonthP: "₹5,999/Mth",
            MonthDur: "for 18 months",
            YearP: "₹5,999/Mth",
            YearDur: "for 12 months",
            Key: "Royal3500",
            Key2: "Bikes500",
        },
        {
            name: "Royal Enfield",
            Modal: "Thunderbird 350",
            img: "https://get.onn.app/wp-content/uploads/2020/05/Thunderbird-350.jpg",
            MonthP: "₹4,999/Mth",
            MonthDur: "for 18 months",
            YearP: "₹7,999/Mth",
            YearDur: "for 12 months",
            Key: "Royal3500",
            Comfort: "ComfortBike",
        },
        {
            name: "Yamaha",
            Modal: "FZ v2",
            img: "https://get.onn.app/wp-content/uploads/2020/05/FZ-v2.jpg",
            MonthP: "₹4,229/Mth",
            MonthDur: "for 18 months",
            YearP: "₹5,333/Mth",
            YearDur: "for 12 months",
            Key: "OnnBike150",
            Sport: "SportBike",
        },
    ];

    localStorage.setItem("OnnAllBikes", JSON.stringify(OnnAllBikes));
}

function showAllBikes(sd) {
    let OnnAllBikes = sd;

    let AllBikes_div = document.getElementById("filterbikes");

    AllBikes_div.innerHTML = null;

    OnnAllBikes.forEach(function(el) {
        let maindiv = document.createElement("div");
        maindiv.id = "filterbikesbox";

        let div1 = document.createElement("div");
        div1.id = "bikenameFilter";

        let div1Box1 = document.createElement("div");
        div1Box1.innerHTML = el.name;

        let div1Box2 = document.createElement("div");
        div1Box2.innerHTML = el.Modal;

        let div2 = document.createElement("div");

        let div2img = document.createElement("img");
        div2img.src = el.img;

        let div2hr = document.createElement("hr");

        let div3 = document.createElement("div");
        div3.id = "priceFilterBox";
        let div3box1 = document.createElement("div");
        div3box1.id = "for12Filter";

        let div3box1div1 = document.createElement("div");
        div3box1div1.innerHTML = el.MonthP;
        let div3box1div2 = document.createElement("div");
        div3box1div2.innerHTML = el.MonthDur;

        let div3box2 = document.createElement("div");
        div3box2.id = "for12Filter";

        let div3box2div1 = document.createElement("div");
        div3box2div1.innerHTML = el.YearP;
        let div3box2div2 = document.createElement("div");
        div3box2div2.innerHTML = el.YearDur;

        div1.appendChild(div1Box1);
        div1.appendChild(div1Box2);

        div2.appendChild(div2img);
        div2.appendChild(div2hr);

        div3box1.appendChild(div3box1div1);
        div3box1.appendChild(div3box1div2);

        div3box2.appendChild(div3box2div1);
        div3box2.appendChild(div3box2div2);

        div3.appendChild(div3box1);
        div3.appendChild(div3box2);

        maindiv.appendChild(div1);
        maindiv.appendChild(div2);
        maindiv.appendChild(div3);

        AllBikes_div.appendChild(maindiv);
    });
}

showAllBikes(JSON.parse(localStorage.getItem("OnnAllBikes")));

function ccall() {
    showAllBikes(JSON.parse(localStorage.getItem("OnnAllBikes")));
    let mybtn = document.getElementById("ccall");
    // mybtn.style.background = "#eb7f23";
    // mybtn.style.color = "white"
}

function cc150() {
    let mySortedOnnBikes = JSON.parse(localStorage.getItem("OnnAllBikes"));

    let myBikeArr = [];
    for (let i = 0; i < mySortedOnnBikes.length; i++) {
        if (mySortedOnnBikes[i].Key == "OnnBike150") {
            myBikeArr.push(mySortedOnnBikes[i]);
        }
    }
    showAllBikes(myBikeArr);

    let mybtn = document.getElementById("cc150");
    // mybtn.style.background = "#eb7f23";
    // mybtn.style.color = "white"
}

function cc350() {
    let mySortedOnnBikes = JSON.parse(localStorage.getItem("OnnAllBikes"));

    let myBikeArr = [];
    for (let i = 0; i < mySortedOnnBikes.length; i++) {
        if (mySortedOnnBikes[i].Key == "Royal3500") {
            myBikeArr.push(mySortedOnnBikes[i]);
        }
    }
    showAllBikes(myBikeArr);

    let mybtn = document.getElementById("cc350");
    // mybtn.style.background = "#eb7f23";
    // mybtn.style.color = "white"
}

function cc250() {
    let mySortedOnnBikes = JSON.parse(localStorage.getItem("OnnAllBikes"));

    let myBikeArr = [];
    for (let i = 0; i < mySortedOnnBikes.length; i++) {
        if (mySortedOnnBikes[i].Key == "Bikes250") {
            myBikeArr.push(mySortedOnnBikes[i]);
        }
    }
    showAllBikes(myBikeArr);

    let mybtn = document.getElementById("cc250");
    // mybtn.style.background = "#eb7f23";
    // mybtn.style.color = "white"
}

function cc500() {
    let mySortedOnnBikes = JSON.parse(localStorage.getItem("OnnAllBikes"));

    let myBikeArr = [];
    for (let i = 0; i < mySortedOnnBikes.length; i++) {
        if (
            mySortedOnnBikes[i].Key == "Bikes500" ||
            mySortedOnnBikes[i].Key2 == "Bikes500"
        ) {
            myBikeArr.push(mySortedOnnBikes[i]);
        }
    }
    showAllBikes(myBikeArr);

    let mybtn = document.getElementById("cc500");
    // mybtn.style.background = "#eb7f23";
    // mybtn.style.color = "white"
}

function Comfort() {
    let mySortedOnnBikes = JSON.parse(localStorage.getItem("OnnAllBikes"));

    let myBikeArr = [];
    for (let i = 0; i < mySortedOnnBikes.length; i++) {
        if (mySortedOnnBikes[i].Comfort == "ComfortBike") {
            myBikeArr.push(mySortedOnnBikes[i]);
        }
    }
    showAllBikes(myBikeArr);

    let mybtn = document.getElementById("Comfort");
    // mybtn.style.background = "#eb7f23";
    // mybtn.style.color = "white"
}

function Cruiser() {
    let mySortedOnnBikes = JSON.parse(localStorage.getItem("OnnAllBikes"));

    let myBikeArr = [];
    for (let i = 0; i < mySortedOnnBikes.length; i++) {
        if (mySortedOnnBikes[i].Cruiser == "CruiserBike") {
            myBikeArr.push(mySortedOnnBikes[i]);
        }
    }
    showAllBikes(myBikeArr);

    let mybtn = document.getElementById("Cruiser");
    // mybtn.style.background = "#eb7f23";
    // mybtn.style.color = "white"
}

function Gearless() {
    let mySortedOnnBikes = JSON.parse(localStorage.getItem("OnnAllBikes"));

    let myBikeArr = [];
    for (let i = 0; i < mySortedOnnBikes.length; i++) {
        if (mySortedOnnBikes[i].Gearless == "GearlessBike") {
            myBikeArr.push(mySortedOnnBikes[i]);
        }
    }
    showAllBikes(myBikeArr);

    let mybtn = document.getElementById("Gearless");
    // mybtn.style.background = "#eb7f23";
    // mybtn.style.color = "white"
}

function Geared() {
    showAllBikes(JSON.parse(localStorage.getItem("OnnAllBikes")));
    let mybtn = document.getElementById("Geared");
    // mybtn.style.background = "#eb7f23";
    // mybtn.style.color = "white"
}

function Motorbike() {
    showAllBikes(JSON.parse(localStorage.getItem("OnnAllBikes")));
    let mybtn = document.getElementById("Motorbike");
    // mybtn.style.background = "#eb7f23";
    // mybtn.style.color = "white"
}

function Scooter() {
    let mySortedOnnBikes = JSON.parse(localStorage.getItem("OnnAllBikes"));

    let myBikeArr = [];
    for (let i = 0; i < mySortedOnnBikes.length; i++) {
        if (mySortedOnnBikes[i].Scooter == "ScooterBike") {
            myBikeArr.push(mySortedOnnBikes[i]);
        }
    }
    showAllBikes(myBikeArr);

    let mybtn = document.getElementById("Scooter");
    // mybtn.style.background = "#eb7f23";
    // mybtn.style.color = "white"
}

function Sport() {
    let mySortedOnnBikes = JSON.parse(localStorage.getItem("OnnAllBikes"));

    let myBikeArr = [];
    for (let i = 0; i < mySortedOnnBikes.length; i++) {
        if (mySortedOnnBikes[i].Sport == "SportBike") {
            myBikeArr.push(mySortedOnnBikes[i]);
        }
    }
    showAllBikes(myBikeArr);

    let mybtn = document.getElementById("Sport");
    // mybtn.style.background = "#eb7f23";
    // mybtn.style.color = "white"
}

function RequestPrice() {
    alert("Thank you for your message. It has been sent.");
}