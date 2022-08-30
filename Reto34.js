
//const matrizPrueba=[1,2,5];
const matrizPrueba=[1,10,4,35,6,5,12,2,7,14];
//const matrizPrueba =[22,3.5, 2,7.2, "pendejo"];
//const matrizPrueba =[22,5,8,,23,23];
//const matrizPrueba="Carajo";

if (esValida(matrizPrueba)){
    const extremos = minMax(matrizPrueba);
    const matrizResultado = [];
    //primer bucle va incrementando el valor minimo de la matriz de uno en uno
    
    for (let  i = extremos[0]; i < extremos[1]; i++){
        var numPresente = false;
        //segundo bucle que comprueba si i es un entero presente en el array de entrada
        // si no lo esta se añade a la matriz resultado
        for (let j=0;j < (matrizPrueba.length);j++){
            if (i === matrizPrueba[j]){ numPresente = true; break;}
        }
        if (numPresente === false) {matrizResultado.push(i);}
    }
document.getElementById("entrada").innerHTML = matrizPrueba;    
document.getElementById("resultado").innerHTML = matrizResultado;
}

function minMax(){
//devuelve el elemento con valor maximo y el minimo de un array numerico
    var matrizMax = matrizPrueba[0];
    var matrizMin = matrizPrueba[0];

    for (let i=0;i<(matrizPrueba.length-1);i++){
        if (matrizMax < matrizPrueba[i+1]) {matrizMax = matrizPrueba[i+1];}
        if (matrizMin > matrizPrueba[i+1]) {matrizMin = matrizPrueba[i+1];}
    }

   
   return [matrizMin ,matrizMax];

   }  


function esValida(matriz){
    //devuelve true si matriz es un array de numeros enteros 
    var resultado = true;
    
    if (Array.isArray(matriz)){
        
        for (let i = 0; i < matriz.length; i++) { 
             if (typeof matriz[i] != "number"||  matriz[i] - Math.floor(matriz[i]) != 0 ) {
              window.alert(matriz [i] + " no es un numero entero; introduce una matriz formada por numeros enteros no repetidos.");
              resultado=false;
              return resultado;
              break; 
              }
          }    
    } else { 
        window.alert (matriz + " no es una matriz; introduce una matriz formada por números enteros"); 
        resultado = false;

        return resultado;}

return noHayRepes(matriz);
} 

function noHayRepes(matriz){
    //devuelve true si no hay elementos repetidos en el array matriz
    var resultado = true;       
        for (let i = 0; i < matriz.length; i++) {
            matrizMenosi = matriz.slice();
            //el metodo slice permite asignar una matriz a otra con distinto nombre sin que permanezcan ligadas
            matrizMenosi.splice(i,1);
            for (let j=0;j<matrizMenosi.length;j++) {
             if ( matriz[i] === matrizMenosi[j]) {
              console.log ("El elemento "+ matriz[i] +" esta repetido; introduce una matriz formada por numeros enteros no repetidos.");
              resultado=false;
              return resultado;
              break; 
              }
            }      
        }
        return resultado;
}
 

