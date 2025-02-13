// constructor
class Service {
    constructor(title,price) {
        this.title=title;
        this.price=price;
    }
}

function validService(service){
    let isValidTitle = true;
    let isValidPrice = true;

    if(service.title == ""){
        isValidTitle = false;
        $("#txtTitle").css("border","1px solid red");
        $("#titleRequirementText").show().css("color","red");
    }else{
        $("#titleRequirementText").hide();
        $("#txtTitle").css("border","1px solid black");
    }
    if(service.price < 0){
        isValidPrice = false;
        $("#txtPrice").css("border","1px solid red");
        $("#priceRequirementText").show().css("color","red");
    }else{
        $("#priceRequirementText").hide();
        $("#txtPrice").css("border","1px solid black");
    }

    return  isValidTitle && isValidPrice;
}

function register(){
    // get the values from the inputs
    let inputTitle=$("#txtTitle").val();
    let inputPrice=$("#txtPrice").val();
    
    let newService = new Service(inputTitle,inputPrice);
    validService(newService);
    // if(validService.isValidPrice == false){
    //     $("#titleRequirementText").show();
    // }
    if(validService(newService) == true){
        console.log("A new service was added:");
        console.log(newService);
        saveService(newService);
        clearServiceInputs();
    }
}

function clearServiceInputs(){
    $("#txtTitle").val("");
    $("#txtPrice").val("");
}

function init(){
    // event handler
    // ...on("click" ... )
    // hide
    $("#btnRegister").on("click",register);
    $("#titleRequirementText").hide();
    $("#priceRequirementText").hide();
}

window.onload=init;