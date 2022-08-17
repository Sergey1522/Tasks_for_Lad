console.log("hello");
const form = document.querySelector("#form");
// const number = document.querySelector("#number");
const div = document.querySelector(".list");
const move = document.querySelector(".move");
const newGame = document.querySelector(".btn-reset");

const getNumber = function () {
  let numberArr = [];
  while (numberArr.length < 4) {
    let newNumber = Math.floor(Math.random() * 10);
    if (numberArr.indexOf(newNumber) < 0) {
      numberArr.push(newNumber);
    }
  }
  return numberArr;
};

let result = getNumber();
let str = result.join("");
console.log(str);

const play = function () {
  let enterNum = document.querySelector("#number").value;
  // console.log(typeof +enterNum);
  let arr = [];
  if (!+enterNum && +enterNum !== "") {
    console.log(enterNum);
    alert("Введите 4-х значное число!");
  } else if (enterNum.length > 4 || enterNum.length < 4) {
    alert("Введите не более 4-х чисел!");
  } else {
    for (let i = 0; i < 4; i++) {
      let newNumElem = parseInt(enterNum.substr(i, 1));
      arr.push(newNumElem);
    }
  }
  chekNuber(arr, result);
  document.querySelector("#number").value = "";
  console.log(enterNum);
};

const chekNuber = function (arg, par) {
  let bulls = 0;
  let cows = 0;
  let countTurns = parseInt(document.querySelector(".turn-count").textContent);
  console.log(countTurns);

  for (let i = 0; i < 4; i++) {
    if (arg[i] == par[i]) {
      bulls++;
    } else if (par.indexOf(arg[i]) >= 0) {
      cows++;
    }
  }
  countTurns--;
  document.querySelector(".turn-count").textContent = countTurns;
  if (countTurns == 0) {
    alert("Вы потратили все ходы!");

    move.removeEventListener("click", play);
  } else if (bulls == 4) {
    alert("Победа!");
    move.removeEventListener("click", play);
  }

  console.log(countTurns);
  console.log("bulls :", bulls);
  console.log("cows :", cows);
  dataOutput(arg, bulls, cows);
};

const dataOutput = function (arg, bulls, cows) {
  let string = arg.join("");

  let list = document.querySelector(".list");
  let ul = document.createElement("ul");
  list.appendChild(ul);
  ul.innerHTML = `<li>${string}   Быки : ${bulls}, Коровы : ${cows}</li>`;

  console.log(string);
};

move.addEventListener("click", play);
newGame.addEventListener("click", () => {
  location.reload();
  return false;
});
