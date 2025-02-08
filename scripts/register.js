let petList = [];
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputService = document.getElementById("txtService");
let inputBreed = document.getElementById("txtBreed");
let inputSpecies = document.getElementById("txtSpecies");

class Pet {
    constructor(name,age,gender,service,breed,species) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.service = service;
        this.breed = breed;
        this.species = species;
    }
}

function register(){
    addPet();
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputService.value, inputBreed.value, inputSpecies.value);
    console.log(newPet);
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

function addPet(){
    let pet1 = new Pet("Fetcher",6,"male","de-shed","Golden Retriever","dog");
    let pet2 = new Pet("Laika",4,"female","shampoo","Akita","dog");
    let pet3 = new Pet("Satchmo",8,"male","nail trim","Saint Bernard","dog");
    
    petList.push(pet1,pet2,pet3);
}

function displayRow(){
    document.getElementById("registeredPetDisplay").innerHTML=`
        <h2>Registered Pets</h2>       
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Client #</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Breed</th>
                    <th scope="col">Species</th>
                    <th scope="col">Service</th>
                </tr>
            </thead>
            <tbody id="clientTable">
            </tbody>
        </table>    
    `;

    let clientRow = document.getElementById("clientTable");
    let result = "";

    for(let i = 0; i < petList.length; i++){
        let client = petList[i];
        result += `
            <tr>
                <th scope="row">${i}</th>
                <td>${client.name}</td>
                <td>${client.age}</td>
                <td>${client.gender}</td>
                <td>${client.breed}</td>
                <td>${client.species}</td>
                <td>${client.service}</td>
            </tr>
        `
    }
    clientRow.innerHTML = result;
}