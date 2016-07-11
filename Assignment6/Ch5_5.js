var a = prompt("Enter a number");
var b = prompt("Enter another number");
function random() {
if (parseInt(a) < parseInt(b)) {
return Math.floor((Math.random() * b) + a);
}
else if (parseInt(a) > parseInt(b)) {
return Math.floor((Math.random() * a) + b);
}
}
random();