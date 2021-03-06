// Object.create

/*
var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
*/

// Primitives vs objects
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/

// Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var heartRate = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(heartRate);
*/

// Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', hello designer');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', hello teacher');
        }
    } else {
        return function (name) {
            console.log(name + ', who are you?');
        }
    }
}

var teacher = interviewQuestion('teacher');
var john = teacher('john');

var designer = interviewQuestion('designer');
var jane = designer('jane');

var none = interviewQuestion('none');
var tom = none('tom');

console.log(john);
console.log(jane);
console.log(tom);
*/

// Immediately Invoked Function Expressions (IIFE)
/*
function game () {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function () {
    var score = Math.random() * 10;
    console.log(score);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score + goodLuck);
})(5);
*/

// Closure
/*
function retirement(retirementAge) {
    return function (yearOfBirth) {
        var a = ' years until retirement';
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job) {
    var greeting = ', hello ';
    return function (name) {
            console.log(name + greeting + job);
        }
}

var teacher = interviewQuestion('teacher');
var designer = interviewQuestion('designer');
teacher('John');
designer('Jane');
*/

// Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentleman! I\'m ' +
                this.name + ', I\'m a ' +
                this.job + ' and I\'m ' +
                this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +
                this.name + ', I\'m a ' +
                this.job + ' and I\'m ' +
                this.age + ' years old. Have a nice ' +
                timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    job: 'designer',
    age: 37
};

john.presentation('formal', 'morning');
john.presentation('friendly', 'evening');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullUS = arrayCalc(ages, isFullAge.bind(this, 18));
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullUS);
console.log(fullJapan);