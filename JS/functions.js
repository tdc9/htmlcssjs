function greet(){
    console.log("say hi");
}

greet();
function greetcustomer(customername = "Customer"){
    console.log("Hello " + customername);
}

greetcustomer();

// ES6 Arrow Function 

const printfullname = (fname,lname)=>{
    console.log(fname + " " + lname);
}

printfullname("Jayesh","Gaur")


// Local- myvar = "local"
// called in the funciton

// Global - myvar = "global"