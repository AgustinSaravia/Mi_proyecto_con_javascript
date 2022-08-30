
let arreglo_usuario = []

function validar(){
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    let correo = document.getElementById ("correo")
    let usuario = {"nombre": nombre.value , "apellido": apellido.value , "correo": correo.value}
    
    
    
    let = usuario_json = JSON.stringify(usuario)
    arreglo_usuario.push(usuario_json)
    localStorage.setItem("usuario" , arreglo_usuario)
    
    Swal.fire({
        icon: 'success',
        title: "Registro completado",
        text: "Ahora para pasar a la seccion de prestamos haga click en PRESTAMOS",
        footer: '<a href="html/prestamo.html" >PRESTAMOS</a>',
        color: '#716add',
        backdrop: `rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat`,
        showClass: {
            popup: 'animate__animated animate__backInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
    
    
    
    
}

let boton_registrar = document.getElementById("login")

boton_registrar.addEventListener("click" , validar)


fetch("https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&units=metric&appid=07284271e0f99391f3e0ff7d293ae933") 
    .then(response=> response.json())
    .then(data=>document.getElementById(`tiempo`).innerHTML=`<h2>la temperatura que hay en la ciudad de Buenos Aires es de: ${data.main.temp}</h2>`)