let count = 0;
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");


function animateCounter() {
  counter.classList.add("counter-animate");
  setTimeout(() => counter.classList.remove("counter-animate"), 150);
}


function updateCounter() {
  counter.textContent = count;
  animateCounter();
}


incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});


decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCounter();
  }
});


resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});


function changebackground(option) {
  let imageUrl = '';

  switch(option) {
    case 1:
      imageUrl = 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80'; // Nature
      break;
    case 2:
      imageUrl = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1600&q=80'; // City
      break;
    case 3:
      imageUrl = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80'; // Mountains
      break;
  }

  document.body.style.backgroundImage = `url('${imageUrl}')`;
}
