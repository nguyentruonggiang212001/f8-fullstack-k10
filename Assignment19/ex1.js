function calculateTaxiBill(km) {
  let bill = 0;

  if (km <= 1) {
    return km * 15000;
  } else if (km <= 5) {
    return 15000 + (km - 1) * 13500;
  } else {
    bill = 15000 + 4 * 13500 + (km - 5) * 11000;
  }

  if (km > 120) {
    bill *= 0.9;
  }
  return bill;
}

const km = Number(prompt("Nhập số km"));
alert(`Tổng tiền taxi cho ${km} km là: ${calculateTaxiBill(km)}VND`);
