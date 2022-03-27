function showtime(){
    var d = new Date ();
    var h = d.getHours().toString().padStart(2,0); // mostra a hora formatada
    var m = d.getMinutes().toString().padStart(2,0); 
    var s = d.getSeconds().toString().padStart(2,0); 

    var tempo = h + '' + ':' + '' + m + '' + ':' + s;
    document.getElementById('relogio').innerHTML = tempo;
    
}

showtime();
let time = setInterval(showtime,1000);// função + tempo em milisegundos


function cumprimentar (){
   let d2= new Date ();
   let h2 = d2.getHours(); // mostra a hora formatada
   
        if (h2 == 00 || h2 < 12) {
            
            var br = document.createElement("br");
            var foo = document.getElementById("espaco");
            foo.appendChild(br)
            document.getElementById("cumprimento").innerHTML= 'Bom dia !' ;
            
            console.log('dia');
            
            
           
        } 
}

cumprimentar();
