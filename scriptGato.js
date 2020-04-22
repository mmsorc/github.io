function quadroimagens(){
var i = 1;
setInterval(function(){ 
    document.getElementById("gatoB").style.backgroundImage = "url('gatineos/b"+i+".jpg')"; 
    i++;
    if(i>4){i=1;}
}, 2000);
}


var con1=0;
var con2=0;
var con3=0;
var con4=0;
var con5=0;
var con6=0;

function votar(x){
    document.getElementById('votou').classList.remove("hidden");
    var numVoto = x.charAt(x.length-1);
    var y = document.getElementById("voto"+numVoto).alt;
    document.getElementById("nomeFoto").innerText = y;

        console.log(numVoto);
        
        switch (numVoto) {
            case "1":                              
              con1++;
              document.getElementById("c1").innerText = con1; 
              break;
            case "2":
              con2++;
              document.getElementById("c2").innerText = con2;
              break;
            case "3":                              
              con3++;
              document.getElementById("c3").innerText = con3; 
              break;
            case "4":
              con4++;
              document.getElementById("c4").innerText = con4;
              break;
            case "5":                              
              con5++;
              document.getElementById("c5").innerText = con5; 
              break;
            case "6":
              con6++;
              document.getElementById("c6").innerText = con6;
              break;         
                         
          }

          
   
}

function fechar(z){
    document.getElementById(z).classList.add("hidden");
}

