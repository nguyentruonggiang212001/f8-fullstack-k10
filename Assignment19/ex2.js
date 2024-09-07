function calcElectricityBill(kWh) {
  let bill = 0;

  if (kWh <= 50) {
    bill = kWh * 1.678;
  } else if (kWh >= 51 && kWh <= 100) {
    bill = 50 * 1.678 + (kWh - 50) * 1.734;
  } else if (kWh >= 101 && kWh <= 200) {
    bill = 50 * 1.678 + 50 * 1.734 + (kWh - 100) * 2.014;
  } else if (kWh >= 201 && kWh <= 300) {
    bill = 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + (kWh - 200) * 2.536;
  } else if (kWh >= 301 && kWh <= 400) {
    bill =
      50 * 1.678 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + (kWh - 300) * 2.834;
  } else {
    bill =
      50 * 1.678 +
      50 * 1.734 +
      100 * 2.014 +
      100 * 2.536 +
      100 * 2.834 +
      (kWh - 400) * 2.927;
  }

  return bill;
}

const kWh = Number(prompt("Nhập số kWh tiêu thụ:"));
alert(
  `Tiền điện phải trả cho ${kWh} kWh là: ${calcElectricityBill(kWh).toFixed(
    3
  )} đồng`
);
