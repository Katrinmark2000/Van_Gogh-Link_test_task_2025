import { ProductCard } from "./productCard.js";

//моканные данные о товарах
const products = [
    { 
      title: "Стальной канат для лифта GRS 9X21F(9X17)-IWRC 1570",
      stock: "В наличии 50 м.",
      img: "./assets/rope.jpg"
    },
    { 
      title: "Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",
      stock: "Под заказ",
      img: "./assets/belt.jpg"
    },
    { 
      title: "Стальной канат для лифта GRS 8X19S-NFC 1570",
      stock: "В наличии 50 м.",
      img: "./assets/rope2.jpg"
    },
    { 
      title: "Стальной канат для лифта GRS 9X21F(9X17)-IWRC 1570",
      stock: "В наличии 50 м.",
      img: "./assets/rope.jpg"
    },
    { 
        title: "Стальной канат для лифта GRS 8X19W-CWC 1570",
        stock: "В наличии 50 м.",
        img: "./assets/rope3.jpg"
      },
    { 
      title: "Купить плоский тяговый ремень для лифта GRS AAA717AJ (8 кордов)",
      stock: "В наличии 50 м.",
      img: "./assets/belt.jpg"
    }
  ];
  
  const list = document.getElementById("product-list");
  function renderProducts() {
    list.innerHTML = "";
  
    //если экран меньше или равен 580px → показываем только 4 карточки
    const items = window.innerWidth <= 580 ? products.slice(0, 4) : products;
  
    items.forEach(product => list.appendChild(ProductCard(product)));
  }

  renderProducts();
  buttonOnClick();

  //слушаем ресайз, чтобы карточки обновлялись при изменении ширины окна
window.addEventListener("resize", () => {
  renderProducts();
  buttonOnClick();
});

  //не поняла по макету как должна блокироваться кнопка, сделала так пока что
  export function buttonOnClick() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle('button--active');
        });
    });
}

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
  });
