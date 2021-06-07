function coneFunction(radius, height) {
    const PI = Math.PI;
    let slant = Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2));

    let volume = (PI * Math.pow(radius, 2) * height) / 3;
    let area = PI * radius * (slant + radius);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

coneFunction(3, 5);
coneFunction(3.3, 7.8);