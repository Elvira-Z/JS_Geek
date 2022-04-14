const numbers = {
    key1: {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
    },
    key2: {
        keyin1: 4,
        keyin2: 5,
        keyin3: 6,
    },
}




let result = 0;
for (let key in numbers) {
    result += Object.values(numbers[key]).reduce((a, b) => a + b);
}
console.log(result);