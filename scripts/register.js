let petList = [];
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputService = document.getElementById("txtService");
let inputBreed = document.getElementById("txtBreed");
let inputSpecies = document.getElementById("txtSpecies");
let inputClientName = document.getElementById("txtClientName");

class Pet {
    constructor(name,age,gender,service,breed,species,clientName) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.service = service;
        this.breed = breed;
        this.species = species;
        this.clientName = clientName;
    }
}

function register(){
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputService.value, inputBreed.value, inputSpecies.value, inputClientName.value);
    console.log(newPet);
    if(isValid(newPet)){
        petList.push(newPet);
        displayRow();
        clearInputs();
        showAlert("A new pet was added","success");
        // successful registration message
    }else{
        showAlert("Please complete all fields","danger");
    }
}

function clearInputs(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value="";
    inputService.value="";
    inputBreed.value="";
    inputSpecies.value="";
    inputClientName.value="";
}

function isValid(pet){
    let validation = true;

    // reset the style
    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    document.getElementById("alert-error").classList.add("hide");

    if(pet.name == ""){
        validation = false;
        inputName.classList.add("error");
    }
    if(pet.age < 0){
        validation = false;
        inputAge.classList.add("error")
    }
    return validation;
}

function addPet(){
    let pet1 = new Pet("Fetcher",6,"male","de-shed","Golden Retriever","dog","Jessica");
    let pet2 = new Pet("Laika",4,"female","shampoo","Akita","dog","Fred");
    let pet3 = new Pet("Satchmo",8,"male","nail trim","Saint Bernard","dog","Cheryl");
    
    petList.push(pet1,pet2,pet3);
}

function removePet(petId){
    document.getElementById(petId).remove();
    petList.splice(petId,1);
    displayRow();
    numClients();
    showAlert("The pet was removed","warning");
}

function showAlert(msg,type){
    let alertContainer = document.getElementById("alertContainer");

    alertContainer.innerHTML=`
        <div id="alert-error" class="alert alert-${type}" role="alert">
            ${msg}
        </div>
    `;

    setTimeout(()=>{
        document.getElementById("alert-error").remove();
    },3000);
}

function init(){
    globalInit();
    addPet();
    numClients();
}

window.onload = init();
