var x = 5
var y = 7
var z = x + y
console.log(z)

A = "Hello "
B = "World!"
var C = A + B
console.log(C)

function sumnPrint (x1, x2) {
    var result = x1 + x2
    console.log(result)
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    if (C.length < z) {
        console.log(z)
    }
} else {
    console.log("good job!")
}

// L1 = ["Watermelon","Pineapple","Pear","Banana"];
// L2 = ["Apple","Banana","Kiwi","Orange"];

// function findTheBanana(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") {
//             alert("Banana is found!");
//         }
//     }
// }
// findTheBanana(L1);
// findTheBanana(L2);

// function bananaAlert(item) {
//     if (item === "Banana") {
//         alert("Banana is found!");
//     }
// }

// L1.forEach(bananaAlert);
// L2.forEach(bananaAlert);

now = new Date();
hour = now.getHours();

function greeting(x) {
    if (!document.getElementById("greeting")) return; // Exit the function if the element does not exist
    if (x < 5 || x >= 20) {
        document.getElementById("greeting").innerHTML = "Good night!";
    }
    else if (x < 12) {
        document.getElementById("greeting").innerHTML = "Good morning!";
    }
    else if (x < 18) {
        document.getElementById("greeting").innerHTML = "Good afternoon!";
    }
    else {
        document.getElementById("greeting").innerHTML = "Good evening!";
    }
}

greeting(hour);
// Verify your code is working correctly. Refresh index.html and confirm the greeting appears with the correct timing.
// Fix the Error on the Other Pages (Required Debugging Task)
// The greeting DOM code may create errors on pages that do not contain the id="greeting". That is because our script.js is running on all pages. 
// Fix this by making sure your greeting code only runs when the element exists (or only on index.html).
// Hint for the first fix: Before updating an element, check that it exists on the page, for example, by confirming document.getElementById(...) returns a value.
// Hint for the second fix: You can use window.location to create this fix. (See https://www.w3schools.com/js/js_window_location.asp for more information).
// Verify your code is working correctly:
// Greeting shows on index.html
// No console errors on any other pages

function addYear() {
    if (!document.getElementById("copyYear")) return; // Exit the function if the element does not exist
    var currentYear = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = "&copy; " + currentYear + " MonoMuse. All rights reserved.";
}


/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();

// When the "Read Less" button is clicked
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });


function showForm(date) {
  document.getElementById("ticketForm").style.display = "block";
  document.getElementById("date").value = date;
}

function submitTicket() {
    alert("Redirecting to payment system.");
}


function toggleNav() {
  const nav = document.querySelector(".nav_bar");
  nav.classList.toggle("responsive");
}

if (document.getElementById("map")) {
    var map = L.map('map').setView([40.4406, -79.9959], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([40.4406, -79.9959]).addTo(map);
    marker.bindPopup("<b>MonoMuse Museum</b><br>Pittsburgh, PA").openPopup();
}
