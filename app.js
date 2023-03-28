let count = 0;

const updateCounterValue = () => {
  document.getElementById("counter-text").innerText = count;
}

const increment = () => {
  count < 20 && count++
  updateCounterValue()
}

const decrement = () => {
  if (count > 0) count--
    updateCounterValue()
}

const restart = () => {
  count = 0;
  updateCounterValue()
}