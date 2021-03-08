function writeCard(name,occasion) {
    return `Thank you, ${name}, for the wonderful ${occasion} gift!`
} 

function writeCards(names,occasion) {
    let r = [];
    for (let i = 0; i < names.length; i++) {
        r.push(writeCard(names[i],occasion));
    }
    return r;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n--);
    }
}