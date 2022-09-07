//funciones

$(function (){
    $('[data-toggle="tooltip"]') .tooltip()
})

function correo(e){
    e.preventDefault();

    let name = document.querySelector('#Nombre').value;
    let jop = document.querySelector('#Empresa').value;
    let mail = document.querySelector('#email').value;

    console.log("El usuario: " + name + " de la empresa " + jop + " solicito recibir CV por correo electronico.\nSu correo es: " + mail);

    alert("En tu correo encontraras una copia del Cv en PDF.");

}

function developer(){

    d = 1;

    //creacion de etiquetas
    const form = document.createElement('form');
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');
    const list1 = document.createElement('li');
    const list2 = document.createElement('li');
    const list3 = document.createElement('li');
    const list4 = document.createElement('li');
    const list5 = document.createElement('li');
    const list6 = document.createElement('li');
    const list7 = document.createElement('li');
    const list8 = document.createElement('li');
    const list9 = document.createElement('li');
    const list10 = document.createElement('li');
    const list11 = document.createElement('li');
    const list12 = document.createElement('li');
    const list13 = document.createElement('li');
    const p = document.createElement('p');
    const enlace = document.createElement('a');

    //propiedade de etiquetas
    form.classList.add('mb-2');
    h2.className = "h2";
    div.id = "DOM";
    h3.classList = "h5";
    enlace.className = "enlace";
    enlace.id = "enlace";
    enlace.setAttribute('href','https://github.com/Dannymx29');
    enlace.textContent = 'Mas información.';
    
    //contenido para html
    const text_h2 = document.createTextNode('Developer');
    const text_h3 = document.createTextNode('Cursos Certificados por Platzi');
    const text_list1 = document.createTextNode('1.- Diploma Prework Windows');
    const text_list2 = document.createTextNode('2.- Diploma Frontend Developer');
    const text_list3 = document.createTextNode('3.- Diploma Frontend Developer Practico');
    const text_list4 = document.createTextNode('4.- Diploma JavaScript Basico');
    const text_list5 = document.createTextNode('5.- Diploma JavaScript Practico');
    const text_list6 = document.createTextNode('6.- Diploma Bootstrap 4');
    const text_list7 = document.createTextNode('7.- Diploma Git y Github');
    const text_list8 = document.createTextNode('8.- Diploma Introduccion a Backend');
    const text_list9 = document.createTextNode('9.- Diploma Fundamentos de Bases de Datos');
    const text_list10 = document.createTextNode('10.- Diploma PHP Basico');
    const text_list11 = document.createTextNode('11.- Diploma PHP Arreglos, Funciones y Estructuras de Control');
    const text_list12 = document.createTextNode('12.- Diploma PHP Practico');
    const text_list13 = document.createTextNode('13.- Diploma PHP con HTML');
    const text_p = document.createTextNode('Esta seccion se esta desarrollando por medio de la manipulacion del DOM con JavaScript. Una razon por la que decidi volverme desarrollador es para ayudar a los usuarios a que pueda tener mas facil el acceso a la informacion que necesitan mediente el desarrollo web.');

    //asignacion de contenido
    h2.appendChild(text_h2);
    h3.appendChild(text_h3);
    p.appendChild(text_p);
    list1.appendChild(text_list1);
    list2.appendChild(text_list2);
    list3.appendChild(text_list3);
    list4.appendChild(text_list4);
    list5.appendChild(text_list5);
    list6.appendChild(text_list6);
    list7.appendChild(text_list7);
    list8.appendChild(text_list8);
    list9.appendChild(text_list9);
    list10.appendChild(text_list10);
    list11.appendChild(text_list11);
    list12.appendChild(text_list12);
    list13.appendChild(text_list13);
    
    //maquetando seccion
    padre.appendChild(form);
    form.appendChild(h2);
    form.appendChild(div);
    div.appendChild(h3);
    div.appendChild(ul);
    ul.appendChild(list1);
    ul.appendChild(list2);
    ul.appendChild(list3);
    ul.appendChild(list4);
    ul.appendChild(list5);
    ul.appendChild(list6);
    ul.appendChild(list7);
    ul.appendChild(list8);
    ul.appendChild(list9);
    ul.appendChild(list10);
    ul.appendChild(list11);
    ul.appendChild(list12);
    ul.appendChild(list13);
    div.appendChild(p);
    div.appendChild(enlace);

    if(d = 1){
        in2a.setAttribute('onclick', '');
    }
    }

    //Manipulacion del DOM

//variables

let d = 0;

//etiquetas html referencias ha HTML
const padre = document.getElementById('developer');
const checkbox = document.getElementById('checkbox');

const form = document.createElement('form');
const divCon = document.createElement('div');
const divR = document.createElement('div');
const divC = document.createElement('div');
const divC2 = document.createElement('div');
const h1 = document.createElement('h1');
const in1a = document.createElement('input');
const in1b = document.createElement('input');
const in1c = document.createElement('input');
const in2a = document.createElement('input');
const in2b = document.createElement('input');
const label = document.createElement('label');
const in3a = document.createElement('input');

form.id = "CV";
divCon.className = "container";
divR.className = "row";
divC.className = "offset-1 col-sm-5 mb-3";
divC2.className = "col-sm-5 mb-3";
in1a.id = "Nombre";
in1a.type = "text";
in1a.classList = "form-control mb-1";
in1a.setAttribute('placeholder', 'Ingresa tu Nombre');
in1a.required = true;
in1b.id = "Empresa";
in1b.type = "text";
in1b.classList = "form-control mb-1";
in1b.setAttribute('placeholder', 'Ingresa tu empresa');
in1b.required = true;
in1c.id = "email";
in1c.setAttribute('type', 'email');
in1c.classList = "form-control";
in1c.setAttribute('placeholder', 'ingresa tu email');
in1c.required = true;
in2a.id = "in2a";
in2a.value = "Entrar";
in2a.className = "offset-3 col-sm-6 mb-1 btn btn-light";
in2a.type = "button";
in2a.setAttribute('onclick', 'developer()');
in2b.id = "in2b";
in2b.value = "ENVIAR";
in2b.className = "offset-3 col-sm-6 mb-1 btn btn-light";
in2b.type = "submit";
in2b.addEventListener('click', correo);//es igual a in2a.setAttribute('onclick', 'developer()');
label.className = "col-sm-12 mt-2";
in3a.id = "checkbox";
in3a.type = "checkbox";
in3a.addEventListener('change', e => {
    if (e.target.checked) {
        console.log('Su solicitud es aceptada');
    }else{
        console.log('acepte la solicitud');
    }
})
in3a.required = true;


const text_label = document.createTextNode(' Recibir Cv por correo.');

h1.textContent = 'Bienvenido a mi Cv.';


label.appendChild(in3a);
label.appendChild(text_label);


padre.appendChild(form);
form.appendChild(h1);
form.appendChild(divCon);
divCon.appendChild(divR);
divR.appendChild(divC);
divR.appendChild(divC2);
divC.appendChild(in1a);
divC.appendChild(in1b);
divC.appendChild(in1c);
divC2.appendChild(in2a);
divC2.appendChild(in2b);
divC2.appendChild(label);


const nombre = document.querySelector('#Nombre');
const empresa = document.querySelector('#Empresa');
const email = document.querySelector('#email');
