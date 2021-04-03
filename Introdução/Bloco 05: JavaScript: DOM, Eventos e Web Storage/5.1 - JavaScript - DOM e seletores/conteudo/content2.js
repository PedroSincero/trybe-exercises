// acesse a posição da class, pois são colocados como array
// document.getElementsByClassName('piloto-f1-atual')[0]; 
let pilotosDeF1 = document.getElementsByClassName('piloto-f1-atual');
// para  criar uma mudança para todos você deve criar um for 
for (let i = 0; i < pilotosDeF1.length; i += 1) {
  pilotosDeF1[i].innerText = "Lewis Hamilton"
}