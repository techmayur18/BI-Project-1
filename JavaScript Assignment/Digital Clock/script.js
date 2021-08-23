var span = document.getElementById('clock');
var clock = setInterval(() => {
  	var d = new Date();
  	var s = d.getSeconds();
  	var m = d.getMinutes();
  	var h = d.getHours();
  	span.textContent = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}, 1000);

var div = document.getElementById("timing");
function dt(n) {
    return (n < 10 ? '0' : '') + n;
}
    var date = new Date();
    var dd = dt(date.getDate());
    var mm = dt(date.getMonth()+1);
    var yyyy= date.getFullYear();
    div.textContent =  dd+"/"+mm+"/"+yyyy;

// function startFunction(){
//     setInterval(clock);
// }

    function stopFunction() {
    clearInterval(clock);
}