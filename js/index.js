$(function (){
    $('[data-toggle="tooltip"]') .tooltip()
})
//Manipulacion del DOM

//arreglo de certificados.
let certificados = [
    '1.- Diploma Prework Windows',
    '2.- Diploma Frontend Developer',
    '3.- Diploma Frontend Developer Practico',
    '4.- Diploma JavaScript Basico',
    '5.- Diploma JavaScript Practico',
    '6.- Diploma Bootstrap 4',
    '7.- Diploma Git y Github',
    '8.- Diploma Introduccion a Backend',
    '9.- Diploma Fundamentos de Bases de Datos',
    '10.- Diploma PHP Basico',
    '11.- Diploma PHP Arreglos, Funciones y Estructuras de Control',
    '12.- Diploma PHP Practico',
    '13.- Diploma PHP con HTML'
];

//etiquetas html
const padre = document.getElementById('developer');

const form = document.createElement('form');
const h1 = document.createElement('h1');
const div = document.createElement('div');
const h2 = document.createElement('h2');
const p = document.createElement('p');
const ul = document.createElement('ul');
const li = document.createElement('li');
const small1 = document.createElement('small');

//referencias ha HTML
const final = document.getElementsByClassName('DOM');


//informacion html
const text_h1 = document.createTextNode('Developer');
const text_h2 = document.createTextNode('Manipulacion del DOM');
const text_p = document.createTextNode('En esta seccion veremos un poco de manipulacion del DOM con JavaScript.');
const text_small = document.createTextNode('Seguimos aprendiendo.');


//propiedade html

padre.appendChild(form);
form.classList.add('mb-2');
form.appendChild(h1);
h1.appendChild(text_h1);
form.appendChild(div);
div.appendChild(h2);
div.classList.add('DOM');
h2.appendChild(text_h2);
div.appendChild(p);
p.appendChild(text_p);
div.appendChild(ul);
ul.appendChild(li);
small1.appendChild(text_small);
padre.insertBefore(small1,final);

//console.log(certificados);
