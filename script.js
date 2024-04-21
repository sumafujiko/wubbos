// Function for validation check
(function () {
    'use strict'
  

    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            apolgise();
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
            
      })
      
  })()

function apolgise(){
    alert("We are currently not accepting contact forms. However we appreciate your opinions and custom! Check back again soon.");
}

let images = [
  '../images/about-1.jpeg',
  '../images/about-3.jpeg',
  '../images/home-1.jpeg',
  '../images/home-2.jpeg',
  '../images/home-3.jpeg',
  '../images/home-3.jpeg',
  '../images/home-bottom-1.jpeg',
  '../images/home-bottom-2.jpeg',
  '../images/home-bottom-3.jpeg',
  '../images/shop-images/board-game.jpeg',
  '../images/shop-images/cap.jpeg',
  '../images/shop-images/cover.jpeg',
  '../images/shop-images/dress.jpeg',
  '../images/shop-images/figurines.jpeg',
  '../images/shop-images/hat.jpeg',
  '../images/shop-images/keychain.jpeg',
  '../images/shop-images/necklace.jpeg',
  '../images/shop-images/phone-case.jpeg',
  '../images/shop-images/shirt.jpeg',
  '../images/shop-images/shirt1.jpeg',
  '../images/shop-images/sneakers.jpeg',
  '../images/shop-images/socks.jpeg',
  '../images/shop-images/stickers.jpeg',
  '../images/shop-images/sweaters.jpeg',
];

function showRandomImage() {
  let randomIndex = Math.floor(Math.random() * images.length);
  let selectedImage = images[randomIndex];

  let imgElement = document.getElementById('randomWubboImage');
  imgElement.src = selectedImage;

  imgElement.classList.remove('d-none');
}

document.getElementById('randomWubbo').addEventListener('click', showRandomImage);
