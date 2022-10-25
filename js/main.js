console.log("1 uzduotis");

let firstName = "Zygimantas";
let lastName = "Kizla";
let birthYear = 1999;
let currentYear = 2022;

let age = currentYear - birthYear;

console.log("As esu " + firstName + " " + lastName +". Man yra " + age + " metai" );

console.log("2 uzduotis");

let max = 4;
let min = 0;
let result;

let value1 = Math.round(Math.random() * (max - min) + min);
let value2 = Math.round(Math.random() * (max - min) + min);

if(value1 >= value2 && value1 != 0 && value2 != 0){
    result = value1 / value2;
    Math.round(result * 100) / 100;
}
else if(value1 < value2 && value1 != 0 && value2 != 0){
    result = value2 / value1;
    Math.round(result * 100) / 100;
}
else{
    result = "dalyba negalima";
}

console.log("Value1 = " + value1 + " Value2 = " + value2 + " Result = " + result);

console.log("3 uzduotis");

let max2 = 25;
let min2 = 0;
let result2;

let mid_value;
let mid_value_exist = false;

let value3 = Math.round(Math.random() * (max2 - min2) + min2);
let value4 = Math.round(Math.random() * (max2 - min2) + min2);
let value5 = Math.round(Math.random() * (max2 - min2) + min2);

if ((value3 > value4 && value3 < value5) || (value3 < value4 && value3 > value5)){
    mid_value = value3;
    mid_value_exist = true;
} else if ((value4 > value3 && value4 < value5) || (value4 < value3 && value4 > value5)){
    mid_value = value4;
    mid_value_exist = true
} else if ((value5 > value3 && value5 < value4) || (value5 < value3 && value5 > value4)){
    mid_value = value5;
    mid_value_exist = true;
}
if (mid_value_exist == false){
    mid_value = "there is no middle value";
}


console.log("Value1: " + value3);
console.log("Value2: " + value4);
console.log("Value3: " + value5);
console.log("Mid-value: " + mid_value);

console.log("4 uzduotis");
let max3 = 10;
let min3 = 0;
let answer;

let a = Math.round(Math.random() * (max3 - min3) + min3);
let b = Math.round(Math.random() * (max3 - min3) + min3);
let c = Math.round(Math.random() * (max3 - min3) + min3);

if(a + b >= c){
    answer = "Trikampi galima nupiesti"
}
else{
    answer = "Trikampio nupiesti negalima"
}

console.log(answer);

console.log("5 uzduotis");

let max4 = 2;
let min4 = 0;
let numOf0 = 0;
let numOf1 = 0;
let numOf2 = 0;

let value6 = Math.round(Math.random() * (max4 - min4) + min4);
if (value6 == 0){
    numOf0++;
}else if(value6 == 1){
    numOf1++;
}else{
    numOf2++;
}

let value7 = Math.round(Math.random() * (max4 - min4) + min4);
if (value7 == 0){
    numOf0++;
}else if(value7 == 1){
    numOf1++;
}else{
    numOf2++;
}

let value8 = Math.round(Math.random() * (max4 - min4) + min4);
if (value8 == 0){
    numOf0++;
}else if(value8 == 1){
    numOf1++;
}else{
    numOf2++;
}

let value9 = Math.round(Math.random() * (max4 - min4) + min4);
if (value9 == 0){
    numOf0++;
}else if(value9 == 1){
    numOf1++;
}else{
    numOf2++;
}

// if (value6 || value7 || value8 || value9 == 0){
//     numOf0++;
// }else if(value6 || value7 || value8 || value9 == 1){
//     numOf1++;
// }else{
//     numOf2++;
// }

console.log("Number of 0: " + numOf0);
console.log("Number of 1: " + numOf1);
console.log("Number of 2: " + numOf2);

console.log("6 uzduotis");

let max5 = 10;
let min5 = -10;

let result10_0 = " ";
let result10_01= " ";
let result10_02= " ";

let result10_1= " ";
let result11_1= " "; 
let result12_1= " ";

let result10_2= " ";
let result11_2= " "; 
let result12_2= " ";

