let fName = prompt("Enter your Full Name");

namelen = fName.length;

let username = "@" + fName.concat(namelen);

console.log(username);