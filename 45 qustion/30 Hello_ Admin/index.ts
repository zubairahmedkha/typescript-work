// Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code

let usernames = ["admin", "Eric", "John", "Jenny", "Jake"];
for (let i = 0; i < usernames.length; i++){
    if (usernames[i] === "admin"){
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    } 
    console.log(" ");  
}


