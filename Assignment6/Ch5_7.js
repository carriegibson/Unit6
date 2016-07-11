var numberOfZeros = function (a) {
var result = 0;
for (var i = 0, n = a.length; i < n; i += 1) {
if (a[i] === 0) {
result += 1;
}
}
return result;
}
numberOfZeros([0, 8, 9, 0, 7]);