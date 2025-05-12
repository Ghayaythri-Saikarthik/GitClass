//Array Methods

//.push - adds a value to the array at the end
let a = [10,20,30,40,50];
a.push(60);
console.log(a);

//.pop - removes a value from array at the end
let b = [10,20,30,40,50];
b.pop();
console.log(b);

//.shift - removes a value from array from the start
let c = [10,20,30,40,50];
c.shift();
console.log(c);

//.unshift - Adds a value to the array to the start
let d = [10,20,30,40,50];
d.unshift(60);
console.log(d);

//.splice - Updates made in between the values
// syntax - variable name.splice(index,splice,value)
// 0 --> used to add a particular value in the given index space and move forward the existing index value
// 1 --> used to add a particular value in the given index space and removes the existing index value

let week = ["Mon","Tue","Wed","Thurs","Fri","Sat"];
week.splice(0,0,"Sun");
console.log(week);

let weeks = ["Mon","Tue","Wed","Thurs","Fri","Sat"];
weeks.splice(0,0,"Sun");
console.log(weeks);

// .sort - Arranges the words only in ASC order
let e = ["Orange","Kiwi","Chikku","Banana","Mango","Apricot","Jackfruit","Plum"];
console.log(e.sort());

// .reverse - Gives the 
let r = "rtfiuckja";
console.log(r.split("").reverse().join(""));

// Task
let tab = "apple";
let bat = tab.toUpperCase();
let result = bat.split("");
console.log(result);

let rp = "apple";
let pr = rp.split("");
let res = pr.map((fruit)=>fruit.toUpperCase());
console.log(res);
    
// . map - 
// Syntax - variable name.map(value,index,accumulator)=>)
// Accumulator - Whole  array block

let hj = [10,20,30,40,50];
let jh = hj.map((val,ind,acc)=>val*2);
console.log(jh);

// .filter - comparison check
// Syntax - variable name.filter(value,index,accumulator)=>)

let m = [10,20,30,40,50,60,70,80,56,45,356,90,43,32,98,73,44];
let n = m.filter((x,y,z)=>x>10);
console.log(n);

// .reduce - adding the values to accumulator
// Syntax - variable name.reduce(accumulator, currentvalue)=>)
 let kl = [10,20,30,40,50,2,45,75,63,7,456,458,2,7,963,30,75,36,83,111,12,2]
 let lk = kl.reduce((acc,curval)=>acc+curval);
 console.log(lk);
