//funciones

$(function (){
    $('[data-toggle="tooltip"]') .tooltip()
})

function correo(e){
    e.preventDefault();
    in2b.classList = 'd-none';

    let name = document.querySelector('#Nombre').value;
    let jop = document.querySelector('#Empresa').value;
    let mail = document.querySelector('#email').value;

    console.log("El usuario: " + name + " de la empresa " + jop + " solicito recibir CV por correo electronico.\nSu correo es: " + mail);

    alert("En tu correo encontraras una copia del Cv en PDF.");
}

function permiso(e){
    if (e.target.checked) {
        in2b.classList = ' d-block btn btn-outline-secondary mb-1 offset-4 col-lg-8 offset-lg-4 col-xl-8 offset-xl-2';
    }else{
        in2b.classList = 'd-none';
    }
}

function developer(){

    d = 1;

    //creacion de etiquetas
    const form = document.createElement('form');
    const divCond = document.createElement('div');
    const divRd = document.createElement('div');
    const divRd2 = document.createElement('div');
    const divRd3 = document.createElement('div');
    const divCd = document.createElement('div');
    const divCd2a = document.createElement('div');
    const divCd2b = document.createElement('div');
    const divCd3 = document.createElement('div');
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
    const clip1 = document.createElement('video');
    const clip1play = document.createElement('button');
    const clip1pausa = document.createElement('button');
    const enlace = document.createElement('a');

    //propiedade de etiquetas
    form.classList.add('mb-2');
    form.id = "Dev";
    divCond.id = "container";
    divCond.className = "container";
    divRd.id = "row";
    divRd.className = "row"
    divRd2.id = "row2";
    divRd2.className = "row mb-2"
    divRd3.id = "row3";
    divRd3.className = "row"
    divCd.className = "col-sm-12"
    divCd2a.className = "col-sm-6"
    divCd2b.className = "col-sm-6"
    divCd3.className = "offset-1 col-sm-9"
    h2.className = "h2";
    div.id = "DOM";
    h3.classList = "h5";
    clip1.id = "clip1";
    clip1.className = "clip1";
    clip1.setAttribute("src", './TierraTecnologica.mp4');
    clip1.controls = true;
    enlace.className = "enlace col-sm-3 mb-1 ml-1";
    enlace.id = "enlace";
    enlace.setAttribute('href','https://github.com/Dannymx29');
    enlace.textContent = 'Mas información.';
    clip1play.id = "clip1play";
    clip1play.type = "button";
    clip1play.textContent = "Play";
    clip1play.className = "col-sm-3 mb-1 ml-1 btn btn-outline-secondary";
    clip1pausa.id = "clip1pausa";
    clip1pausa.type = "button";
    clip1pausa.textContent = "Pausa";
    clip1pausa.className = "col-sm-3 mb-1 ml-1 btn btn-outline-secondary";
    
    
    
    //contenido para html
    const text_h2 = document.createTextNode('Developer');
    const text_h3 = document.createTextNode('Cursos Certificados por Platzi');
    const text_p = document.createTextNode('Esta seccion se esta desarrollando por medio de la manipulacion del DOM con JavaScript. Una de las razon por la que decidi volverme desarrollador, es para ayudar a los usuarios a que pueda tener mas facil el acceso a la informacion que necesitan mediente el desarrollo web. Y para eso hay que seguir trabajando...');
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
    form.appendChild(divCond);
    //titulo
    divCd.appendChild(h2);
    divRd.appendChild(divCd);
    divCond.appendChild(divRd);
    //titulo, parrafo y lista
    divCd2a.appendChild(h3);
    divCd2a.appendChild(p);
    divRd2.appendChild(divCd2a);
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
    divCd2b.appendChild(ul);
    divRd2.appendChild(divCd2b);
    divCond.appendChild(divRd2);
    //enlace, video y botones
    divCd3.appendChild(clip1);
    divCd3.appendChild(enlace);
    divCd3.appendChild(clip1play);
    divCd3.appendChild(clip1pausa);
    divRd3.appendChild(divCd3);
    divCond.appendChild(divRd3);

    if(d = 1){
        in2a.setAttribute('onclick', '');
    } 
}

//Manipulacion del DOM

//variables

let d = 0;

//etiquetas html referencias ha HTML
const padre = document.getElementById('developer');

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
in1a.classList = "form-control mb-1 offset-2 col-lg-8 offset-lg-4 col-xl-8 offset-xl-2";
in1a.setAttribute('placeholder', 'Ingresa tu Nombre');
in1a.required = true;
in1b.id = "Empresa";
in1b.type = "text";
in1b.classList = "form-control mb-1 offset-2 col-lg-8 offset-lg-4 col-xl-8 offset-xl-2";
in1b.setAttribute('placeholder', 'Ingresa tu empresa');
in1b.required = true;
in1c.id = "email";
in1c.setAttribute('type', 'email');
in1c.classList = "form-control offset-2 col-lg-8 offset-lg-4 col-xl-8 offset-xl-2";
in1c.setAttribute('placeholder', 'ingresa tu email');
in1c.required = true;
in2a.id = "in2a";
in2a.value = "Entrar";
in2a.className = "btn btn-outline-secondary mb-1  offset-4 col-lg-8 offset-lg-4 col-xl-8 offset-xl-2";
in2a.type = "button";
in2a.setAttribute('onclick', 'developer()');
in2b.id = "in2b";
in2b.value = "ENVIAR";
in2b.className = "d-none";
in2b.type = "submit";
in2b.addEventListener('click', correo);//es igual a in2a.setAttribute('onclick', 'developer()');
label.id = "label-checkbox"
label.className = "mt-2 offset-3 col-lg-8 offset-lg-4 col-xl-8 offset-xl-2";
in3a.id = "checkbox";
in3a.type = "checkbox";
in3a.addEventListener('change', e => {permiso(e);});
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

const checkbox = document.getElementById('checkbox');
const nombre = document.getElementById('Nombre');
const empresa = document.getElementById('Empresa');
const email = document.getElementById('email');