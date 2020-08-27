function score(x,y) {

    //Use pythagoras theorem to find distance between points
    let points = 0;
    let radius_squared = Math.pow((x - 0), 2) + Math.pow((y - 0), 2);
    let radius = Math.sqrt(radius_squared);

    if (radius > 10){
        points = 0;
    } else if (radius > 5) {
        points = 1;
    } else if (radius > 1) {
        points = 5;
    } else {
        points = 10;
    }
   

    return points;
}