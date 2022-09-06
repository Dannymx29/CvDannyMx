//funciones
$(function (){
    $('[data-toggle="tooltip"]') .tooltip()
})

let d = 0;
//Manipulacion del DOM

//etiquetas html referencias ha HTML
const padre = document.getElementById('developer');

const form = document.createElement('form');
const divCon = document.createElement('div');
const divR = document.createElement('div');
const divC = document.createElement('div');
const h2 = document.createElement('h2');
const in1a = document.createElement('input');
const in1b = document.createElement('input');
const in1c = document.createElement('input');
const in2 = document.createElement('input');

padre.appendChild(form);
form.appendChild(h2);
form.appendChild(divCon);
divCon.appendChild(divR);
divR.appendChild(divC);
divC.appendChild(in1a);
divC.appendChild(in1b);
divC.appendChild(in1c);
divR.appendChild(in2);

divCon.className = "container";
divR.className = "row";
divC.className = "offset-1 col-sm-5 mb-3";
h2.textContent = 'Bienvenido a mi Cv.';
in1a.id = "Nombre";
in1a.type = "text";
in1a.classList = "form-control";
in1a.setAttribute('placeholder', 'Ingresa tu Nombre');
in1a.required;
in1b.id = "Empresa";
in1b.type = "text";
in1b.classList = "form-control";
in1b.setAttribute('placeholder', 'Ingresa tu empresa');
in1b.required;
in1c.id = "email";
in1c.setAttribute('type', 'email');
in1c.classList = "form-control";
in1c.setAttribute('placeholder', 'ingresa tu email');
in1c.required;
in2.id = "in2";
in2.value = "Entrar";
in2.className = "h-50 mt-auto mb-auto col-sm-5 btn btn-light";
in2.type = "button";
in2.setAttribute('onclick', 'msj_uno()');

function msj_uno(){

    d = 1;

    //creacion de etiquetas
    const form = document.createElement('form');
    const h1 = document.createElement('h1');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const enlace = document.createElement('a');
    const enviar = document.getElementById('in2');
    
    //contenido para html
    const text_h1 = document.createTextNode('Developer');
    const text_h2 = document.createTextNode('Manipulacion del DOM');
    const text_p = document.createTextNode('Esta seccion se esta desarrollando por medio de la manipulacion del DOM con JavaScript.');
    
    //asicnacion
    padre.appendChild(form);
    form.appendChild(h1);
    form.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(enlace);
    
    //contenido
    h1.appendChild(text_h1);
    h2.appendChild(text_h2);
    p.appendChild(text_p);
    
    //propiedade html
    form.classList.add('mb-2');
    div.id = "DOM";
    enlace.className = "enlace";
    enlace.id = "enlace";
    enlace.setAttribute('href','https://github.com/Dannymx29');
    enlace.textContent = 'Mas información.';

    if(d = 1){
        in2.setAttribute('onclick', '');
    }
    alert("En tu correo encontraras una copia del Cv en PDF.");
    }