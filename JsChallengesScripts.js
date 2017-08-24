'use strict'

var number = 42
window.alert(number)
console.log(number)
/* -----------------------New Task--------------------------------------------*/

function func1(p1) {
    return p1 * p1
}
console.log(func1(4))
/* -----------------------New Task--------------------------------------------*/

function func2(a1, a2, a3) {
    return a1 + a2 + a3
}
console.log(func2(1, 'dog', 2))
/* -----------------------New Task--------------------------------------------*/

var person = {
    name: 'kevin',
    age: 22,
    occupation: 'pilot'
}

console.log(person.name)
console.log(person.age)
console.log(person.occupation)
person.name = 'steve'
console.log(person.name)
/* -----------------------New Task--------------------------------------------*/

function func3() {
    window.alert('function called')
}
/* -----------------------New Task--------------------------------------------*/

function makeOld() {
    person.age++
        console.log(person.age)
}
/* -----------------------New Task--------------------------------------------*/

function createPerson() {
    var person2 = {
        name1: document.getElementById('Name').value,
        age1: document.getElementById('Age').value,
        occupation1: document.getElementById('Occupation').value
    }

    document.write(person2.name1)
    document.write(person2.age1)
    document.write(person2.occupation1)
}

/* -----------------------New Task--------------------------------------------*/

function ellSay() {
    var elliotSays = 'He said "My name is Elliott"'

    window.alert(elliotSays.toUpperCase())
}

/* -----------------------New Task--------------------------------------------*/
function str2() {
    var str = 'String'
    var num = 9

    window.alert(str + num)
}
/* -----------------------New Task--------------------------------------------*/
function arr1() {
    var strArr = ['t1', 't2', 't3']
    window.alert(strArr[0] + strArr[1] + strArr[2])
    strArr.push('t4')
}
/* -----------------------New Task--------------------------------------------*/
function fizzBuzz(count, word1, word2) {
    for (var i = 0; i < count; i++) {
        console.log(i)

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(word1 + word2)
        } else if (i % 3 === 0) {
            console.log(word1)
        } else if (i % 5 === 0) {
            console.log(word2)
        }
    }
}
/* -----------------------New Task--------------------------------------------*/
function iteration4(param1) {
    while (param1 !== 1) {
        console.log('Number is ' + param1)
        if (param1 % 3 === 0) {
            param1 = param1 / 3
            console.log('It is divisible by 3')
        } else if ((param1 + 1) % 3 === 0) {
            param1 += 1
            param1 = param1 / 3
            console.log('Added 1 to make it divisible by 3')
        } else if ((param1 - 1) % 3 === 0) {
            param1 -= 1
            param1 = param1 / 3
            console.log('Subtracted 1 to make it divisible by 3')
        }
    }
    console.log('Reached one')
}
/* -----------------------New Task--------------------------------------------*/
function createPara() {
    var ele = document.getElementById('DOM1')
    var para = document.createElement('p')
    para.id = 'para'
    ele.appendChild(para)
}

function changeTag() {
    var node = document.createTextNode(paraText.value)
    document.getElementById('para').appendChild(node)
}

function deletePara() {
    var paraToDel = document.getElementById('para')
    document.getElementById('DOM1').removeChild(paraToDel)
}
/* -----------------------New Task--------------------------------------------*/
var url = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json'
var req = new XMLHttpRequest()
req.open('GET', url)
req.responseType = 'json'
req.send()
req.onload = function () {
    var reqData = req.response
    var myH1 = document.createElement('p')
    myH1.textContent = reqData['members'][0].name
    document.getElementById('JSON1').appendChild(myH1)
}
/* -----------------------New Task--------------------------------------------*/
var url2 = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json'
var req2 = new XMLHttpRequest()
var requestData
req2.open('GET', url2)
req2.responseType = 'json'
req2.send()
req2.onload = function () {
    requestData = req2.response
}

function kingSearch(sTerm) {
    var king
    for (var index = 0; index < requestData.length; index++) {
        if (sTerm == requestData[index].nm) {
            king = requestData[index]
        }
        if (sTerm == requestData[index].cty) {
            king = requestData[index]
        }
        if (sTerm == requestData[index].hse) {
            king = requestData[index]
        }
        if (sTerm == requestData[index].yrs) {
            king = requestData[index]
        }
    }

    // display king
    var newEle = document.getElementById('JSON2')
    var newPara = documendsat.createElement('p')
    newPara.id = 'para1'
    newEle.appendChild(newPara)

    var nnode = document.createTextNode('Name: ' + king.nm + ' House: ' + king.hse + ' City: ' + king.cty + ' Years: ' +
        king.yrs)
    document.getElementById('para1').appendChild(nnode);

}
/* -----------------------New Task--------------------------------------------*/
/*
Create a virtual garage with the following functionality
•	 Check in cars to the garage
•	 Check out cars from the garage
•	 Output the contents of the garage
•	 Calculate the bill for a car, dependant on its attributes
*/

let parking = []
let car
let addCar = (make, colour, plate, price) => {
    parking.push(car = {
        make,
        colour,
        plate,
        price
    })

    outputContents();

}


let q
let searchCarByPlate = (term) => {
    return q = parking.filter((a) => {
        return a.plate === term;
    })
}


let removeCar = (car) => {
    console.log(car);
    parking.splice(parking.findIndex((a) => {
        return a.plate === car.plate;
    }), 1);
    outputContents();
} //fix this 

let outputContents = () => {
    let output = "";

    for (var w = 0; w < parking.length; w++) {
        output += `Car ${w} \n`;
        output += `Make: ${parking[w].make}, Colour: ${parking[w].colour}, Plate: ${parking[w].plate}, Price: ${parking[w].price} \n`;

    }



    document.getElementById('contents').value = output;
    return output;
}

let calcBill = (car) => {
    let charge = 0; 
    switch (car.colour) {
        case 'red':
        charge = acar.price * 0.25;
            break;

        case 'blue':
        charge = car.price * 0.1;
            break;

        case 'black':
        charge = car.price * 0.14;
            break;
        default:
            return -1;
            break;
    }

    document.getElementById('contents').value  = `The bill for this car is £${charge}`;
}
/* -----------------------New Task--------------------------------------------*/
//add faults to car obj
//create cli 

let consoleReader = (input) =>{ 
    let cinput = input.toLowerCase();
    if (cinput.includes("help")) {
        document.getElementById("console").value = help();
    }
    else if (cinput.includes("create"))
    {
        document.getElementById("console").value = consoleCreate(cinput);
    }
    else if (cinput.includes("output"))
        {
            document.getElementById("console").value = outputContents();
        }
     else if (cinput.includes("remove"))
        {
            document.getElementById("console").value = consoleRemove(cinput);
        }
}

let help = () =>{
    return "Help";
}

let consoleCreate = (cip) =>{

    cip = cip.replace("create", ""); 
    cip = cip.trim(); 
    let params = cip.split(',');
    addCar(params[0], params[1], params[2], params[3]*1);
    return "Car added";
}

let consoleRemove = (cip) =>{
    cip = cip.replace("remove", ""); 
    cip = cip.trim(); 
    removeCar(cip);
    return "car removed";
}
