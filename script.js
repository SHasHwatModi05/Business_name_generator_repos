let random = Math.random()
let first, second, third;
if (random < 0.33) {
    first = "crazy"

}
else if (random < 0.66 && random >= 0.33) {
    first = "Amazing"

}
else {
    first = "Fire"

}

random = Math.random()
if (random < 0.33) {
    second = "Engine"

}
else if (random < 0.66 && random >= 0.33) {
    second = "Foods"

}
else {
    second = "Garments"

}

random = Math.random()
if (random < 0.33) {
    third = "Bros"

}
else if (random < 0.66 && random >= 0.33) {
    third = "Limited"

}
else {
    third = "Hub"

}

let businessName = `${first} ${second} ${third}`;
console.log(businessName);

// Display the output on the webpage to prevent the white screen
const heading = document.createElement("h1");
heading.innerHTML = `Your Business Name: <br> <span style="color: #0070f3; font-size: 1.5em;">${businessName}</span>`;
heading.style.textAlign = "center";
heading.style.fontFamily = "Arial, sans-serif";
heading.style.marginTop = "20%";
document.body.appendChild(heading);


