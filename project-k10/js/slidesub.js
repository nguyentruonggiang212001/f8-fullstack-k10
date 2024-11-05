const dataSlide = [
  {
    id: 1,
    image: "../ao1.webp",
  },
  {
    id: 2,
    image: "../ao2.webp",
  },
  {
    id: 3,
    image: "../ao3.webp",
  },
  {
    id: 4,
    image: "../ao4.webp",
  },
  {
    id: 5,
    image: "../ao5.webp",
  },
  {
    id: 6,
    image: "../ao6.webp",
  },
];

const carouselInner = document.getElementById("carousel-inner-sub");
const nextBtn = document.getElementsByClassName("next")[0];
const prevBtn = document.getElementsByClassName("prev")[0];
let currSlide = 0;

// const dots = document.querySelectorAll(".dot");
// dots.forEach((item, index) => {
//   item.addEventListener("click", () => setSlideByDot(index));
// });

// function setSlideByDot(index) {
//   currSlide = index;
//   renderSlide();
// }

function renderSlide() {
  carouselInner.innerHTML = "";
  dataSlide.forEach((slide, index) => {
    const slideMain = createSlideElement(slide, index);
    carouselInner.appendChild(slideMain);
  });
  // for (const item of dots) {
  //   item.style.background = "white";
  // }
  // dots[currSlide].style.background = "red";
}
function createSlideElement(slide, index) {
  const slideMain = document.createElement("div");
  slideMain.classList.add("slide");
  if (index === currSlide) {
    slideMain.style.display = "block";
  } else {
    slideMain.style.display = "none";
  }
  const img = createImage(slide.image, slide.title);
  // const title = createTextTitle(slide.title);
  // const content = createTextSub(slide.content);
  slideMain.append(img);
  return slideMain;
}

function createImage(link, alt) {
  const img = document.createElement("img");
  img.setAttribute("src", link);
  img.setAttribute("alt", alt);
  return img;
}

// function createTextTitle(titleText) {
//   const text = document.createElement("h2");
//   text.innerText = titleText;
//   return text;
// }

// function createTextSub(contentText) {
//   const texts = document.createElement("p");
//   texts.innerText = contentText;
//   return texts;
// }

function next() {
  currSlide++;
  if (currSlide >= dataSlide.length) {
    currSlide = 0;
  }
  renderSlide();
}

function prev() {
  currSlide--;
  if (currSlide < 0) {
    currSlide = dataSlide.length - 1;
  }
  renderSlide();
}
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

function InfinitySlide() {
  setInterval(() => {
    next(dataSlide.length);
  }, 3000);
}

// InfinitySlide();

renderSlide();
