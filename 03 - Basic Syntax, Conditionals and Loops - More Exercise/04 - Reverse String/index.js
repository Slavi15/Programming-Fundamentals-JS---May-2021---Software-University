function reverseString(input) {
    let string = input.toString();
    let reversed = string.split('').reverse().join('');
    console.log(reversed);
}

reverseString('Hello');
reverseString('SoftUni');
reverseString(1234);