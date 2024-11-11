import { getById } from "./services.js";
import { getParams } from "./utils.js";

const detailEle = document.getElementById("detail");

const id = getParams("id");
console.log(id);
const product = await getById("products", id);
console.log(product);

function renderStars(rating) {
  const fiveStar = '<i class="fa-solid fa-star"></i>';
  const halfStar = '<i class="fa-solid fa-star-half-stroke"></i>';
  const noStar = '<i class="fa-regular fa-star"></i>';

  const stars = [];
  const poinStars = [1, 2, 3, 4, 5];

  for (const starNow of poinStars) {
    if (rating >= starNow) {
      stars.push(fiveStar);
    } else if (rating >= starNow - 0.5) {
      stars.push(halfStar);
    } else {
      stars.push(noStar);
    }
  }

  return stars.join("");
}

function renderRatingBars(rating, star) {
  const maxStars = 5; // Tổng số sao tối đa (5 sao)
  const width = 100; // Độ rộng tổng của thanh (100px)

  // Tính phần trăm của thanh màu cam
  const filledWidth = (rating >= star ? 1 : 0) * width; // Phần màu cam
  const emptyWidth = width - filledWidth; // Phần màu xám

  return `
    <span class="bar filled" style="width: ${filledWidth}px; background-color: orange;"></span>
    <span class="bar empty" style="width: ${emptyWidth}px; background-color: gray;"></span>
  `;
}

