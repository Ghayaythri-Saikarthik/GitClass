//Loops

// For loop (Initialization ; Condition ; increment \ decrement)

for (let a = 1;a<=9;a++){
    console.log(a);
};

// While loop
let b = 1;
while  (b<=6){
    console.log(b); 
    b++ ;
};

// Do While Loop
let c = 1;
do {
 console.log(c);
}
while (c>=5)
// For In

let obj = {
    name : "Harshitha",
    date : "27/09/2024",
    place : "Chennai",
    bloodgroup : "O+"
} 
for (sape in obj){
    console.log(sape + " = "+obj[sape]);
}

// For Of

let days = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]
for (SAP of days){
    console.log(SAP);
}
