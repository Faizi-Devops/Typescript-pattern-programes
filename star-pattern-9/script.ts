let i:number;
let j:number;
let k:number;
let l:number;
for(i=5;i>=1;i--){

    for(k=1;k<=5-i;k++)
    {
        document.write("&nbsp;&nbsp")
    }
    for(j=1;j<=i;j++){
        document.write("*")
    }
    for(l=1;l<=i-1; l++)
    {
        document.write("*");

    }
    document.write("<br>")
}