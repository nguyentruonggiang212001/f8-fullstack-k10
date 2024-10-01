//Bài 3
function countDown(time) {
  if (time <= 0 || isNaN(time)) {
    console.log("Vui lòng nhập số giây dương và không phải là chữ");
    return;
  }
  let countdownInterval = setInterval(function () {
    if (time === 0) {
      clearInterval(countdownInterval);
      console.log("Hết thời gian");
    } else {
      let prefixSecondFormat = time < 10 ? "0" : "";
      console.log(`${prefixSecondFormat}${time}`);
      time--;
    }
  }, 1000);
}
let timeInput = parseInt(prompt("Mời nhập vào thời gian đếm ngược (giây)"));
countDown(timeInput);
