/*function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

function getMaxSubSum (arr) {
    let isPositive = 0;
    let sum = 0;


        for (let num of arr) {
            if (num >= 0) { isPositive += 1;};
        };

                if (isPositive === arr.length) {
                
                    for (let num of arr) {sum += num;};

                } else if (isPositive === 0) { // negative

                    sum = 0; 

                } else {
                    let MaxNum;

                    for (let i = 0; i < arr.length; i++) {
                        if ( arr[i] > arr[i + 1]) {
                            MaxNum = arr[i];
                        } else {MaxNum = arr[i + 1]};
                    }
                     
                }




    return sum;
};

console.log(getMaxSubSum([-1, 2, 3, -9, 11]));*/

// Функция, которая находит максимальное число в массиве
let arr = [2, -1, 2, 3, -9, -8];

function getMaxOfArray (arr) {
    let MaxNum = 0;

        for (let i = 0; i < arr.length; i++) {

            MaxNum > arr[i] ? MaxNum : MaxNum = arr[i];
        }

    return MaxNum;
};

console.log(getMaxOfArray(arr));