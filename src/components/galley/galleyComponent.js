
export class ImageGallery extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
  
      this.shadowRoot.innerHTML = `
        <style>
          .gallery { display: flex; flex-wrap: wrap; }
          .thumbnail { width: 100px; margin: 5px; cursor: pointer; }
          .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); justify-content: center; align-items: center; }
          .modal img { max-width: 90%; max-height: 90%; }
        </style>
        <div class="gallery"></div>
        <div class="modal">
          <img id="modal-image" />
          <button id="prev">Previous</button>
          <button id="next">Next</button>
        </div>
      `;
  
      this.currentImageIndex = 0;
    }
  
    connectedCallback() {
      const gallery = this.shadowRoot.querySelector('.gallery');
      this.images.forEach((image, index) => {
        const img = document.createElement('img');
  
      });
  
      this.shadowRoot.getElementById('prev').addEventListener('click', () => this.navigate(-1));
      this.shadowRoot.getElementById('next').addEventListener('click', () => this.navigate(1));
      this.shadowRoot.querySelector('.modal').addEventListener('click', () => this.closeModal());
    }
  
    openModal(index) {
      this.currentImageIndex = index;
      this.shadowRoot.querySelector('.modal').style.display = 'flex';
      this.updateModalImage();
    }
  
    closeModal() {
      this.shadowRoot.querySelector('.modal').style.display = 'none';
    }
  
    navigate(direction) {
      this.currentImageIndex = (this.currentImageIndex + direction + this.images.length) % this.images.length;
      this.updateModalImage();
    }
  
    updateModalImage() {
      this.shadowRoot.getElementById('modal-image').src = this.images[this.currentImageIndex];
    }
  }
  
  customElements.define('image-gallery', ImageGallery);