let boton_calcular = document.getElementById("cal")
boton_calcular.addEventListener("click" , intereses)

let r1 = document.getElementById("mensaje")
let r2 = document.getElementById("mensaje2")

function intereses(){

    let cantidad = parseFloat (document.getElementById("usuario_cantidad").value)
    let cuotas = parseFloat (document.getElementById("usuario_cuotas").value)
    let int = cantidad * 0.20;
    
    if(cuotas == 3){
        let total = parseInt (cantidad) + parseInt (int);
        let max = total / cuotas;
        r1.innerHTML= `El total a pagar por mes es: ${max}`
        r2.innerText= `El total a pagar todo es: ${total}`
        
    }
    else if(cuotas == 9){
        let total = parseInt (cantidad) + parseInt (int);
        let max = total / cuotas;
        r1.innerHTML= `El total a pagar por mes es: ${max}`
        r2.innerText= `El total a pagar todo es: ${total}`

    }
    else(cuotas == 12);{
        let total = parseInt (cantidad) + parseInt (int);
        let max = total / cuotas;
        r1.innerHTML= `El total a pagar por mes es: ${max}`
        r2.innerText= `El total a pagar todo es: ${total}`
    }
}

