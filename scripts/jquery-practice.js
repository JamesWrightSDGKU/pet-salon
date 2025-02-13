console.log("Welcome to jQuery");

// JS vs jQuery (getting elements)
// byId
let htmlElement = document.getElementById("results");
htmlElement = $("#results");

// byTagName
let htmlElements2 = document.getElementsByTagName("p");
htmlElements2 = $("p");

// byClassName
let htmlElements3 = document.getElementsByClassName("bg-tomato");
htmlElements3 = $(".bg-tomato");

// ID selectors

let redParagraph = $("#red").css("background-color","red").css("color","white");
console.log("my red paragraph", redParagraph);

let blueParagraph = $("#blue").css({
    "background-color": "blue",
    "color": "white"
});

// Class selector
let paragraphWithBorder = $(".with-border");
paragraphWithBorder.css("border","5px solid black");

paragraphWithBorder.on("click",function(){
    console.log("Clicked");
    $(".with-border").addClass("bg-gray");
});

// Tag selector
let paragraphs = $("p");
paragraphs.css("cursor","pointer");

// Simple and common function
function register(){
    let testEntry = $("#testInput").val(); // get and store value
    $("#results").append(`<li>${testEntry}</li>`)
}

// Events
$("#btnRegister").on("click",register);

// simple and common function
function clickMe(){
    console.log("click me");
    $("p:first").hide();
    $("p").css("border","3px solid black");
}

$("#btnNew").on("click",clickMe);