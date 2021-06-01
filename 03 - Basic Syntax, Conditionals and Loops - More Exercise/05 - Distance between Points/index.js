function distanceBetweenPoints(x1, y1, x2, y2) {
    let distanceX = Math.abs(x1 - x2);
    let distanceY = Math.abs(y1 - y2);

    let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    console.log(distance);
}

distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);