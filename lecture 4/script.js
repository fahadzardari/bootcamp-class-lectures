let obj = "my object";
let student1 = {
  name: "fahad",
  year: 12,
  city: "hyderabad",
};

let age = 55;

// if(age <= 20 || age>=50){
//         alert("you are not eligible")
// }

// if(age>=50){
//         alert("You are an old person")

// } else if(age >= 18){
//         alert("You are an adult")
// }else{
//         alert("You are a child")

// }
// if(name1 == "Ali"){
//         alert("You are ali")
// } else if(name1 == "Fahad"){
//         alert("You are fahad")
// }else{
//         alert("you are neither of them")
// }

let name1 = prompt("Write your name:");

document.getElementById("para").innerHTML = "Hi Mr." + name1;

// switch (name1) {
//   case "Fahad":
//     alert("You are fahad");
//     break;

//   case "Ali":
//     alert("You are ali");
//     break;

 
//   default:
//         alert("neither of them")
// }

let student2 = "fahad";
let students = ["fhad", "zulfiqar", "ali", "zohaib"];

function changeText() {
  document.getElementById("heading").innerText = "hi changed";
}
