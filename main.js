import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaELEM = document.getElementsByClassName("galeria")
galeriaELEM[0].innerHTML = htmlOsszeAllit(KEPEK)

/* írd bele az összeálíltott html képsorozatot */
let kepTartalom = htmlOsszeAllit(KEPEK);

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagyKEPELEM = document.querySelector(".nagykep img")
/* A .nagykep div megfogása */
const nagyKEPDIVELEM=document.querySelector(".nagykep div")


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
// nagyKEPELEM.addEventListener(onclick, fgv)
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const galeriaKEPEK=document.querySelectorAll(".kep img")
// const kisKEPELEM = document.querySelectorAll(".kep")
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let i = 0; i < galeriaKEPEK.length; i++) {
    galeriaKEPEK[i].addEventListener("click", function (event) {
        nagyKEPELEM.src = event.target.src
        gombIndex = i;
    });
}

/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */




/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
let gombIndex = 0;
const jobbGOMBELEM = document.querySelector(".jobb");
const balGOMBELEM = document.querySelector(".bal");
jobbGOMBELEM.addEventListener("click", function () {
    gombIndex++;
        if(gombIndex>KEPEK.length-1) {
            gombIndex = 0
        }
    nagyKEPELEM.src = KEPEK[gombIndex].kep;
})
balGOMBELEM.addEventListener("click", function () {
    gombIndex++;
    
    nagyKEPELEM.SRC = KEPEK[gombIndex].kep;
})

