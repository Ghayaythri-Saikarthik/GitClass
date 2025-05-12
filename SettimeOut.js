// Set Time Out
// Asynchronous

function a() {
    setTimeout(() => {
     console.log("Hello Thursday");
    },4500); 
}
function b() {
    setTimeout(() => {
     console.log("Hello Tuesday");
    },1500); 
}
function c() {
    setTimeout(() => {
     console.log("Hello Wednesday");
    },3500); 
}
a();
b();
c();