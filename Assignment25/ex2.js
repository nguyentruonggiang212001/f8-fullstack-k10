//Bài2
function showTime() {
  setInterval(() => {
    const now = new Date();
    const hours = `${now.getHours()}`.padStart(2, "0");
    const minutes = `${now.getMinutes()}`.padStart(2, "0");
    const seconds = `${now.getSeconds()}`.padStart(2, "0");
    console.log(`Thời gian hiện tại là: ${hours}:${minutes}:${seconds}`);
  }, 1000);
}
showTime();
