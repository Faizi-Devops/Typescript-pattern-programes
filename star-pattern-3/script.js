var i;
var j;
var k;
var l;
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 5 - i; j++) {
        document.write("&nbsp;&nbsp");
    }
    for (k = 1; k <= i; k++) {
        document.write("*");
    }
    for (l = 2; l <= i; l++) {
        document.write("*");
    }
    document.write("<br>");
}
