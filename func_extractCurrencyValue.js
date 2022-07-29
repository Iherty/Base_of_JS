//Выделить число

function extractCurrencyValue (str) {

    let start;

        for (let i = 0; i < str.length; i++) {
           if (isFinite(+str[i])) {
             start = i;
             break;
            };
        };

    let result = str.slice(start);
    return parseInt(result);


    
}

console.log(extractCurrencyValue('$a20'));