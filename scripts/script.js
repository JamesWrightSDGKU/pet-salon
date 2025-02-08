let petList = [];
let salon = {
    name: "The Fashionable Pet",
    address:{
        streetNumber:"538",
        street: "Serene Way",
        city: "Tropic Bay",
        state: "CA",
        zip: "92810",
        country: "United States of America"
    }
}

function getSalonAddress(){
    document.getElementById("salonAddress").innerHTML=`<p>${salon.address.streetNumber} ${salon.address.street}<br>${salon.address.city}, ${salon.address.state} ${salon.address.zip}</p>`;
    // console.log(salon.address.streetNumber);
}

// getSalonAddress();
// getting HTML elements
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputService = document.getElementById("txtService");
let inputBreed = document.getElementById("txtBreed");
let inputSpecies = document.getElementById("txtSpecies");

function Pet(name,age,gender,service,breed,species){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
    this.species = species;
}

function register(){
    // get the values from inputs
    // create obj using constructor
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputService.value, inputBreed.value, inputSpecies.value);
    console.log(newPet);
    // push obj into array
    if(isValid(newPet)){
        petList.push(newPet);
        displayRow();
        clearInputs();
    }
}

function clearInputs(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value="";
    inputService.value="";
    inputBreed.value="";
    inputSpecies.value="";
}

// Validations
function isValid(pet){
    let validation = true;
    if(pet.name == ""){
        validation = false;
        alert("Please enter the name of the pet.");
    }
    if(pet.age < 0){
        validation = false;
        alert("Please enter a positive value for the age.")
    }
    return validation;
}

function init(){
    // create three pets
    let pet1 = new Pet("Fetcher",6,"male","de-shed","Golden Retriever","dog");
    let pet2 = new Pet("Laika",4,"female","shampoo","Akita","dog");
    let pet3 = new Pet("Satchmo",8,"male","nail trim","Saint Bernard","dog");
    
    // push the pets into the array
    petList.push(pet1,pet2,pet3);
    getSalonAddress();
}


window.onload=init;// wait to render HTML