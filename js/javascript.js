
function intereses(){

    let cantidad = document.getElementById("usuario_cantidad").value
    let cuotas = document.getElementById("usuario_cuotas").value
    let int = cantidad * 0.20;
    let total = parseInt (cantidad) + parseInt (int);
    
    
    
    if(cuotas == 3){
        let max = total / cuotas;
        return max
    }
    else if(cuotas == 9){
        let max = total / cuotas;
        console.log("eligio pagar en 9 cuotas, asi que al final de cada mes debera pagar:" , max )
        return max
    }
    else(cuotas == 12);{
        let max = total / cuotas;
        console.log("eligio pagar en 12 cuotas, asi que al final de cada mes debera pagar:" , max )
        return max
    }
}
let boton_calcular = document.getElementById("cal")
boton_calcular.addEventListener("click" , intereses)
