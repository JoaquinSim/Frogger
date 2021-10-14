let elemento = document.getElementById('elemento');
window.addEventListener('keydown', (e) =>{
  let tecla = e.key;
  console.log( e.key)

  switch (tecla) {
    case 'ArrowUp':
      elemento.style.transform = "translateY(-100px)"
      break;
    case 'ArrowDown':
      elemento.style.transform = "translateY(100px)"
      break;
    default:

  }
})
