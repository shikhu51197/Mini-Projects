let render = () => {
  let Products = JSON.parse(localStorage.getItem("Products")) || [];
  let container = document.getElementById("container");
  container.innerHTML = null;

  Products.forEach(
    ({ product_image, product_name, product_price, product_category }) => {
      if (product_category === "t-shirts") {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = product_image;
        img.style.height = "100px";
        img.style.width = "100px";

        let h3 = document.createElement("h3");
        h3.innerText = product_name;

        let p = document.createElement("p");
        p.innerText = product_price;

        div.append(img, h3, p);
        container.append(div);
      } else {
      }
    }
  );
};
render();
