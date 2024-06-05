import './src/components/imc/weight.js';
import './src/components/dynamic-table/dynamic-tabla.js'
document.addEventListener('DOMContentLoaded', (e) => {
    const btnEj01 = document.querySelector('.ej01');
    const btnEj02 = document.querySelector('.ej02');
    const btnEj03 = document.querySelector('.ej03');
    const btnEj04 = document.querySelector('.ej04');
    const divDesarrollo = document.querySelector('.desarrollo');

    const peso = [
        { img: 'path/to/img1.jpg', nombre: 'CONTROLE SU PESO', id: 1 },
    ];

    btnEj01.addEventListener('click', (e) => {
        divDesarrollo.innerHTML = '';
        peso.forEach((item) => {
            let imgt = `<img class="card-img-top" src="${item.img}" id="card-img" alt="...">`;
            divDesarrollo.insertAdjacentHTML('beforeend', crearEJ01HTML(imgt, item.nombre));
        });
    });

    btnEj02.addEventListener('click', (e) => {
        divDesarrollo.innerHTML = '';
        divDesarrollo.insertAdjacentHTML('beforeend', crearEJ02HTML());
    });

    btnEj03.addEventListener('click', (e) => {
        divDesarrollo.innerHTML = '';
        divDesarrollo.insertAdjacentHTML('beforeend', crearEJ03HTML());
    });

    btnEj04.addEventListener('click', (e) => {
        divDesarrollo.innerHTML = '';
        divDesarrollo.insertAdjacentHTML('beforeend', crearEJ04HTML());
    });

    const crearEJ01HTML = ( nombre) => {
        let skillHTML = /* html */`
        <weight-component class="g-3 col-4 col-sm-6 col-lg-3">
            <span slot="nombre">${nombre}</span>
        </weight-component>`;
        return skillHTML;
    }

    const crearEJ02HTML = () => {
        let skillHTML = /* html */`
        <mensaje-component>
            <h1>Hola soy Juan</h1>
        </mensaje-component>
        `;
        return skillHTML;
    }

    const crearEJ03HTML = () => {
        let skillHTML = /* html */`
        <table-component>
            <h1>Este es el Ejemplo 03</h1>
        </table-component>
        `;
        return skillHTML;
    }

    const crearEJ04HTML = () => {
        let skillHTML = /* html */`
        <mensaje-component>
            <h1>Este es el Ejemplo 04</h1>
        </mensaje-component>
        `;
        return skillHTML;
    }
});




    // // case ("3"):
    //     weight = prompt ("Enter your weight")
    //     height = prompt ("Enter your height")
    //     calculateIMC(weight, height) 
    // //     break;
