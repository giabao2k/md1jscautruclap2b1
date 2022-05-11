let so = "<table border = '1' width='300' cellspacing='0' cellpadding='20'>";
let i;
let j;

for(i = 1; i < 10; i++){
    so = so + "<tr>"
    for(j = 2; j < 10; j++){
        so = so + "<td>" + j + "X" + i + "=" + i*j +"</td>";    
    }
    so = so + "</tr>"
}
so = so + "</table>";
document.write(so);

