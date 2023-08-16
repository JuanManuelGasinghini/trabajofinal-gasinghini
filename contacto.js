document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nombre = form.nombre.value;
      const email = form.email.value;
      const provincia = form.provincia.value;
      const ciudad = form.ciudad.value;
      const mensaje = form.mensaje.value;
  
      const formData = {
        nombre,
        email,
        provincia,
        ciudad,
        mensaje
      };
  
  
      saveFormData(formData);
  

      form.reset();
    });
  
    function saveFormData(data) {
      let formDataArray = JSON.parse(localStorage.getItem("formData")) || [];
      formDataArray.push(data);
      localStorage.setItem("formData", JSON.stringify(formDataArray));
    }
  });
  