let value10 = Math.round(Math.random() * (max5 - min5) + min5);
if(value10 < 0){
    result10_1 = value10;
}else if (value10 > 0){
    result10_2 = value10;
}else{
    result10_0 = value10;
}
let value11 = Math.round(Math.random() * (max5 - min5) + min5);
if(value11 < 0){
    result11_1 = value11;
}else if(value11 > 0){
    result11_2 = value11;
}else{
    result10_01 = value11;
}
let value12 = Math.round(Math.random() * (max5 - min5) + min5);
if(value12 < 0){
    result12_1 = value12;
}else if(value12 > 0){
    result12_2 = value12;
}else{
    result10_02 = value11;
}

console.log("[ " + result10_1 + " " + result11_1 + " "+ result12_1 + " ]");
console.log("( " + result10_0 + " "+ result10_01 + " "+ result10_02 +" )");
console.log("{ " + result10_2 + " "+ result11_2 + " "+ result12_2 + " }");

console.log("7 uzduotis");

let max6 = 3000;
let min6 = 5;
let canddlePrice = 1;
let price;

let numOfCanddle = Math.round(Math.random() * (max6 - min6) + min6);
price = canddlePrice * numOfCanddle;
if (numOfCanddle > 1000 && numOfCanddle <= 3000){
    price -= price * 0.03;
}else if(numOfCanddle > 3000){
    price -= price * 0.04;
} 

console.log("Number of canddles " + numOfCanddle + " price " + price + " eur.");

console.log("8 uzduotis");

let max7 = 100;
let min7 = 0;
let average1;
let average2;

let value13_2 = 0;
let value14_2 = 0;
let value15_2 = 0;

let value13 = Math.round(Math.random() * (max7 - min7) + min7);
let value14 = Math.round(Math.random() * (max7 - min7) + min7);
let value15 = Math.round(Math.random() * (max7 - min7) + min7);

average1 = (value13 + value14 + value15) / 3;
if(value13 > 10 && value13 < 90){
    value13_2 = value13;
} else if(value14 > 10 && value14 < 90){
    value14_2 = value14;
}else if(value15 > 10 && value15 < 90){
    value15_2 = value15;
}
average2 = (value13_2 + value14_2 + value15_2) / 3;
console.log("Average of 3 numbers: " + Math.round(average1));
console.log("Average of 3 numbers( if 10 < number < 90): " + Math.round(average2));
console.log("9 uzduotis");

let hour = 23;
// cia saugosiu nauja valandu reiksme
let new_hour;

let minut = 59;

// minut + new_minut
let minut2;
// cia saugosiu nauja minuciu reiksme
let new_minut;

let sec = 59;
let new_sec;

let max8 = 300;
let min8 = 0;

let randomSec = Math.round(Math.random() * (max8 - min8) + min8);
// cia saugosiu sekundziu likuti
let randomSec2 = 0;

// Gauname minuciu skaiciu
new_minut = Math.floor(randomSec / 60);
minut2 = minut + new_minut;
// gauname sekundziu likuti
randomSec2 = randomSec - new_minut * 60;

if (randomSec >= 60){
    new_sec = Math.round((randomSec2 + sec) * 100) / 100;
    if(new_sec >= 60){
        new_sec -= 60;
        minut2++;
        if(minut2 >= 60){
            minut2 -= 60;
            if(hour == 23){
                new_hour = "00";
            }
            else{
                new_hour = hour+1;
            }
        }
    }
}else{
    new_sec = Math.round((randomSec2 + sec) * 100) / 100;
    if(new_sec >= 60){
        new_sec -= 60;
        minut2++;
        if(minut2 >= 60){
            minut2 -= 60;
            if(hour == 23){
                new_hour = "00";
            }
            else{
                new_hour = hour+1;
            }
        }
    }
}

console.log("Random sec: " + randomSec);
console.log("Clock " + hour + ":" + minut + ":" + sec);

console.log("New Clock " + new_hour + ":" + minut2 + ":" + Math.round(new_sec * 100) / 100);


console.log("10 uzduotis");

let mins = "0";
mins += "46";
console.log(mins.substring(mins.length - 2));