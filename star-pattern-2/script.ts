var i :number;
var j:number;
var k :number;

for(i=1;i<=5;i++){
    for(k=1;k<=5-i;k++){
        document.write("&nbsp;&nbsp")
    }
    
    for(j=1;j<=i;j++){
        document.write("*")
    }
    document.write("<br>")
}