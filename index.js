#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
//    12345  ===  1234 = false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fastcash", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        // = += -=
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fastcash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select the amount which you withdrawal",
                type: "list",
                choices: [1000, 2000, 4000, 5000, 10000]
            }
        ]);
        myBalance -= fast.fastcash;
        console.log(`you have successfully withdrawal ${fast.fastcash} \nYour remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
