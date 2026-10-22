const conferetema = document.getElementById('checktema')
const ano = new Date().getFullYear();
document.getElementById("ano-atual").innerText = ano
conferetema.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  
})