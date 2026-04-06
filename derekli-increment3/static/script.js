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

