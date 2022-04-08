for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(` ${i} это ноль`);
        i++
    }
    let control = i % 2;
    if (control === 0) {
        console.log(` ${i} это четное число`);
    }
    else {
        console.log(` ${i} это нечетное число`);
    }
}