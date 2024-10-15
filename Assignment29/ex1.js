const dataSlide = [
  {
    id: 1,
    title: "Sena vua cờ bạc",
    content: "Vua cờ bạc 36",
    image: "https://game8.vn/media/202302/files/thumb%20Sena.jpg",
  },
  {
    id: 2,
    title: "Sena vua cờ bạc",
    content: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwebWDPp9HeCZZoUlrkHkFqRQlaSCO8vTeCQ&s",
  },
  {
    id: 3,
    title: "Sena vua cờ bạc",
    content: "",
    image: "https://i.ytimg.com/vi/9PuNkM90Oxk/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Sena vua cờ bạc",
    content: "Ít thì 5 quả trứng",
    image:
      "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/moi_ngay_an_2_qua_trung_ga_co_tot_khong_1_Cropped_ea1a31bded.jpg",
  },
  {
    id: 5,
    title: "Sena vua cờ bạc",
    content: "Nhiều thì 1 tên lửa oke ?",
    image:
      "https://static-images.vnncdn.net/files/publish/2022/11/16/ten-lua-my-5-1141.jpg",
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
    item.style.background = "gray";
  }
  dots[currSlide].style.background = "orange";
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
  const title = createTextTitle(slide.title);
  const content = createTextSub(slide.content);
  slideMain.append(img, title, content);
  return slideMain;
}

function createImage(link, alt) {
  const img = document.createElement("img");
  img.setAttribute("src", link);
  img.setAttribute("alt", alt);
  return img;
}

function createTextTitle(titleText) {
  const text = document.createElement("h2");
  text.innerText = titleText;
  return text;
}

function createTextSub(contentText) {
  const texts = document.createElement("p");
  texts.innerText = contentText;
  return texts;
}

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
