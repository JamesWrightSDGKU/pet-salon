// Assignment 1

let pets = [
    {
        name: "Fetcher",
        age: 6,
        gender: "male",
        service: false,
        breed: "Golden Retriever"
    },
    {
        name: "Laika",
        age: 4,
        gender: "female",
        service: true,
        breed: "Akita"
    },
    {
        name: "Satchmo",
        age: 8,
        gender: "male",
        service: false,
        breed: "Saint Bernard"
    }
]

function numPets(){
    document.getElementById("petCounter").innerHTML=pets.length;
}

numPets();

function petNames(){
    for(i = 0; i < pets.length; i++){
        document.getElementById("petNames").innerHTML+=`<li>${pets[i].name}</li>`;
    }
}

petNames();