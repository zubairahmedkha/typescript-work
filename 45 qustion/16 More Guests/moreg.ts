//dinner table, so now more space is available. Think of three 
//more guests to invite to dinner.
let guests = ["Ahmed", "Sayed", "Ali", "Mahmoud", "Haytham"];

/*for(let i=0; i<guests.length; i++)
{
    console.log(`Dear ${guests[i]}, I would like to invite you to dinner.`);
}*/
guests.push("Irshad","ali","khan");
guests.unshift("Ajmal");
guests.splice(2,0,"Hassan");
for(let i=0; i<guests.length; i++)
{
    console.log(`\n Dear ${guests[i]}, I would like to invite you to dinner.`);
}
 