// For Loop
// For Each Loop 
// While Loop 
// Do-While Loop 


// Label Is Followed By A :

// For Loop  Action  
var frnds = ["Raj", "Shyam", "Sidd"];
// for () {}
for (var i = 0; i < frnds.length; i++){
    console.log("Index" + i + "value" + frnds[i] + "\n");
    console.log(`-Index${i}value${frnds[i]}`);
}

var name = "T D C 9"
for (var i = 0 ; i <= name.length; i++){
    console.log(name[i])
}

// For Each Loop 
var friends = ["Ram","Shyam", "Sidd", "Tushar"];
friends.forEach((Item,Index) => { //Callback
    console.log(Index,Item); //Function Performed
}); // Item And Index


// For Each Can ONlY BE USED ON ARRAYS


// While Loops 
var i = 0;
while( i > 1){
    console.log("Hello");
    break;
}