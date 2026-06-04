// ============================================================
// 1. NAVBAR — cambia de fondo al hacer scroll
// Cuando el usuario baja más de 50px, añadimos una clase
// que oscurece la navbar para que destaque más.
// ============================================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = '#000';
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
  } else {
    navbar.style.background = '#111';
    navbar.style.boxShadow = 'none';
  }
});


// ============================================================
// 2. ANIMACIONES AL HACER SCROLL
// Cuando un elemento entra en pantalla, le añadimos la clase
// 'visible' que lo hace aparecer con una transición suave.
// ============================================================

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// Observamos las cards y secciones
document.querySelectorAll('.service-card, .about-content, .contact-form').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});


// ============================================================
// 3. FORMULARIO — mensaje de confirmación al enviar
// Evitamos que la página se recargue con preventDefault()
// y mostramos un mensaje de éxito al usuario.
// ============================================================

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que la página se recargue

  // Creamos el mensaje de éxito
  const mensaje = document.createElement('p');
  mensaje.textContent = '✓ Booking request sent! We will contact you soon.';
  mensaje.style.color = '#c9a84c';
  mensaje.style.fontSize = '16px';
  mensaje.style.marginTop = '20px';

  // Lo añadimos después del formulario
  form.after(mensaje);

  // Limpiamos el formulario
  form.reset();

  // Ocultamos el mensaje después de 4 segundos
  setTimeout(() => {
    mensaje.remove();
  }, 4000);
});