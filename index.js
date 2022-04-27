const passwordInput = document.getElementById('password')
const background = document.getElementById('background')


passwordInput.addEventListener('input', (e) => {
  const inputValue = e.target.value
  const length = inputValue.length
  const blurValue = 20 - length
  background.style.filter = `blur(${blurValue}px)`
})





