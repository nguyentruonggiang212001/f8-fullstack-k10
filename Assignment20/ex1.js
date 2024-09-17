let content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;

let totalWord = content.replaceAll(" ", "</span> <span>");
console.log(totalWord);
totalWord = `<span>${totalWord}</span>`;
console.log(totalWord);

const paragraph = document.getElementById("paragraph");
paragraph.innerHTML = totalWord;
const span = document.getElementsByTagName("span");

function highlightWord() {
  let currentIndex = 0;
  let previousIndex = span.length - 1;
  setInterval(() => {
    span[previousIndex].style.color = "black";
    span[currentIndex].style.color = "red";
    previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % span.length;
  }, 1000);
}

highlightWord();
