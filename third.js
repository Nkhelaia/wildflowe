const audio1 = new Audio('');

const button1 = document.querySelector('[data-btn="1"]')

const stopAllAudio = () => {
    audio1.pause()
  }
  
  button1.addEventListener('click', () => {
    stopAllAudio()
    audio1.play()
  })


  function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }  
