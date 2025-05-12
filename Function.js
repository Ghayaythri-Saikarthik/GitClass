//Function

//Function name (){}

function js(){
// Var - Variable type variable name = values
var a = 10;
var a = 20;
var a = 30;
console.log(a);

//Let
let b = 40;
    b = 50;
console.log(b);

//CONST
const c = 60;
const d = 70;
console.log(c);
console.log(d);


}
js();

// Function Types
// Function Statement Declaration --> Parameters and Arguments
function root () {
    console.log(root);
} root("Check");

// Function Expression - Assign to variable and pass parameters and arguments
let duck = function rock (exp){
  console.log(exp);
}
duck ("duckling");

// Anonymous Function
let a = function(ano){
    console.log(ano);
}
a ("Anonymous Exp");

// Immediate Invoke Function Expression
(function (inv){
    console.log(inv);
}) ("Test");

// Arrow Function or Single line function
// Syntax - ()=>{}
    let b = (arrow)=>{console.log(arrow);}
    b("Arrow Func");