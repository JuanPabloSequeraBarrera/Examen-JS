import './src/components/galley/galleyComponent.js';

document.addEventListener('DOMContentLoaded', (e) => {
    let counter = 0;
    const btnEj01 = document.querySelector('.ej01');
    const btnEj02 = document.querySelector('.ej02');
    const btnEj03 = document.querySelector('.ej03');
    const btnEj04 = document.querySelector('.ej04');
    const divDesarrollo = document.querySelector('.desarrollo');

    const personajes = [
        { img: 'path/to/img1.jpg', nombre: 'Personaje 1', id: 1 },
        { img: 'path/to/img2.jpg', nombre: 'Personaje 2', id: 2 },
    ];

    btnEj01.addEventListener('click', (e) => {
        divDesarrollo.innerHTML = '';
        personajes.forEach((item) => {
            counter++;
            let imgt = `<img class="card-img-top" src="${item.img}" id="card-img" alt="...">`;
            divDesarrollo.insertAdjacentHTML('beforeend', crearEJ01HTML(imgt, item.nombre, item.id));
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

    const crearEJ01HTML = (imgt, nombre, id) => {
        let skillHTML = /* html */`
        <card-component class="g-3 col-4 col-sm-6 col-lg-3">
            <span slot="imagen">${imgt}</span>
            <span slot="nombre">${nombre}</span>
            <span slot="numero">${id}</span>
        </card-component>`;
        return skillHTML;
    }

    const crearEJ02HTML = () => {
        let skillHTML = /* html */`
        <mensaje-component>
            <h1>Holaaa</h1>
        </mensaje-component>
        `;
        return skillHTML;
    }

    const crearEJ03HTML = () => {
        let skillHTML = /* html */`
        <mensaje-component>
            <h1>Este es el Ejemplo 03</h1>
        </mensaje-component>
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

