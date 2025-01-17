

//OBJETIVO: Capturar los datos de un formulario 

//1. por cada input, select, textarea del formulario se crea una variable 
//2 por cada variable debo utilizar el DOM para asociar 
//el html con javascript 

let nombreMedicamento=document.getElementById("nombremedicamento")
let presentacionMedicamento=document.getElementById("presentacionmedicamento")
let dosisMedicamento=document.getElementById("dosismedicamento")
let laboratorioMedicamento=document.getElementById("laboratoriomedicamento")
let fechaCaducidadMedicamento=document.getElementById("caducidadmedicamento")
let contraIndicacionesMedicamento=document.getElementById("indicacionesmedicamento")
let registroMedicamento=document.getElementById("registromedicamento")
let tieneCopagoMedicamento=document.getElementById("copagomedicamento")


//3. Crear una variable para asociarla al id del bton que tengo en html
let botonRegistroEnfermedad = document.getElementById("buttonregistromedicamento")

//4. Detectamos acciones o eventos en el boton
botonRegistromedicamento.addEventListener("click",function(evento){
    evento.preventDefault()
    // 5. Se crea un JSON que captura los datos del formulario

    let datosFormularioMedicamento ={
        nombre:nombreEnfermedad.value,
        sintomas:sintomasEnfermedad.value,
        clasificacion:clasificacionEnfermedad.value,
        grado:gradoEnfermedad.value,
        probabilidadVida: probabilidadDeVidaEnfermedad.value
    }

    //6. Se envían los datos al back

    console.log(datosFormularioMedicamento)

    Swal.fire({
        title: "¡Registro Exitoso!",
        text: "Los datos han sido registrados correctamente.",
        icon: "success"
      });
})