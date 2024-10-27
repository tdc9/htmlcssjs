var name = "The Darn Creator";
console.log(name.length)
console.log(name.slice(0,7));
console.log(name.slice(-8));
console.log(name.substring(1,5));
console.log(name.substr(1,9));
console.log(name.replace("The","Jharna"))

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log("Helo".concat(" ",name));

var randtext= "      9hwe8htw   ";
console.log(randtext.trim());

//LastIndexOf
//IndexOf
//search
//match
//matchall

console.log(name.lastIndexOf("h"));
console.log(name.indexOf("e"));
console.log(name.search("C"));
console.log(name.match("C"));
console.log(Array.from(name.matchAll("D")));

