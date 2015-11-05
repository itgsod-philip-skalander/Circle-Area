function calculate_area(radius){
    var radius = prompt("Please enter a valid radius");
    var area = (radius*radius)*Math.PI;
    return area
}

console.log(calculate_area());