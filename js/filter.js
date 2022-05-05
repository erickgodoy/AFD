const btni = document.getElementById("inicio");
const btn1 = document.getElementById("ex1");
const btn2 = document.getElementById("ex2");
const btn3 = document.getElementById("ex3");
const btn4 = document.getElementById("ex4");

const conti = document.getElementById("c-inicio");
const cont1 = document.getElementById("c-ex1");
const cont2 = document.getElementById("c-ex2");
const cont3 = document.getElementById("c-ex3");
const cont4 = document.getElementById("c-ex4");

btni.onclick = function(){
    conti.style.display = "block";
    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
}

btn1.onclick = function(){
  conti.style.display = "none";
  cont1.style.display = "block";
  cont2.style.display = "none";
  cont3.style.display = "none";
  cont4.style.display = "none";

  document.getElementById("traza1").innerHTML = "";
  document.getElementById("trazaAut1").innerHTML = "";
  document.getElementById("verificar1").innerHTML = "";
  document.getElementById('texto1').value = "";
}

btn2.onclick = function(){
  conti.style.display = "none";
  cont1.style.display = "none";
  cont2.style.display = "block";
  cont3.style.display = "none";
  cont4.style.display = "none";

  document.getElementById("traza2").innerHTML = "";
  document.getElementById("trazaAut2").innerHTML = "";
  document.getElementById("verificar2").innerHTML = "";
  document.getElementById('texto2').value = "";
}

btn3.onclick = function(){
  conti.style.display = "none";
  cont1.style.display = "none";
  cont2.style.display = "none";
  cont3.style.display = "block";
  cont4.style.display = "none";

  document.getElementById("traza3").innerHTML = "";
  document.getElementById("trazaAut3").innerHTML = "";
  document.getElementById("verificar3").innerHTML = "";
  document.getElementById('texto3').value = "";  
}

btn4.onclick = function(){
  conti.style.display = "none";
  cont1.style.display = "none";
  cont2.style.display = "none";
  cont3.style.display = "none";
  cont4.style.display = "block";

  document.getElementById("traza4").innerHTML = "";
  document.getElementById("trazaAut4").innerHTML = "";
  document.getElementById("verificar4").innerHTML = "";
  document.getElementById('texto4').value = "";
}