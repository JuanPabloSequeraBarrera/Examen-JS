const personajes = [
    {
        img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/06/X-Men-Havok-Comic-Art-Scream.jpg'
    },
    {
        img: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/VNLOPVBDM5AATCOW2VHOCMYQHA.jpg'
    },
    {
        img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/x-men-s-cyclops-with-intriguing-blurred-costume-behind.jpg'
    },
    {
        img: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/rogue-xmen.jpg'
    },
    {
        img: 'https://i.pinimg.com/736x/15/7c/0a/157c0a34a52aa8e6ab6afe852ee7af57.jpg'
    },
    {
        img: 'https://img.redbull.com/images/c_crop,x_363,y_0,h_407,w_325/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/02/11/87f8642d-126d-4219-acc9-12ca261bfe39/wolverine'
    },
    {
        img: 'https://i.pinimg.com/originals/3d/4d/1f/3d4d1ffca3b972a9cd43fff96399e601.jpg'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/en/0/03/Iceman.png'
    },
    {
        img: 'https://i.pinimg.com/736x/38/e0/90/38e090d55e951ac38853430d6b39691a.jpg'
    },
    {
        img: 'https://media.thenerdstash.com/wp-content/uploads/2023/11/Nightcrawler-2-1024x576.jpg'
    },
    {
        img: 'https://hips.hearstapps.com/hmg-prod/images/magento-1568362613.jpg'
    },
    {
        img: 'https://comicvine.gamespot.com/a/uploads/scale_medium/12/124259/7823917-marauders2019019_cov-scaled.jpg'
    },
  ];

  class ImageGallery extends HTMLElement {
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
  
      this.images = personajes.map(personaje => personaje.img);
      this.currentImageIndex = 0;
    }
  
    connectedCallback() {
      const gallery = this.shadowRoot.querySelector('.gallery');
      this.images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.classList.add('thumbnail');
        img.addEventListener('click', () => this.openModal(index));
        gallery.appendChild(img);
      });
  
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
  