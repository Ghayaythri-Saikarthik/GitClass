// Call back hell
// Calling Multiple Function

function Walk(callback) {
    setTimeout(() => {
     console.log("Daily Walk 30 mins");
     callback()
    },5500); 
}
function Clean(callback) {
    setTimeout(() => {
     console.log("Clean the House Thrice a Week");
     callback()
    },3500); 
}
function Sleep(callback) {
    setTimeout(() => {
     console.log("Sleep 8 hours a day to stay healthy");
     callback()
    },2500); 
}
function Wake(callback) {
    setTimeout(() => {
     console.log("Wake up Early in the Morning to stay Active");
    },4500); 
}
Walk(()=>{
     Clean(()=>{
        Sleep(()=> {
            Wake(()=> {

            })
        })
    })
})

//  Task
function Welcome(callback) {
     console.log("Hello Bindu");
     callback()
    }; 
function Introduce(callback) {
     console.log("Meet my Family Members");
     callback()
    };
function Invite(callback) {
     console.log("We are very Happy to invite you for our family Function");
     callback()
    };
Welcome (()=>{
    Introduce (()=> {
        Invite (()=> {        
        })
    })
})