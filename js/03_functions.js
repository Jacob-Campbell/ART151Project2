function myFunction() {
    console.log('...........');
    console.log('Hello World');
    console.log('...........');

}

myFunction();

let a = myFunction;
a();

function sayMyname(name, secondName) {
    console.log('...........');
    console.log('Hello ' + name);
    console.log('...........');
    console.log('Hello ' + secondName);

}

sayMyname('Graham', 'Second Name');

function calculateTax(amount) {
    let result = amount * 0.0825;
    return result;

}

let tax = calculateTax(100);
console.log(tax);

setTimeout(function() {
    console.log('I waited 2 seconds');
}, 2000);

let counter = 0;
function timeout() {
    setTimeout(function(){
        console.log('counter = ' + counter++);
        timeout();
    }, 2000);
}

// timeout();