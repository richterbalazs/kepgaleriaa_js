import { KEPEK } from "./adatok.js";

export function htmlOsszeAllit(lista) {
   let txt = "";
   for(let i = 0; i < lista.length; i++){
    txt += `<div class="kep"><img src="${lista[i].kep}" alt="${lista[i].cim}"</div>`;
   }
   console.log(txt)
   return txt;
}

export function kepMegjelenites(tartalom) {

}

