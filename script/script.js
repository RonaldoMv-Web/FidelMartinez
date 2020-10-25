const enlaces = document.getElementsByClassName("enlaces")[0];
const botonMenu = document.getElementsByClassName("botonMenu")[0];
const botonMenuImg = document.getElementById("botonMenu");
var menuLateralMostrado = false;
const enlacesSombra = document.getElementsByClassName("enlacesSombra")[0];

const palancaMenu = () => {
    enlaces.classList.toggle("enlacesSeleccion");
    enlaces.style.transition = "transform 0.5s ease-in-out";
    enlacesSombra.classList.toggle("enlacesSeleccionSombra");
    enlacesSombra.style.transition = "transform 0.5s ease-in-out";
}

botonMenu.addEventListener("click", function(){
    palancaMenu();
    (document.querySelector(".enlaces.enlacesSeleccion")) ? menuLateralMostrado = true : menuLateralMostrado = false;
})

window.addEventListener("click", function(e) {
    if(menuLateralMostrado){
        if(e.target !== botonMenuImg) {
            palancaMenu();
            menuLateralMostrado = false;
        }
    }
})

window.addEventListener("resize", function() {
    if(screen.width > 800) {
        if(menuLateralMostrado) {
            palancaMenu();
            enlaces.style.transition = "none";
            menuLateralMostrado = false;
            enlacesSombra.style.transition = "none";
        }
    }
})