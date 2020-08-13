const passLength = document.querySelector(".password-length"),
  upperCase = document.querySelector(".include-upper"),
  lowerCase = document.querySelector(".include-lower"),
  symbol = document.querySelector(".include-symbols"),
  numberS = document.querySelector(".include-numbers"),
  result = document.querySelector(".result-password"),
  generateBtn = document.querySelector(".generate");

upperCase.checked = true;
lowerCase.checked = true;

if (result.innerHTML != "") {
  result.style.display = "block";
} else {
  result.style.display = "none";
}

let passwordChances = [];

function randomPassword() {
  result.innerHTML = "";
  if (upperCase.checked == true) {
    passwordChances.push(
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    );
  } else {
    passwordChances = passwordChances.filter((chance) => chance != "A");
    passwordChances = passwordChances.filter((chance) => chance != "B");
    passwordChances = passwordChances.filter((chance) => chance != "C");
    passwordChances = passwordChances.filter((chance) => chance != "D");
    passwordChances = passwordChances.filter((chance) => chance != "E");
    passwordChances = passwordChances.filter((chance) => chance != "F");
    passwordChances = passwordChances.filter((chance) => chance != "G");
    passwordChances = passwordChances.filter((chance) => chance != "H");
    passwordChances = passwordChances.filter((chance) => chance != "I");
    passwordChances = passwordChances.filter((chance) => chance != "J");
    passwordChances = passwordChances.filter((chance) => chance != "K");
    passwordChances = passwordChances.filter((chance) => chance != "L");
    passwordChances = passwordChances.filter((chance) => chance != "M");
    passwordChances = passwordChances.filter((chance) => chance != "N");
    passwordChances = passwordChances.filter((chance) => chance != "O");
    passwordChances = passwordChances.filter((chance) => chance != "P");
    passwordChances = passwordChances.filter((chance) => chance != "Q");
    passwordChances = passwordChances.filter((chance) => chance != "R");
    passwordChances = passwordChances.filter((chance) => chance != "S");
    passwordChances = passwordChances.filter((chance) => chance != "T");
    passwordChances = passwordChances.filter((chance) => chance != "U");
    passwordChances = passwordChances.filter((chance) => chance != "V");
    passwordChances = passwordChances.filter((chance) => chance != "W");
    passwordChances = passwordChances.filter((chance) => chance != "X");
    passwordChances = passwordChances.filter((chance) => chance != "Y");
    passwordChances = passwordChances.filter((chance) => chance != "Z");
  }

  if (lowerCase.checked == true) {
    passwordChances.push(
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    );
  } else {
    passwordChances = passwordChances.filter((chance) => chance != "a");
    passwordChances = passwordChances.filter((chance) => chance != "b");
    passwordChances = passwordChances.filter((chance) => chance != "c");
    passwordChances = passwordChances.filter((chance) => chance != "d");
    passwordChances = passwordChances.filter((chance) => chance != "e");
    passwordChances = passwordChances.filter((chance) => chance != "f");
    passwordChances = passwordChances.filter((chance) => chance != "g");
    passwordChances = passwordChances.filter((chance) => chance != "h");
    passwordChances = passwordChances.filter((chance) => chance != "i");
    passwordChances = passwordChances.filter((chance) => chance != "j");
    passwordChances = passwordChances.filter((chance) => chance != "k");
    passwordChances = passwordChances.filter((chance) => chance != "l");
    passwordChances = passwordChances.filter((chance) => chance != "m");
    passwordChances = passwordChances.filter((chance) => chance != "n");
    passwordChances = passwordChances.filter((chance) => chance != "o");
    passwordChances = passwordChances.filter((chance) => chance != "p");
    passwordChances = passwordChances.filter((chance) => chance != "q");
    passwordChances = passwordChances.filter((chance) => chance != "r");
    passwordChances = passwordChances.filter((chance) => chance != "s");
    passwordChances = passwordChances.filter((chance) => chance != "t");
    passwordChances = passwordChances.filter((chance) => chance != "u");
    passwordChances = passwordChances.filter((chance) => chance != "v");
    passwordChances = passwordChances.filter((chance) => chance != "w");
    passwordChances = passwordChances.filter((chance) => chance != "x");
    passwordChances = passwordChances.filter((chance) => chance != "y");
    passwordChances = passwordChances.filter((chance) => chance != "z");
  }
  if (symbol.checked == true) {
    passwordChances.push("~", "!", "@", "#", "$", "%", "^", "&", "*", "-");
  } else {
    passwordChances = passwordChances.filter((chance) => chance != "~");
    passwordChances = passwordChances.filter((chance) => chance != "!");
    passwordChances = passwordChances.filter((chance) => chance != "@");
    passwordChances = passwordChances.filter((chance) => chance != "#");
    passwordChances = passwordChances.filter((chance) => chance != "$");
    passwordChances = passwordChances.filter((chance) => chance != "%");
    passwordChances = passwordChances.filter((chance) => chance != "^");
    passwordChances = passwordChances.filter((chance) => chance != "&");
    passwordChances = passwordChances.filter((chance) => chance != "*");
    passwordChances = passwordChances.filter((chance) => chance != "-");
  }
  if (numberS.checked == true) {
    passwordChances.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
  } else {
    passwordChances = passwordChances.filter((chance) => chance != "0");
    passwordChances = passwordChances.filter((chance) => chance != "1");
    passwordChances = passwordChances.filter((chance) => chance != "2");
    passwordChances = passwordChances.filter((chance) => chance != "3");
    passwordChances = passwordChances.filter((chance) => chance != "4");
    passwordChances = passwordChances.filter((chance) => chance != "5");
    passwordChances = passwordChances.filter((chance) => chance != "6");
    passwordChances = passwordChances.filter((chance) => chance != "7");
    passwordChances = passwordChances.filter((chance) => chance != "8");
    passwordChances = passwordChances.filter((chance) => chance != "9");
  }

  for (let i = 0; i < passLength.value; i++) {
    let randomNum = Math.floor(Math.random() * passwordChances.length);
    if (passwordChances != "") {
      result.innerHTML += passwordChances[randomNum];
    }
  }

  if (result.innerHTML != "") {
    result.style.display = "block";
  } else {
    result.style.display = "none";
  }

  setTimeout(() => {
    passwordChances = [];
  }, 0);
}

generateBtn.addEventListener("click", randomPassword);
