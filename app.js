let count = 0;

const updateCounterValue = () => {
  document.getElementById("counter-text").innerText = count;
};

const incrementCounter = () => {
  count < 20 && count++;
  updateCounterValue();
};

const decrementCounter = () => {
  if (count > 0) count--;
  updateCounterValue();
};

const restartCounter = () => {
  count = 0;
  updateCounterValue();
};
