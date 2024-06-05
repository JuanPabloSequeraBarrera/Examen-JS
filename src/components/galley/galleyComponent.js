
export class GalleryComponent extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = /* html */ `
            <style rel="stylesheet">
                @import "./css/bootstrap/bootstrap.min.css";
                @import "./js/boostrap/boostrap.min.csss";
            </style>
            <div class="card" style="widht: 18rem;">
                <slot name="image"></slot>
                <div class="card-body">
                    <h5 class="card-title"><slot name="nombre"></slot></h5>
                    <p class="card-text"><slot name="numero"></slot></p>
                </div>
            </div>
        `;
    }
}
customElements.define("gallery-component",GalleryComponent);
