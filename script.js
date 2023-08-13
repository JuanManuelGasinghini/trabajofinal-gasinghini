document.addEventListener('DOMContentLoaded', function() {
  const formularioDeRegistro = document.getElementById('formularioDeRegistro');
  const registroBtn = document.getElementById('registroBtn');

  registroBtn.addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;

    const usuario = { nombre, apellido, email, celular };
    
    // Mostrar prompt de confirmación
    const confirmacion = window.confirm('¿Estás seguro de registrar estos datos?');

    if (confirmacion) {
      // Simulación: guarda los datos en una "base de datos" simulada
      console.log('Usuario registrado:', usuario);
    }
  });
}); 


  