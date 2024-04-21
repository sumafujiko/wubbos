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
  './images/about-1.jpeg',
  './images/about-3.jpeg',
  './images/home-1.jpeg',
  './images/home-2.jpeg',
  './images/home-3.jpeg', 
  './images/home-3.png',
  './images/home-bottom-1.jpeg',
  './images/home-bottom-2.jpeg',
  './images/home-bottom-3.jpeg'
]; 
function showRandomImage() {
  let randomIndex = Math.floor(Math.random() * images.length); 
  let selectedImage = images[randomIndex]; 

  
  let imgElement = document.getElementById('randomWubboImage');
  imgElement.src = selectedImage;
}

// Add event listener to button
document.getElementById('randomWubbo').addEventListener('click', showRandomImage);

