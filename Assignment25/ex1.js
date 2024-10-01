//bài 1
function calculateAge(birthday) {
  const [day, month, year] = birthday.split("/");
  console.log([day, month, year]);
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return "Ngày hoặc tháng không hợp lệ.";
  }
  const birthDate = new Date(year, month - 1, day);
  const currentDate = new Date();
  if (birthDate > currentDate) {
    return "Ngày sinh không thể lớn hơn ngày hiện tại.";
  }
  const difference = currentDate - birthDate;
  const daysLived = difference / (1000 * 60 * 60 * 24);
  return `Bạn đã sống ${daysLived.toFixed(0)} ngày.`;
}

const birthday = "02/01/2001";
console.log(calculateAge(birthday));
