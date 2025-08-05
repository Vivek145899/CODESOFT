let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
