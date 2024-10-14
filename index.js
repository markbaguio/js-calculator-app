const DISPLAY = document.getElementById("display");

function appendToDisplay(input) {
  DISPLAY.value += input;
}

function popFromDisplay() {
  DISPLAY.value = DISPLAY.value.slice(0, -1);
}

function calculate() {
  try {
    DISPLAY.value = eval(DISPLAY.value);
  } catch (error) {
    console.log(error);
    DISPLAY.value = "Error";
  }
}

function clearDisplay() {
  DISPLAY.value = "";
}
