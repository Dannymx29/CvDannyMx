function correo(e){
    
    Swal.fire({
        title: 'Muchas gracias.',
        text:'En tu correo encontraras una copia del CV en PDF.',
        confirmButtonText: 'Continuar',
        footer: '<span>Segimos aprendiendo.</span>',
        width: '50%',
        padding: '1rem',
        color: '#000',
        backdrop: true,
        timer: 5000,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        showConfirmButton: false,
        imageUrl: 'assets/imagenes/LogoDMX.png',
        imageWidth: '100px',
        imageHeight: '100px',
        imageAlt: 'logo',
    })
}

function permiso(e){
    if (e.target.checked) {
        in2b.classList = 'd-block btn btn-outline-secondary mb-1 offset-4 col-lg-8 offset-lg-4 col-xl-8 offset-xl-2';
    }else{
        in2b.classList = 'd-none';
    }
}

function developer(){
    //variables
    d = 1; 

    //creacion de etiquetas
    const form = document.createElement('form');
    const divCond = document.createElement('div');
    const divRd = document.createElement('div');
    const divCd = document.createElement('div');
    const h2 = document.createElement('h1');
    const divRd2 = document.createElement('div');
    const divCd2a = document.createElement('div');
    const h3 = document.createElement('h1');
    const p = document.createElement('p');
    const divCd2b = document.createElement('div');
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
    const divRd3 = document.createElement('div');
    const divCd3 = document.createElement('div');
    const clip1 = document.createElement('video');
    const enlace = document.createElement('a');
    const clip1play = document.createElement('button');
    const clip1pausa = document.createElement('button');
    
    //propiedade de etiquetas
    form.id = "Dev";
    form.classList.add('mb-2');
    divCond.id = "container";
    divCond.className = "container";
    divRd.id = "row";
    divRd.className = "row";
    divCd.id = "R1-C1";
    divCd.className = "col-sm-12";
    h2.className = "h2";
    divRd2.id = "row2";
    divRd2.className = "row mb-2";
    divCd2a.id ="R2-C1";
    divCd2a.className = "col-sm-6";
    h3.classList = "h5";
    divCd2b.id = "R2-C2";
    divCd2b.className = "col-sm-6"
    divRd3.id = "row3";
    divRd3.className = "row"    
    divCd3.className = "offset-1 col-sm-9"
    clip1.id = "clip1";
    clip1.className = "clip1";
    clip1.setAttribute("src", './TierraTecnologica.mp4');
    enlace.id = "enlace";
    enlace.className = "enlace col-sm-3 mb-1 ml-1";
    enlace.textContent = 'Mas información.';
    enlace.setAttribute('href','https://github.com/Dannymx29');
    clip1play.id = "clip1play";
    clip1play.type = "button";
    clip1play.className = "col-sm-3 mb-1 ml-1 btn btn-outline-secondary";
    clip1play.textContent = "Play";
    clip1pausa.id = "clip1pausa";
    clip1pausa.type = "button";
    clip1pausa.className = "col-sm-3 mb-1 ml-1 btn btn-outline-secondary";
    clip1pausa.textContent = "Pausa";
            
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
    divCond.appendChild(divRd);
    divRd.appendChild(divCd);
    divCd.appendChild(h2);    
    //titulo, parrafo y 
    divCond.appendChild(divRd2);
    divRd2.appendChild(divCd2a);
    divCd2a.appendChild(h3);
    divCd2a.appendChild(p);
    divRd2.appendChild(divCd2b);
    divCd2b.appendChild(ul);
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
   //enlace, video y botones
    divCond.appendChild(divRd3);
    divRd3.appendChild(divCd3);
    divCd3.appendChild(clip1);    
    divCd3.appendChild(enlace);
    divCd3.appendChild(clip1play);
    divCd3.appendChild(clip1pausa);
    
    //referencias de html
    const video_mp4 = document.getElementById('clip1'), botonplay = document.getElementById('clip1play'), botonpausa = document.getElementById('clip1pausa');

    //eventos con funciones
    botonplay.addEventListener('click', () => {
        video_mp4.play();
    });
    botonpausa.addEventListener('click', () => {
        video_mp4.pause();
    });

    //condicionales
    if(d = 1){
        in2a.setAttribute('onclick', '');
    } 
}

let d = 0;

//referencias HTML globales.
const padre = document.getElementById('developer');


const form = document.createElement('form');
const h1 = document.createElement('h1');
const divCon = document.createElement('div');
const divR = document.createElement('div');
const divC = document.createElement('div');
const in1a = document.createElement('input');
const in1b = document.createElement('input');
const in1c = document.createElement('input');
const divC2 = document.createElement('div');
const in2a = document.createElement('input');
const in2b = document.createElement('input');
const label = document.createElement('label');
const in3a = document.createElement('input');

form.id = "CV";
h1.textContent = 'Bienvenido a mi Cv.';
divCon.className = "container";
divR.className = "row";
divC.className = "offset-1 col-sm-5 mb-3";
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
divC2.className = "col-sm-5 mb-3";
in2a.id = "in2a";
in2a.value = "Entrar";
in2a.className = "btn btn-outline-secondary mb-1 offset-4 col-lg-8 offset-lg-4 col-xl-8 offset-xl-2";
in2a.type = "button";
in2a.setAttribute('onclick', 'developer()');
in2b.id = "in2b";
in2b.value = "ENVIAR";
in2b.className = "d-none";
in2b.type = "submit";
in2b.addEventListener('click', correo);
label.id = "label-checkbox"
label.className = "mt-2 offset-3 col-lg-8 offset-lg-4 col-xl-8 offset-xl-2";
in3a.id = "checkbox";
in3a.type = "checkbox";
in3a.addEventListener('change', e => {permiso(e);});
in3a.required = true;

const text_label = document.createTextNode(' Recibir Cv por correo.');

padre.appendChild(form);
form.appendChild(h1);
form.appendChild(divCon);
divCon.appendChild(divR);
divR.appendChild(divC);
divC.appendChild(in1a);
divC.appendChild(in1b);
divC.appendChild(in1c);
divR.appendChild(divC2);
divC2.appendChild(in2a);
divC2.appendChild(in2b);
label.appendChild(in3a);
label.appendChild(text_label);
divC2.appendChild(label);

const checkbox = document.getElementById('checkbox');
const nombre = document.getElementById('Nombre');
const empresa = document.getElementById('Empresa');
const email = document.getElementById('email');