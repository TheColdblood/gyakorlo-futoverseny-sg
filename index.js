import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

// 1. feladat
function letrehozTablazat(lista) {
    let txt = "<table>";
    for (let index = 0; index < lista.length; index++) {
        txt += `
            <tr>
                <td>${lista[index].nev}</td>
                <td>${lista[index].nemzetiseg}</td>
                <td>${lista[index].versenySzam}</td>
            </tr>
        
        `
    }
    txt += "</table>";
    return txt;
}

const tablaELEM = document.getElementById("feladat_1");
tablaELEM.innerHTML = letrehozTablazat(FUTOK);

// 2. feladat
function osszesit(lista) {
    let felmaraton = 0;
    let maraton = 0;
    let tizkm = 0;

    let txt = "";
    for (let index = 0; index < lista.length; index++) {
        if (lista[index].versenySzam == "félmaraton"){
                felmaraton += 1;
        } else if (lista[index].versenySzam == "maraton"){
                maraton += 1;
        } else if (lista[index].versenySzam == "10 km"){
                tizkm += 1;
        }
    }
    txt += `
            <h3>Összesítő</h3>
            <br>
            <p>Félmaraton: ${felmaraton} db</p>
            <p>Maraton: ${maraton} db</p>
            <p>10 km: ${tizkm} db</p>
            `;
    return txt;
}

const osszesitELEM = document.getElementById("feladat_2");
osszesitELEM.innerHTML = osszesit(FUTOK);


// 3. feladat
function befutott(sor, adatok) {

    
}

// 4. feladat
function torolEsemeny() {

}

// 5. feladat
function ellenoriz(){
  
}