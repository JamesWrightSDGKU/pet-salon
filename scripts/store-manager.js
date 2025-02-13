function saveService(service){
    let data = read(); // [] or data
    data.push(service); // add the new service to the array
    let val = JSON.stringify(data);
    localStorage.setItem("services",val);
}

function read(){
    let list=localStorage.getItem("services");
    console.log(list);
    if(!list){ // if NOT list (true when list is empty)
        return[]; // create an empty array ** IMPORTANT **
    }else{
        let data = JSON.parse(list); // convert the string into an array
        return data;
    }
}