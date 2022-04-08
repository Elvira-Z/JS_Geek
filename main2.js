const array = [1, 2, 3, 4, 5, 6, 7];
const newArray = [];

for (let i = 0; i < array.length; i++) {

    if (array[i] !== 4 && array[i] !== 5) {
        newArray.push(array[i]);
    }
}
console.log(newArray);