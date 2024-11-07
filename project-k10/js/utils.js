export function getParams(key) {
  console.log(window.location.search);
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

export function render(target, datas) {
  datas.forEach((item) => {
    const div = document.createElement("div");
    div.className = "col-lg-4 col-md-6 col-sm-6 col-12";
    div.innerHTML = /*html*/ `
        <div class="product-card">
          <a href='./product-detail.html?id=${item.id}'><img src="${item.thumbnail}" alt="${item.title}" /></a>
          <div class="product-infor">
            <h2 ><a href='./product-detail.html?id=${item.id}'>${item.title}</a></h2>
            <div>Giá: ${item.price}</div>
            <p>Mô tả: ${item.description}</p>
            <p>Danh mục: ${item.category}</p>
            <button><a href='./product-detail.html?id=${item.id}'>Xem chi tiết</a></button>
          </div>
        </div>
    `;
    target && target.appendChild(div);
  });
}
