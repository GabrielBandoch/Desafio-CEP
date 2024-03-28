const array = [5, 3, 4, 3, 5, 5, 3];

for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
            count++;
        }
    }
    if (count === 1) {
        console.log(array[i]);
        break;
    }
}
