function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {

    // se tiver light mode adicionar a imagem do pacoca senão manter a imagem do apolo
    img.setAttribute('src', './assets/avatarPacoca.png')

  } else {
    img.setAttribute('src', './assets/avatar.png')
  } 
}