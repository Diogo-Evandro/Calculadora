function addChar(input, character) {
  if(input.value == null || input.value == "0")
      input.value = character;
  else
      input.value += character;
}

function deleteChar(input) {
  input.value = input.value.substring(0, input.value.length - 1);
}

function changeSign(input) {
  if(input.value.substring(0, 1) == "-")
      input.value = input.value.substring(1, input.value.length)
  else
      input.value = "-" + input.value;
}

function compute(form) {
  form.display.value = eval(form.display.value);
}

function checkNum(str) {
  for (let i = 0; i < str.length; i++) {
      const ch = str.charAt(i);
      if (ch < "0" || ch > "9") {
          if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "." && ch != "(" && ch!= ")") {
              alert("invalid entry!");
              return false;
          }
      }
  }
  return true;
}

function square(form) {
  form.display.value = eval(form.display.value) * eval(form.display.value);
}

function sqrt(form) {
  form.display.value = Math.sqrt(eval(form.display.value));
}

function percent(input) {
  input.value = eval(input.value) / 100;
}

function ln(form) {
  form.display.value = Math.log(eval(form.display.value));
}

function exp(form) {
  form.display.value = Math.exp(eval(form.display.value));
}

function cos(form) {
  form.display.value = Math.cos(eval(form.display.value));
}

function sin(form) {
  form.display.value = Math.sin(eval(form.display.value));
}

function tan(form) {
  form.display.value = Math.tan(eval(form.display.value));
}
