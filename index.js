console.log(document);

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

function getElement(id) {
  return document.getElementById(id);
}

// counter for how many times copied
let copyCount = 0;
let copyCounterDisplay = document.getElementById("total-quantity");

// pick all copy buttons
let copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(function (btn) {
  btn.onclick = function () {
    // find the hotline number inside the same card
    let number = btn.closest(".card").querySelector(".text-3xl").innerText;

    // copy the number to clipboard
    navigator.clipboard.writeText(number);

    // increase copy count
    copyCount++;
    copyCounterDisplay.innerText = copyCount;

    // feedback on button
    let oldText = btn.innerHTML;
    btn.innerHTML = `<i class="fa-solid fa-copy"></i> Copied!`;
    setTimeout(() => (btn.innerHTML = oldText), 1500);
  };
});

//call-button-functionalities//

// ---- Copy buttons ----
document.querySelectorAll(".card .btn").forEach((btn) => {
  if (btn.innerText.includes("Copy")) {
    btn.addEventListener("click", () => {
      const number = btn.closest(".card").querySelector("p.text-3xl").innerText;
      navigator.clipboard.writeText(number).then(() => {
        btn.innerText = "Copied!";
        setTimeout(
          () => (btn.innerHTML = `<i class="fa-solid fa-copy"></i> Copy`),
          1500
        );
      });
    });
  }
});

// ---- Call buttons ----
// starting coins
let coins = 100;
let coinDisplay = document.getElementById("total-coin");
let historyBox = document.getElementById("cart-container");
let clearBtn = document.getElementById("btn-clear");

// ---- Call buttons ----
let callButtons = document.querySelectorAll(".cart-btn");

callButtons.forEach(function (btn) {
  btn.onclick = function () {
    if (coins >= 20) {
      // reduce coins
      coins -= 20;
      coinDisplay.innerText = coins;

      // get service name + number from card
      let card = btn.closest(".card");
      let name = card.querySelector("h2").innerText;
      let number = card.querySelector(".text-3xl").innerText;

      // create call history entry
      let item = document.createElement("div");
      // item.className =
      //   "bg-gray-100 p-2 rounded flex justify-between items-center";

      let time = new Date().toLocaleTimeString();
      item.className =
        "bg-white shadow rounded p-3 flex justify-between items-center";
      // left side: name + number stacked
      item.innerHTML = `
  <div class="flex flex-col">
    <span class="font-bold">${name}</span>
    <span class="text-sm text-gray-600">${number}</span>
  </div>
  <span class="text-xs text-gray-500">${time}</span>
`;

      // add to history and buttons
      historyBox.appendChild(item);
    } else {
      alert("Not enough coins!");
    }
  };
});

// Clear cart buttonss
getElement("btn-clear").addEventListener("click", function () {
  getElement("cart-container").innerHTML = "";
});

// heart counter
let heartCount = 0;
let heartDisplay = document.getElementById("total-heart");

let heartButtons = document.querySelectorAll(".card span.text-gray-400");

heartButtons.forEach(function (heart) {
  heart.onclick = function () {
    if (heart.textContent === "♡") {
      // add to favorites
      heart.textContent = "♥";
      heart.style.color = "red";
      heartCount++;
    } else {
      // remove from favorites
      heart.textContent = "♡";
      heart.style.color = "gray";
      heartCount--;
    }
    heartDisplay.textContent = heartCount;
  };
});
