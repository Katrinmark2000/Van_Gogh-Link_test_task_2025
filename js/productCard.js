export function ProductCard({ title, stock, img }) {
    const template = document.getElementById("cards__product-template");
    const card = template.content.cloneNode(true);
  
    card.querySelector(".card-img").src = img;
    card.querySelector(".card-title").textContent = title;

    const text = card.querySelector(".card-stock__text");
    const icon = card.querySelector(".card-stock__icon");

    text.textContent = stock

    if (stock.toLowerCase().includes("в наличии")) {
        icon.src = "./assets/icon-logo/in-stock.svg";
      } else {
        icon.src = "./assets/icon-logo/not-in-stock.svg";
      }
  
    return card;
  }