function renderDetail(target, data) {
  const productItem = document.createElement("div");
  productItem.innerHTML = /*html*/ `
    <div class="row">
   <div class="col-lg-6 col-sm-12 col-12" >
        <img src="${data.thumbnail}" alt="${data.title}" />
      </div>
      <div class="col-lg-6 col-sm-12 col-12">
       <div class="content-product">
            <p class="header">Bán chạy</p>
            <h1>Sản Phẩm ${data.title}</h1>
            <p class="quantity-text" ><span style="font-weight: 600;">Hãng:</span>  ${
              data.brand
            } </p>
            <div class="SKU"> <span  style="font-weight: 600; color:black">Mã sản phẩm:</span>  ${
              data.sku
            }</div>
            <p><span  style="font-weight: 600;">Danh Mục Sản Phẩm:</span> ${
              data.category
            }</p>
            <div class="description">
                <p><span style="font-weight: 600;">Chi tiết sản phẩm:</span> ${
                  data.description
                }</p>
            </div>
            <div class="content-price">
              <div>
                <span class="price">Giá: ${data.price}$</span>
              </div>
              <div class="stock">
                <span>Còn hàng</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg"
                />
              </div>
            </div>
            <div class="promotion">
              <div class="line"></div>
              <div class="title"><span>KHUYẾN MÃI</span></div>
              <div class="sale">
                <ul>
                  <li>
                    <img src="../img/giftbox.svg" alt="box" />
                    <p>
                      Mua áo chống nắng dáng dài chỉ từ
                      <strong>325.000đ</strong> .
                      <a href="#">Xem hướng dẫn.</a>
                    </p>
                  </li>
                  <li>
                    <img src="../img/giftbox.svg" alt="box" />
                    <p>
                      <strong>GIẢM 10% tối đa 100K</strong> cho đơn từ 333.000đ
                      khi nhập <strong>LUCKY11</strong> tại bước thanh toán.
                      <a href="#">Sao chép</a>
                    </p>
                  </li>
                  <li>
                    <img src="../img/giftbox.svg" alt="box" />
                    <p>
                      Nhập <strong> HPBD111</strong> giảm ngay
                      <strong>111K</strong> tại bước thanh toán cho đơn từ
                      888.000đ. <a href="#">Sao chép</a>
                    </p>
                  </li>
                  <li>
                    <img src="../img/giftbox.svg" alt="box" />
                    <p>
                      Săn sale <span> giày thể thao</span> chỉ từ
                      <strong>499.000đ.</strong> <a href="#"> Xem ngay</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-box">
              <div class="box">
                <img src="../img/sale-online.svg" alt="sale" />
                <p>Giá độc quyền online</p>
              </div>
            </div>
            <div class="zalo">
              <img src="../img/Icon_of_Zalo.svg.png" alt="zalo" />
              <p>Chat ngay để nhận tư vấn sản phẩm & ưu đãi</p>
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>
            <div class="stock">
            <div><p><span style="font-weight: 600;">Còn:</span> ${
              data.stock
            } sản phẩm</p></div>
            <div class="total">         
             <span>CHỌN SỐ LƯỢNG</span>
             <div class="quantity-control">
             <button class="left">-</button>
             <span class="quantity">1</span>
             <button class="right">+</button>
            </div>
            </div>
             </div>
            <div class="buy">
              <button class="buy-cart">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>Thêm giỏ hàng</span>
              </button>
              <button class="buy-bag">
                <i class="fa-solid fa-bag-shopping"></i>
                <span>Mua ngay</span>
              </button>
            </div>
            <div class="market-product">
              <button class="market">
                <p>Cửa hàng có sẵn sản phẩm</p>
              </button>
            </div>
            <div class="line-sub"></div>
            <div class="service">
              <div class="service-sub">
                <img src="../img/Ship.png" alt="ship" />
                <p>Miễn phí giao hàng xem tại giỏ hàng(*)</p>
              </div>
              <div class="service-sub">
                <img src="../img/process.svg" alt="process" />
                <p>1 đổi 1 trong vòng 7 ngày</p>
              </div>
              <div class="service-sub">
                <img src="../img/money-bag.png" alt="money-bag" />
                <p>Kiếm tra hàng trước khi thanh toán</p>
              </div>
            </div>
          </div>
    </div>
    </div>
      <!--Review sản phẩm-->
      <section class="review">
      <div class="container">
        <div class="review-header">
          <h6>ĐÁNH GIÁ TỪ NGƯỜI MUA</h6>
        </div>
        <div class="row">
          <div class="col-lg-6  col-12">
            <div class="review-left">
              <div class="review-left-body">
                <div class="review-text-left">
                  <h3>
                    <span style="font-size: 38px">${data.rating}</span>
                    <span style="font-size: 28px">/5</span>
                  </h3>
                     <div class="star">${renderStars(data.rating)}</div>
                </div>
                <div class="review-left-sub">
                  <div class="review-star-sub">
                    <p>5
                      <i class="fa-solid fa-star"></i
                      ><span class="review-first"></span>
                    </p>
                  </div>
                  <div class="review-star-sub">
                    <p>4<i class="fa-solid fa-star"></i><span></span></p>
                  </div>
                  <div class="review-star-sub">
                    <p>3<i class="fa-solid fa-star"></i><span></span></p>
                  </div>
                  <div class="review-star-sub">
                    <p>2<i class="fa-solid fa-star"></i><span></span></p>
                  </div>
                  <div class="review-star-sub">
                    <p>1<i class="fa-solid fa-star"></i><span></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="review-right">
              <div class="review-right-body">
                <p>Hình ảnh từ người mua</p>
                <img src="${data.thumbnail}" alt="${
    data.title
  }" style="width: 100px; height: 100px;" />
              </div>
            </div>
          </div>
          <div class="line-sub"></div>
          <div class="col-12">
               <div class="reviews-list">
             ${(() => {
               let reviewsHtml = "";
               data.reviews.forEach((review) => {
                 reviewsHtml += `
             <div class="review-item">
             <p class="reviewer-name";>${review.reviewerName}</p>
             <p style="color: rgb(250, 175, 0);"> ${renderStars(
               review.rating
             )}</p>
             <p class="review-comment ";>Đánh giá về sản phẩm:${
               review.comment
             }</p>
             <p class="review-date";>Đã đánh giá vào lúc : ${review.date}</p>
             </div>
              `;
               });
               return reviewsHtml;
             })()}
             </div>
            </div>
      </div>
    </section>
  `;
  target.appendChild(productItem);

  //Thực hiện tính số lượng
  const quantityElement = productItem.querySelector(".quantity");
  const left = productItem.querySelector(".left");
  const right = productItem.querySelector(".right");
  let quantity = 1;

  function updateQuantity() {
    quantityElement.textContent = quantity;
  }

  right.addEventListener("click", () => {
    if (quantity < data.stock) {
      quantity++;
      updateQuantity();
    }
  });

  left.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      updateQuantity();
    }
  });

  updateQuantity();
}

renderDetail(detailEle, product);
