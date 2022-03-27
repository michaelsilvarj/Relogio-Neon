let d = new Date ();
let h = d.getHours(); 
let m = d.getMinutes();
let s = d.getSeconds();

let tempo = h + ':' + m + ':' + s;

setInterval(1000);
console.log(tempo);