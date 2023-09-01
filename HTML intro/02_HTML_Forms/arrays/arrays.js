let quote = ["I","am","your","friend"];
{console.log(quote)}
{console.log(quote[2]);}

quote.pop("friend");
quote.push("father");
console.log(quote);

quote.unshift("Luke");
console.log(quote);

let erroneousWord = "Luke";
let lukeIsHere = quote.includes(erroneousWord);

let lukeIsAt = quote.indexOf(erroneousWord);

if (lukeIsHere) {
    lukeIsAt = quote.indexOf(erroneousWord);
    quote[lukeIsAt] = "No"
}
console.log

let output =""

for (let i = 0, j = quote.length; i < j; i++) {
    if (i === j - 1) {
        output += quote[i] + '!';
    } else if (quote[i] === 'No') {
        output += quote[i] + ', ';
    } else {
        output += quote[i] + ' '
    }
}
console.log(output)