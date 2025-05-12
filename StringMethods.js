// String Methods
// Length - Specifies the Character length
const str = 'Hello super women in the world';
console.log(str.length);
// To Upper Case()
console.log(str.toUpperCase());
// To Lower Case()
console.log(str.toLowerCase());
// CharAt()
console.log(str.charAt(4));
// Index Of()
console.log(str.indexOf("e"));
// Last Index Of()
console.log(str.lastIndexOf("e"));
// Slice()
console.log(str.slice(4));
// Substring - Removes spaces()
console.log(str.substring(0,4));
// Replace()
console.log(str.replace("super", "wonderful"));
// Replace All()
console.log(str.replaceAll("super", "cute"));
// Trim()
console.log(str.trim());
// TrimStart()
console.log(str.trimStart());
// TrimEnd()
console.log(str.trimEnd());
// Concat()
console.log(str.concat("wide"));
// Starts With() - Checks Upper and lower cases
console.log(str.startsWith("H"));
// Ends With()
console.log(str.endsWith("n"));
// Includes()
console.log(str.includes("t"));

// Split() - Split into each characters
console.log(str.split(""));
// Split() - Split Comma Separated into words
const str2 = "Apple,Banana,Jackfruit,Mango,Lychee";
const fruits = str2.split(",");
console.log(fruits);
// Split () - Split the words
const str3 = "Welcome Home";
const result = str3.split (" ");
console.log(result);

// Join() - With Space (" ")
// Join() - Without Space ("")
// Join() - With Any Separator ("-")
// Join() - Without Space but with Separator()
const Greet = ['Java', 'Script'];
const output = Greet.join(" ");
console.log(output);

//Task
let str1 = "chennai city center";
console.log(str1.replaceAll("c", "C"));

