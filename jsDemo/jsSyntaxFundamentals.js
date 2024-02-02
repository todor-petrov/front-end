// 01. Multiply Number By 2 
/*
function mulipyNumberByTwo(muliplierOne) {
    const muliplierTwo = 2;
    let multiply = muliplierOne * muliplierTwo;
    console.log(multiply)
}
*/

// 02. Student Information
/*
function studentInformation(studentName, studentAge, studentGrade) {
    let studentInfo = `Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade.toFixed(2)}`
    console.log(studentInfo)
}
*/

// 03. Excellent Grade
/*
function excellentGrade(grade) {
    if (grade >= 5.50) {
        console.log('Excellent')
    }
    else {
        console.log('Not excellent')
    }
}
*/

// 04. Month Printer
/*
function monthPrinter(number) {
    let months = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    }
    if (number in months) {
        console.log(months[number])
    }
    else {
        console.log('Error!')
    }
}
*/

// 05. Math Operations
/*
function mathOperations(numberOne, numberTwo, operator) {
    let result;
    switch (operator) {
        case '+': result = numberOne + numberTwo; break;
        case '-': result = numberOne - numberTwo; break;
        case '*': result = numberOne * numberTwo; break;
        case '/': result = numberOne / numberTwo; break;
        case '%': result = numberOne % numberTwo; break;
        case '**': result = numberOne ** numberTwo; break;
    }
    console.log(result)
}
*/

// 06. Largest Number
/*
function largestNumber(numberOne, numberTwo, numberThree) {
    let maxNumber = Math.max(numberOne, numberTwo, numberThree);
    console.log(`The largest number is ${maxNumber}.`);
}
*/


// 07. Theatre Promotions
/*
function theatrePromotions(typeOfDay, personAge) {
    let result;
        if (personAge < 0 || 122 < personAge) {
            result = 'Error!';
        } else if (typeOfDay == 'Weekday' && 0 <= personAge && personAge <= 18) {
            result = '12$';
        } else if (typeOfDay == 'Weekend' && 0 <= personAge && personAge <= 18) {
            result = '15$'
        } else if (typeOfDay == 'Holiday' && 0 <= personAge && personAge <= 18) {
            result = '5$';
        } else if (typeOfDay == 'Weekday' && 18 < personAge && personAge <= 64) {
            result = '18$';
        } else if (typeOfDay == 'Weekend' && 18 < personAge && personAge <= 64) {
            result = '20$';
        } else if (typeOfDay == 'Holiday' && 18 < personAge && personAge <= 64) {
            result = '12$';
        } else if (typeOfDay == 'Weekday' && 64 < personAge && personAge <= 122) {
            result = '12$';
        } else if (typeOfDay == 'Weekend' && 64 < personAge && personAge <= 122) {
        result = '15$';
        } else if (typeOfDay == 'Holiday' && 64 < personAge && personAge <= 122) {
        result = '10$';
        }
    console.log(result)
}
*/

// 07. Theatre Promotions
/*
function theatrePromotions(typeOfDay, personAge) {
    let result = ''
    switch(true) {
        case personAge < 0 || 122 < personAge: result = 'Error!'; break;
        case typeOfDay == 'Weekday' && 0 <= personAge && personAge <= 18: result = '12$'; break;
        case typeOfDay == 'Weekend' && 0 <= personAge && personAge <= 18: result = '15$'; break;
        case typeOfDay == 'Holiday' && 0 <= personAge && personAge <= 18: result = '5$'; break;
        case typeOfDay == 'Weekday' && 18 < personAge && personAge <= 64: result = '18$'; break;
        case typeOfDay == 'Weekend' && 18 < personAge && personAge <= 64: result = '20$'; break;
        case typeOfDay == 'Holiday' && 18 < personAge && personAge <= 64: result = '12$'; break;
        case typeOfDay == 'Weekday' && 64 < personAge && personAge <= 122: result = '12$'; break;
        case typeOfDay == 'Weekend' && 64 < personAge && personAge <= 122: result = '15$'; break;
        case typeOfDay == 'Holiday' && 64 < personAge && personAge <= 122: result = '10$'; break;
    }
    console.log(result)
}
*/

// 08. Circle Area
/*
function circleArea(argument) {
    if (typeof argument != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`)
    }
    else {
        let area = Math.PI * argument ** 2
        console.log(area.toFixed(2))
    }
}
*/

// 09. Numbers from 1 to 5
/*
function numbersFromOneToFive() {
    let i = 1
    while (i <= 5) {
    console.log(i)
    i++
    }
}
*/

// 10. Numbers from M to N
/*
function numbersFromMtoN(numberOne, numberTwo) {
    let i
    for (i = numberOne; i >= numberTwo; i--) {
        console.log(i)
    }
}
*/