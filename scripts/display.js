function numClients(){
    document.getElementById("petCounter").innerHTML=`<strong>${petList.length} pets registered:</strong>`;
}

function displayTable(){
    document.getElementById("clientDisplay").innerHTML=`
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
                    <th scope="col">Client</th>
                    <th scope="col">Actions</th>
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
            <tr id=${i}>
                <th scope="row">${i}</th>
                <td>${client.name}</td>
                <td>${client.age}</td>
                <td>${client.gender}</td>
                <td>${client.breed}</td>
                <td>${client.species}</td>
                <td>${client.service}</td>
                <td>${client.clientName}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removePet(${i})">Delete</button>
                    <button class="btn btn-info btn-sm disabled">Edit</button>
                <td>
            </tr>
        `;
    }
    clientRow.innerHTML = result;
}

function displayCards(){
    let cardSection = document.getElementById("clientDisplay");
    let result = "";

    for(let i = 0; i<petList.length;i++){
        let client = petList[i];
        result += `
            <div id=${i} class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class=card-title">Name: ${client.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Age: ${client.age}</h6>
                    <p class="card-text">Gender: ${client.gender}</p>
                    <p class="card-text">Breed: ${client.breed}</p>
                    <p class="card-text">Service: ${client.service}</p>
                </div>
            </div>
        `;
    }
    cardSection.innerHTML=result;
}