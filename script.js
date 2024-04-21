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


