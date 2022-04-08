let count = 1;
const array = [];
while (count <= 5) {
    const element = (Math.round(Math.random() * 10));
    count++;
    array.push(element);
}



console.log(array);
console.log(array.map(array => array ** 2));