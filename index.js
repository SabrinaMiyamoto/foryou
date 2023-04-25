const controls = document.querySelectorAll(".control");
let item = 0;
const items = document.querySelectorAll('.item');
const maxItems =items.length;

controls.forEach((control) => {
   controls.addEventListener('click', () => {
      const isLeft = control.classList.contains('.arrow-left')
      console.log('control clicked', isLeft)
   })
})
console.log('hello')