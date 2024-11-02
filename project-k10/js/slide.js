const dataSlide = [
  {
    id: 1,
    image:
      "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fhcm.fstorage.vn%2Fgppm2%2Fprod%2Fcms%2F1730431004411457.jpg&w=1920&q=75",
  },
  {
    id: 2,
    image:
      "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fhcm.fstorage.vn%2Fgppm2%2Fprod%2Fcms%2F17304258988015547.jpg&w=1920&q=75",
  },
  {
    id: 3,
    image:
      "https://tokyolife.vn/_next/image?url=https%3A%2F%2Fhcm.fstorage.vn%2Fgppm2%2Fprod%2Fcms%2F17150541229617388.jpg&w=1920&q=75",
  },
];

const carouselInner = document.getElementById("carousel-inner");
const nextBtn = document.getElementsByClassName("next")[0];
const prevBtn = document.getElementsByClassName("prev")[0];
let currSlide = 0;

const dots = document.querySelectorAll(".dot");
dots.forEach((item, index) => {
  item.addEventListener("click", () => setSlideByDot(index));
});

function setSlideByDot(index) {
  currSlide = index;
  renderSlide();
}

function renderSlide() {
  carouselInner.innerHTML = "";
  dataSlide.forEach((slide, index) => {
    const slideMain = createSlideElement(slide, index);
    carouselInner.appendChild(slideMain);
  });
  for (const item of dots) {
    item.style.background = "white";
  }
  dots[currSlide].style.background = "red";
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

InfinitySlide();

renderSlide();
