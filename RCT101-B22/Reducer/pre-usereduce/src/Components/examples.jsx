const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue =0;

const reducer = ( prevValue, CurrValue ) => {
    return prevValue + CurrValue;
}

const sumWithInitial = array1.reduce(
    reducer,
    initialValue
);

console.log(sumWithInitial);
// expected output: 10;