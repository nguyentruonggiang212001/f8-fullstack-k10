//Bài2
function showTime() {
  setInterval(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    console.log(`Thời gian hiện tại là: ${hours}:${minutes}:${seconds}`);
  }, 1000);
}
showTime();
