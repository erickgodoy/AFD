
let getCadAut1= function(){
    let cadena=document.getElementById("texto1").value;
    let num_elem=cadena.length;
    let inicio=0;
    let finalizar=1;
    let actual=inicio;

    let fin=false;

    let i=0;

  let traza="";

    document.getElementById("traza1").innerHTML = '<p>Traza del Automata: </p>';

    while(fin==false){
        if(i>num_elem){
        fin=true;
        break;
        }
        if(actual==0){
                if(cadena[i]==1){
                  traza+=('q'+actual+' ->'+cadena[i]+' = q');
                      actual=0;
                     traza+=(actual+'</br>');
                    }
                 if(cadena[i]==0){
                    traza+=('q'+actual+' ->'+cadena[i]+' = q');
                    actual=2;
                    traza+=(actual+'</br>');
                }
                i++;
                continue;

            }
        if(actual==2){
            if(cadena[i]==1){
                traza+=('q'+actual+' ->'+cadena[i]+' = q');
                actual=1;
                traza+=(actual+'</br>');
                }
            if(cadena[i]==0){
                traza+=('q'+actual+' ->'+cadena[i]+' = q');
                actual=2;
                traza+=(actual+'</br>');
            }
            i++;
            continue;

        }
        if(actual==1){
            if(cadena[i]==1){
                traza+=('q'+actual+' ->'+cadena[i]+' = q');
                actual=1;
                traza+=(actual+'</br>');
        }
            if(cadena[i]==0){
                traza+=('q'+actual+' ->'+cadena[i]+' = q');
                actual=1;
                traza+=(actual+'</br>');
              }
            i++;
            continue;
        }
    }

    if(actual==finalizar){
        document.getElementById("trazaAut1").innerHTML=traza;
        document.getElementById("verificar1").innerHTML = '<center><hr><font  color="green">LA CADENA ES CORRECTA</font></center>';   }
    else{
        document.getElementById("trazaAut1").innerHTML=traza;
        document.getElementById("verificar1").innerHTML = '<center><hr><font color="red">LA CADENA NO ES CORRECTA </font></center>';  }

}

