// Call back
// Synchronous

function Walk(callback) {
    setTimeout(() => {
     console.log("Daily Walk 30 mins");
     callback()
    },5500); 
}
function Clean(callback) {
    setTimeout(() => {
     console.log("Clean the House Thrice a Week");
    },3500); 
}
Walk(Clean);