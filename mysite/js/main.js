// SCROLL
const tabs = document.querySelectorAll(".main-btn");
const navItem = document.querySelectorAll(".nav-item");
const logo = document.querySelectorAll(".logo");

logo[0].addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

logo[1].addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

for (let i = 0; i < tabs.length; i++) {
  tabs[1].addEventListener("click", () => {
    window.scrollTo({ top: 630, behavior: "smooth" });
  });
  tabs[2].addEventListener("click", () => {
    window.scrollTo({ top: 1290, behavior: "smooth" });
  });
}

for (let i = 0; i < navItem.length; i++) {
  navItem[0].addEventListener("click", () => {
    window.scrollTo({ top: 630, behavior: "smooth" });
  });
  navItem[1].addEventListener("click", () => {
    window.scrollTo({ top: 1290, behavior: "smooth" });
  });
  navItem[2].addEventListener("click", () => {
    window.scrollTo({ top: 2020, behavior: "smooth" });
  });
}

// MODAL

const modal = document.querySelector(".modal-wrapper");

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) {
    modal.classList.add("hidden");
  }
});


// calc

const contrib = document.querySelector(".contribution");
const card = document.querySelectorAll(".card");
const total = document.querySelector(".total");
const profit = document.querySelector(".profit");
const percents = document.querySelector(".percents");

let curCard = document.querySelector(".cur-card");

let percentsInt;

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", (e) => {
    card[0].classList.remove("active");
    card[1].classList.remove("active");
    card[2].classList.remove("active");
    card[3].classList.remove("active");
    card[i].classList.add("active");

    switch (i) {
      case 0:
        curCard.innerHTML = "1 день";
        percents.innerHTML = "1.3";
        calcultate(1.3)
        break;
      case 1:
        curCard.innerHTML = "7 дней";
        percents.innerHTML = "2.6";
        calcultate(2.6)
        break;
      case 2:
        curCard.innerHTML = "14 дней";
        percents.innerHTML = "3.3";
        calcultate(3.3)
        break;
      case 3:
        curCard.innerHTML = "1 месяц";
        percents.innerHTML = "4.5";
        calcultate(4.5)
        break;
      default:
        break;
    }
  });
}

function calcultate(props) {
  let contValue = parseInt(contrib.value, 10);
  percentsInt = props

  let profitInt = (contValue / 100) * percentsInt + contValue;
  let totalInt = contValue + profitInt;

  profit.innerHTML = Math.round(profitInt) + " руб.";
  total.innerHTML = Math.round(totalInt) + " руб.";
}

contrib.addEventListener("change", () => {
  calcultate()
});
