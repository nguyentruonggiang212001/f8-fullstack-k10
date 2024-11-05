import { getAll, getById, removeById, updateById } from "./services.js";
import { getParams, render } from "./utils.js";

const { products } = await getAll("products");
console.log(products);

const hotSaleSection = document.getElementById("hot-sale");

render(hotSaleSection, products);
// render(hotSaleSection, products);

const productId = getParams("id");
console.log(productId);

const product = await getById("products", productId);

// Cách 2: Lấy toàn bộ sản phẩm về -> products. Khi cần sản phẩm chi tiết thì sử dụng products.find()
console.log(product);
//

//Hiển thị sản phẩm theo từng danh mục
const categorySelect = document.getElementById("category-select");

// Hàm lọc sản phẩm theo danh mục
function filterByCategory(category) {
  if (!category) {
    return products;
  }
  return products.filter((product) => product.category === category);
}

categorySelect.addEventListener("change", () => {
  hotSaleSection.innerHTML = "";
  render(hotSaleSection, filterByCategory(categorySelect.value));
});

// Tìm kiếm sản phẩm theo tên
const searchInput = document.getElementById("search-input");
const searchMessage = document.getElementById("search-message");

searchInput.addEventListener("input", () => {
  const search = searchInput.value.toLowerCase();
  searchMessage.textContent = "";
  filter(search);
});

// Hàm thực hiện tìm kiếm
function filter(search) {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  hotSaleSection.innerHTML = "";

  if (filteredProducts.length === 0) {
    searchMessage.textContent = "Không tìm thấy sản phẩm.";
  } else {
    render(hotSaleSection, filteredProducts);
  }
}

// Lọc sản phẩm theo khoảng giá
const priceSelect = document.getElementById("price-range");

function filterProducts(selectedRange) {
  let filteredProducts = [];

  if (selectedRange === "1-10") {
    filteredProducts = products.filter(
      (product) => product.price >= 1 && product.price <= 10
    );
  } else if (selectedRange === "10-20") {
    filteredProducts = products.filter(
      (product) => product.price > 10 && product.price <= 20
    );
  } else if (selectedRange === "40-100") {
    filteredProducts = products.filter(
      (product) => product.price > 40 && product.price <= 100
    );
  } else if (selectedRange === "101-2500") {
    filteredProducts = products.filter(
      (product) => product.price > 101 && product.price <= 2500
    );
  } else {
    filteredProducts = [...products];
  }

  filteredProducts.sort((a, b) => a.price - b.price);

  return filteredProducts;
}

priceSelect.addEventListener("change", () => {
  const selectedRange = priceSelect.value;
  hotSaleSection.innerHTML = "";
  render(hotSaleSection, filterProducts(selectedRange));
});

// Sắp xếp sản phẩm
const sortSelect = document.getElementById("sort-select");

function sortProducts() {
  const sortProducts = [...products];

  if (sortSelect.value === "a-z") {
    sortProducts.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sortSelect.value === "z-a") {
    sortProducts.sort((a, b) => {
      if (a.title < b.title) {
        return 1;
      } else if (a.title > b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sortSelect.value === "low-high") {
    sortProducts.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sortSelect.value === "high-low") {
    sortProducts.sort((a, b) => {
      return b.price - a.price;
    });
  }

  return sortProducts;
}

sortSelect.addEventListener("change", () => {
  hotSaleSection.innerHTML = "";
  render(hotSaleSection, sortProducts());
});
