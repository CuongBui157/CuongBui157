const productList = ["A", "B", "C"];
const productListEl = document.querySelector(".productList");

let result = "";
for (let index = 0; index < productList.length; index++) {
  result += "<div>" + productList[index] + "</div>";
}
productListEl.innerHTML = result;
