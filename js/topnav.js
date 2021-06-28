"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
    
    let page = "portada";
    
    loadContent();
    
    document.querySelector("#portada").addEventListener("click", function() {
        loadContent("portada");
    });
    
    async function loadContent(event) {
        //event.preventDefault();
        try {
            let response = await fetch(`${page}.html`)
            if (response.ok) {
                let content = await response.text();
            } else {
                console.log("Status de respuesta inválido");
            }
        } catch(e) {
            console.log(e);
        }
    }

    document.querySelector("#topNav").addEventListener("click", function() {
        document.querySelector("nav").classList.toggle("visible");
    });
});
