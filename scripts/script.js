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

// function getSalonAddress(){
//     document.getElementById("salonAddress").innerHTML=`<p>${salon.address.streetNumber} ${salon.address.street}</p><p>${salon.address.city}, ${salon.address.state} ${salon.address.zip}</p>`;
//     // console.log(salon.address.streetNumber);
// }

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
    petList.push(newPet);
    clearInputs();
}

function clearInputs(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value="";
    inputService.value="";
    inputBreed.value="";
    inputSpecies.value="";
}


function init(){
    // create three pets
    let pet1 = new Pet("Fetcher",6,"male","de-shed","Golden Retriever","dog");
    let pet2 = new Pet("Laika",4,"female","shampoo","Akita","dog");
    let pet3 = new Pet("Satchmo",8,"male","nail trim","Saint Bernard","dog");
    
    // push the pets into the array
    petList.push(pet1,pet2,pet3);
    
    function petCounter(){
        document.getElementById("petsCounter").innerHTML=`There are ${petList.length} pets registered:`;
        console.log(petList.length);
    }
    petCounter();
    
    function petNames(){
        for(i=0;i<petList.length;i++){
            document.getElementById("petNames").innerHTML+=`<li>${petList[i].name}</li>`;
        }
    }
    petNames();
}


window.onload=init;// wait to render HTML