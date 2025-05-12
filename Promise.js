// Promise
// Syntax
// Return new Promise ((resolve, reject) => {})
// Resolve

function Go() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("Go to the Nearest Market")
    
    },500); 
})
}
function Buy() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("Buy the Amul Cheese 500gm")
    
    },1000); 
})
}
function Bill() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("Pay the amount and get the Bill of Product")
    
    },1500); 
})
}
function Return () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("Return to home in 20 mins")
    
    },2000); 
})
}
Go()
.then(val => {console.log(val); return Buy()})
.then(val => {console.log(val); return Bill()})
.then(val => {console.log(val); return Return()})
.then(val => {console.log(val)});


// Reject
function Go() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Shop = true
            if (Shop){
                resolve ("Go to the Nearest Market")
            }
            else {
                reject ("Nearest Markets are Closed")
            }
            
    
    },500); 
})
}
function Buy() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Product = true
            if (Product) {
            resolve ("Buy the Amul Cheese 500gm")
            }
            else {
            reject ("Amul Cheese 500gm is Out of Stock")
            }
            
    
    },1000); 
})
}
function Bill() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Pay = false
            if (Pay)(
            resolve ("Get the Bill of Product")
            )
            else {
            reject ("Make the Payment for the product")
            }
    },1500); 
})
}
function Return () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Back = true
            if (Back)(
            resolve ("Return home in 20 mins")
            )
            else {
            reject ("Main roads blocked due to Political Party")
            }
    },2000); 
})
}
// Go()
// .then(val => {console.log(val); return Buy()})
// .then(val => {console.log(val); return Bill()})
// .catch(val => {console.log(val); return Return()})
// .then(val => {console.log(val)})


// // Async and Await : Syntax for only true values
// async function js() {
//     const a = await Go();
//     console.log(a);
//     const b = await Buy();
//     console.log(b);
//     const c = await Bill();
//     console.log(c);
//     const d = await Return();
//     console.log(d);
// }
// js();

// Async and Await : Syntax for true and false values
async function js() {
    try {
    const a = await Go();
    console.log(a);
    const b = await Buy();
    console.log(b);
    const c = await Bill();
    console.log(c);
    const d = await Return();
    console.log(d);    
    } catch (error) {
    console.log(error);
    }
}
js();