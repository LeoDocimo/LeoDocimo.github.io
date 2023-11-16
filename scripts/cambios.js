const btncolor = document.getElementById("btncolor");
const sections = document.querySelectorAll("section");
const elementosH2 = document.querySelectorAll("h2");
const elementosH3 = document.querySelectorAll("h3");
const elementosH4 = document.querySelectorAll("h4");
const elementosP = document.querySelectorAll("p");
const formulario = document.querySelectorAll("form");
const cartas = document.querySelectorAll(".contenedor-estudios .item");
const nav = document.querySelectorAll("nav");
const navlinks = document.querySelectorAll(".nav-item .nav-link");
const iconoBoton = document.getElementById("iconobtn");
const btnmapa = document.getElementById("btnmapa");
const mapa = document.getElementById("mapa");
const footer = document.getElementById("footer");


let = modoOscuro = true

function cambiarColor() {


    nav.forEach(nav => {
        nav.classList.toggle("bg-dark");
        nav.classList.toggle("bg-claro");
    });


    navlinks.forEach(links =>{
        links.classList.toggle("claro");
    })


    sections.forEach(section => {
        section.classList.toggle("oscuro");
        section.classList.toggle("claro");
    });

    
    elementosH2.forEach(h2 =>{
        h2.classList.toggle("colorh2")
    });

    elementosH3.forEach(h3 =>{
        h3.classList.toggle("colorh3")
    })

    elementosH4.forEach(h4 =>{
        h4.classList.toggle("colorh4")
    })

    elementosP.forEach(p =>{
        p.classList.toggle("colorP")
    })

    cartas.forEach(carta =>{
        carta.classList.toggle("oscuro");
        carta.classList.toggle("claro");
    });

    formulario.forEach(form =>{
        form.classList.toggle("oscuro")
        form.classList.toggle("claro");
        
    }

    )

    footer.classList.toggle("claro");
    footer.classList.toggle("oscuro");

    if (modoOscuro) {
        iconoBoton.classList.remove("fa-sun");
        iconoBoton.classList.add("fa-moon");
    } else {
        iconoBoton.classList.remove("fa-moon");
        iconoBoton.classList.add("fa-sun");
    }

    modoOscuro = !modoOscuro;
}

btncolor.addEventListener("click",cambiarColor)

btnmapa.addEventListener("click",()=>{
    mapa.classList.toggle("mostrar");
})






/*if(modoOscuro){
        articleSobrmmi.classList.add("oscuro");
        articleSobrmmi.classList.remove("claro");
        
        ParrafoSobreMi.classList.add("oscuro");
        ParrafoSobreMi.classList.remove("claro");

        tituloSobreMi.classList.add("oscuro");
        tituloSobreMi.classList.remove("claro");
        
    }
    else{
        articleSobrmmi.classList.add("claro");
        articleSobrmmi.classList.remove("oscuro");

        ParrafoSobreMi.classList.remove("oscuro");
        ParrafoSobreMi.classList.add("claro")

        tituloSobreMi.classList.add("claro")
        tituloSobreMi.classList.remove("oscuro");


    }*/