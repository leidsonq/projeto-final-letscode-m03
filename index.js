import {handleChange} from './event-service.js'

const addInput = document.querySelector("#inputMain");
handleChange(addInput);


const text = "GalO";
const texto = text.toLocaleLowerCase();
const semAcento = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if (semAcento === "galo"){
    console.log(semAcento); // galo
}