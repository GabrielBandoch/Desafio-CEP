const string = "arara";
let isPalindrome = true;

for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome); 
