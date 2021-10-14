let elemento = document.getElementById('elemento');
let cantidad = 0;
window.addEventListener('keydown', (e) =>{
  let tecla = e.key;
  console.log( e.key)

  switch (tecla) {
    case 'ArrowUp':
      cantidad -= 100;
      elemento.style.transform = `translateY(${cantidad}px)`;
      break;
    case 'ArrowDown':
    cantidad += 100;
    elemento.style.transform = `translateY(${cantidad}px)`;
      break;
    case 'ArrowRight':
    cantidad += 100;
    elemento.style.transform = `translateX(${cantidad}px)`;
      break;
    case 'ArrowLeft':
      cantidad -= 100;
      elemento.style.transform = `translateX(${cantidad}px)`;
      break;
    default:

  }
})
