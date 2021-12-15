let count = 4;

if (count == 4) {
    console.log('count = 4');
}

count = 10;

if (count == 10) {
    console.log('count is 10');
} else {
    console.log('count is not 10');
}

if (count > 4) {
    console.log('count is greater than 4');
} else if (count == 4) {
    console.log('count is equal to 4');
} else if (count < 4) {
    console.log('count is less than 4');
}

let livingstonNames = '1stChoice';
switch (livingstonNames) {
    case '1stChoice':
        console.log('Ryan');
        console.log('Graham');
        console.log('Ian');
        break;
    case '2ndChoice':
        console.log('Lee');
        console.log('Quin');
        console.log('Scott');
        break;
    
    default:
        console.log('Paula and Greg');
        break;

}