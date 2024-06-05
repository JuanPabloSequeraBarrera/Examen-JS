

export class Weight extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = /* html */ `
            <style>
                @import "./css/bootstrap/bootstrap.min.css";
                @import "./js/bootstrap/bootstrap.min.css";
            </style>
            <div class="card" style="width: 18rem;">
                <slot name="imagen"></slot>
                <div class="card-body">
                    <h5 class="card-title"><slot name="nombre"></slot></h5>
                    <p class="card-text"><slot name="numero"></slot></p>
                    <button id="calculateIMCBtn">Calculate IMC</button>
                    <div id="imcResult"></div>
                </div>
            </div>
        `;

        this.shadowRoot.querySelector('#calculateIMCBtn').addEventListener('click', () => {
            const peso = prompt("Please enter your weight (kg):");
            const altura = prompt("Please enter your height (m):");
            if (peso && altura) {
                calculateIMC(parseFloat(peso), parseFloat(altura), this.shadowRoot.querySelector('#imcResult'));
            } else {
                alert("Both weight and height must be provided.");
            }
        });
    }
}
const calculateIMC = (peso, altura, resultContainer) => {
    let operation = (peso / (altura * altura));
    let category = "";
    let imageUrl = "";

    if (operation < 18.5) {
        category = "normal";
        imageUrl = "./imgs/normal.png";
    } else if (operation >= 24.9 && operation <= 29.9) {
        category = "sobrepeso";
        imageUrl = "./imgs/sobrepeso.png";
    } else if (operation >= 30 && operation <= 34.9) {
        category = "obesidad1";
        imageUrl = "path/to/sobrepeso1.jpg";
    } else if (operation >= 35 && operation <= 39.9) {
        category = "obesidad3";
        imageUrl = "./imgs/obesidad2.png";
    } else {
        category = "Obesidad4";
        imageUrl = "./imgs/obesidad3.png";
    }

    resultContainer.innerHTML = `
        <p>${category}</p>
        <img src="${imageUrl}" alt="${category}" style="width: 100%;">
    `;
};

customElements.define("weight-component", Weight);

