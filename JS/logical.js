// Logical Operators - OR | AND
//&& And 
// // OR


var  age = 21;
var name = "Sidd"
if (age > 18 && name =="Sidd"){
    console.log("Hello");
}

else{
    console.log("Bye");
}
if (age > 18 || name =="Sidd"){
    console.log("Hello");
}

else{
    console.log("Bye");
}

// == - Value To Value Checking 
// === - Data Type Checking 

var check = age >= 21 && name == "Sidd" ? console.log("Helo"): console.log("bye");