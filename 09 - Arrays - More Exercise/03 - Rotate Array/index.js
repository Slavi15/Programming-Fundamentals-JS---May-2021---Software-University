function rotateArray(arr) {
    const rotationCount = arr.pop();

    for(let i = 0; i < rotationCount; i++) {
        let popped = arr.pop();
        arr.unshift(popped);
    }

    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);