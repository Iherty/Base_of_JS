//Случайное число от мин до макс

function randomInteger (min, max) {
    //(0 - 1)
    let mn = Math.random() * (max - min) + min;
    console.log(mn.toFixed(0));
}

randomInteger(15, 18);