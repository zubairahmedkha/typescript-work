"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = ["Irshad", "Rashid", "Ali",
    "A Razzaque"];
console.log("good news I found a bigger table");
guestList.unshift("Muhammad");
guestList.splice(2, 0, "Zahid");
guestList.push("Hassan");
guestList.forEach(guest => { console.log(`Hi ${guest}, I would like to invite you to dinner`); });
