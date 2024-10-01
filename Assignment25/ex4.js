//bài 4
function countDownNewYear() {
  const now = new Date();
  const newYearDate = new Date("2025-01-01");
  const dayNewYear = newYearDate.getTime() - now.getTime();
  const daysLeft = dayNewYear / (1000 * 60 * 60 * 24);
  console.log(
    `Số ngày còn lại đến Tết Dương Lịch 2025: ${daysLeft.toFixed(0)} ngày`
  );
}
countDownNewYear();
