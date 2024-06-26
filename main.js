#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`]
    },
    {
        name: "amount",
        message: "Enter to amount",
        type: "number",
    }
]);
let userFromCurrency = user_answer.from;
let userToCurrency = userFromCurrency.to;
let fromamount = currency[userFromCurrency];
let toamount = currency[userToCurrency];
let amount = user_answer.amount;
let baseamount = amount / fromamount; //USD base currency // 4
let convertamount = baseamount * toamount;
console.log(convertamount);