let getCadAut2= function(){
    let cadena=document.getElementById("texto2").value;
    let num_elem=cadena.length;
    let inicio=0;
    let finalizar=0;
    let actual=inicio;

    let fin=false;

    let traza="";

    document.getElementById("traza2").innerHTML = '<p>Traza del Automata: </p> <br />';

    let i=0;

    while(fin==false){
        if(i>num_elem){
        fin=true;
        break;
        }
        if(actual==0){
            if(cadena[i]==1){
                traza+=('q'+actual+' ->'+cadena[i]+' = q');
                actual=1;
                traza+=(actual+'</br>');
            }
            if(cadena[i]==0){
                traza+=('q'+actual+' ->'+cadena[i]+' = q');
                actual=2;
                traza+=(actual+'</br>');
            }
            i++;
            continue;

            }
        if(actual==1){
            if(cadena[i]==1){
                traza+=('q'+actual+' ->'+cadena[i]+' = q');
                actual=0;
                traza+=(actual+'</br>');
            }
            if(cadena[i]==0){
                traza+=('q'+actual+' ->'+cadena[i]+' = q');
                actual=3;
                traza+=(actual+'</br>');
            }
            i++;
            continue;

        }
        if(actual==2){
            if(cadena[i]==1){
                traza+=('q'+actual+' ->'+cadena[i]+' = q');
                actual=3;
                traza+=(actual+'</br>');
            }
            if(cadena[i]==0){
                traza+=('q'+actual+' ->'+cadena[i]+' = q');
                actual=0;
                traza+=(actual+'</br>');
            }
            i++;
            continue;
        }
        if(actual==3){
            if(cadena[i]==1){
                traza+=('q'+actual+' ->'+cadena[i]+' = q');
                actual=2;
                traza+=(actual+'</br>');
            }
            if(cadena[i]==0){
                traza+=('q'+actual+' ->'+cadena[i]+' = q');
                actual=1;
                traza+=(actual+'</br>');
            }
            i++;
             continue;
        }

    }


    if(actual==finalizar){
        document.getElementById("trazaAut2").innerHTML=traza;
        document.getElementById("verificar2").innerHTML = '<center><hr><font  color="green">LA CADENA ES CORRECTA</font></center>';  }
    else{
        document.getElementById("trazaAut2").innerHTML=traza;
        document.getElementById("verificar2").innerHTML = '<center><hr><font color="red">LA CADENA NO ES CORRECTA </font></center>';  }


}
let getCadAut3= function(){
    let cadena=document.getElementById("texto3").value;
    let num_elem=cadena.length;
    let inicio=0;
    let finalizar=3;
    let actual=inicio;

    let fin=false;
    let traza="";

    let i=0;
    while(fin==false){

        if(i>num_elem){
        fin=true;
        break;
        }
        if(actual==0){
            if(cadena[i]=='a'){
               traza+=('q'+actual+' ->'+cadena[i]+' = q');
               actual=2;
               traza+=(actual+'</br>');
               }
            if(cadena[i]=='b'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=1;
              traza+=(actual+'</br>');
             }
            i++;
            continue;

            }
        if(actual==1){
            if(cadena[i]=='a'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=1;
              traza+=(actual+'</br>');
             }
            if(cadena[i]=='b'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=1;
              traza+=(actual+'</br>');
           }
            i++;
            continue;

        }
        if(actual==2){
            if(cadena[i]=='a'){
                traza+=('q'+actual+' ->'+cadena[i]+' = q');
                actual=3;
                traza+=(actual+'</br>');
                  }
            if(cadena[i]=='b'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=2;
              traza+=(actual+'</br>');
              }
            i++;
            continue;
        }
        if(actual==3){
            if(cadena[i]=='a'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=3;
              traza+=(actual+'</br>');
            }
            if(cadena[i]=='b'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=2;
              traza+=(actual+'</br>');
            }
            i++;
             continue;
        }


    }

        document.getElementById("traza3").innerHTML = '<p>Traza del Automata: </p> <br />';

        if(actual==finalizar){
            document.getElementById("trazaAut3").innerHTML=traza;
            document.getElementById("verificar3").innerHTML = '<center><hr><font  color="green">LA CADENA ES CORRECTA</font></center>';   }
        else{
            document.getElementById("trazaAut3").innerHTML=traza;
            document.getElementById("verificar3").innerHTML = '<center><hr><font color="red">LA CADENA NO ES CORRECTA </font></center>';  }
}
let getCadAut4= function(){
    let cadena=document.getElementById("texto4").value;
    let num_elem=cadena.length;
    let inicio=0;
    let finalizar=5;
    let actual=inicio;

    let fin=false;

    let traza="";

    let i=0;
    while(fin==false){
        if(i>num_elem){
        fin=true;
        break;
        }
        if(actual==0){
            if(cadena[i]=='a'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=2;
              traza+=(actual+'</br>');
            }
            if(cadena[i]=='b'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=1;
              traza+=(actual+'</br>');
            }
            i++;
            continue;

            }
        if(actual==1){
            if(cadena[i]=='a'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=1;
              traza+=(actual+'</br>');
            }
            if(cadena[i]=='b'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=1;
              traza+=(actual+'</br>');
            }
            i++;
            continue;

        }
        if(actual==2){
            if(cadena[i]=='a'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=3;
              traza+=(actual+'</br>');
            }
            if(cadena[i]=='b'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=2;
              traza+=(actual+'</br>');
            }
            i++;
            continue;
        }
        if(actual==3){
            if(cadena[i]=='a'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=4;
              traza+=(actual+'</br>');
            }
            if(cadena[i]=='b'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=2;
              traza+=(actual+'</br>');
            }
            i++;
             continue;
        }
        if(actual==4){
            if(cadena[i]=='a'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=5;
              traza+=(actual+'</br>');
            }
            if(cadena[i]=='b'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=4;
              traza+=(actual+'</br>');
            }
            i++;
             continue;
        }
        if(actual==5){
            if(cadena[i]=='a'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=5;
              traza+=(actual+'</br>');
            }
            if(cadena[i]=='b'){
              traza+=('q'+actual+' ->'+cadena[i]+' = q');
              actual=4;
              traza+=(actual+'</br>');
            }
            i++;
             continue;
        }
    }

        document.getElementById("traza4").innerHTML = '<p>Traza del Automata: </p> <br />';
            if(actual==finalizar){
                document.getElementById("trazaAut4").innerHTML=traza;
                document.getElementById("verificar4").innerHTML = '<center><hr><font  color="green">LA CADENA ES CORRECTA</font></center>';   }
            else{
                document.getElementById("trazaAut4").innerHTML=traza;
                document.getElementById("verificar4").innerHTML = '<center><hr><font color="red">LA CADENA NO ES CORRECTA </font></center>'; }

}
